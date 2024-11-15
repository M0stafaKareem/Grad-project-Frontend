import { FunctionComponent, useState } from "react";
import TableTitle from "./TableTitle";
import TableRow from "./TableRow";
import styles from "./GradesTable.module.css";
import StudentCard from "./StudentCard";
import RegisterButton from "../../StudendtsPageComponents/Advising/RegisterButton";
import { PushDataService } from "../../../service/pushData";
import Done from "../../General/Done";
import { gradesCalculator } from "../../../service/gradesCalculator";

type GradesTableType = {
  isStudentMode: boolean;
  studentData?: any;
  studentPhoto?: Blob;
  tableData: any;
  semester?: string;
  year?: string;
};

const GradesTable: FunctionComponent<GradesTableType> = ({
  isStudentMode = false,
  studentPhoto,
  semester,
  year,
  tableData,
  studentData,
}) => {
  const tableStyle = isStudentMode
    ? ` ${styles.studentstable} + ${styles.studentMode}`
    : ` ${styles.studentstable}`;

  const p1 = new PushDataService();
  const helper = new gradesCalculator();
  const [updatingData, setUpdatingData] = useState([{}]);
  const [doneIsOpen, setDoneIsOpen] = useState(false);
  let rowCounter = -1;

  const submitHandler = async (isDone: boolean = true) => {
    await p1.assignCourseGrades(updatingData!);
    setDoneIsOpen(isDone);

    let totalHrs = 0;
    let passedSubj = 0;
    let totalPoints = 0;
    tableData &&
      tableData.map((item: any) => {
        if (item.grade) {
          totalHrs += item.subject_hours;
          passedSubj++;
          totalPoints += helper.getCoursePoints(
            item.grade,
            item.subject_hours
          )!;
        }
      });
    isStudentMode
      ? await p1.updateStudentData(
          studentData.student_id,
          +totalPoints / +totalHrs,
          totalHrs,
          passedSubj
        )
      : null;
  };

  return (
    <>
      {doneIsOpen && (
        <Done
          onBtnClick={() => {
            submitHandler(false);
          }}
          type="done"
          btnLabel="done"
          cardDiscription="Grades Updated Successfully"
        />
      )}
      {isStudentMode && studentData && (
        <StudentCard personalData={studentData} photo={studentPhoto!} />
      )}
      <fieldset className={tableStyle}>
        <TableTitle isStudent={isStudentMode} />
        {tableData.map((item: any) => {
          return (
            <TableRow
              rowIndex={++rowCounter}
              updatingFunction={setUpdatingData}
              isStudent={isStudentMode}
              key={item.subject_name + item.student_id}
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
              regState={item.state}
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
        RegBtnOnClick={() => {
          submitHandler(true);
        }}
      />
    </>
  );
};

export default GradesTable;
