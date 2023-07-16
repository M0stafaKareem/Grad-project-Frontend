import { FunctionComponent, useState } from "react";
import TableTitle from "./TableTitle";
import TableRow from "./TableRow";
import styles from "./GradesTable.module.css";
import StudentCard from "./StudentCard";
import RegisterButton from "../../StudendtsPageComponents/Advising/RegisterButton";
import { PushDataService } from "../../../service/pushData";

type GradesTableType = {
  isStudentMode: boolean;
  studentData?: any;
  tableData: any;
  semester?: string;
  year?: string;
};

const GradesTable: FunctionComponent<GradesTableType> = ({
  isStudentMode = false,
  semester,
  year,
  tableData,
  studentData,
}) => {
  const tableStyle = isStudentMode
    ? ` ${styles.studentstable} + ${styles.studentMode}`
    : ` ${styles.studentstable}`;

  const f1 = new PushDataService();
  const [updatingData, setUpdatingData] = useState([{}]);
  let rowCounter = -1;

  const submitHandler = () => {
    f1.assignCourseGrades(updatingData!);
  };
  return (
    <>
      {isStudentMode && <StudentCard personalData={studentData} />}
      <fieldset className={tableStyle}>
        <TableTitle isStudent={isStudentMode} />
        {tableData.map((item: any) => {
          return (
            <TableRow
              rowIndex={++rowCounter}
              updatingFunction={setUpdatingData}
              isStudent={isStudentMode}
              key={item.subject_name}
              studentID={
                isStudentMode ? studentData.student_id : item.student_id
              }
              studentName={
                isStudentMode ? studentData.user_name : item.user_name
              }
              semester={isStudentMode ? item.semester : semester}
              semesterDate={isStudentMode ? item.year : year}
              subjectName={item.subject_name}
              subjectCode={item.subject_code}
              classWork={item.classwork}
              final={item.final}
              examState={item.exam_state}
              grade={item.grade}
              score={item.score}
            />
          );
        })}
      </fieldset>
      <RegisterButton
        userMode="advisors"
        modifiedStyle={{ top: "710px", left: "1135px" }}
        btnLabel="Submit"
        RegBtnOnClick={submitHandler}
      />
    </>
  );
};

export default GradesTable;
