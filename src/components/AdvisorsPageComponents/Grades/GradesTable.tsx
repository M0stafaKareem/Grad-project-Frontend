import { FunctionComponent, useState } from "react";
import TableTitle from "./TableTitle";
import TableRow from "./TableRow";
import styles from "./GradesTable.module.css";
import StudentCard from "./StudentCard";

type GradesTableType = {
  isStudentMode: boolean;
  studentData?: any;
  tableData: any;
  searchingKey: {} | number;
};

const GradesTable: FunctionComponent<GradesTableType> = ({
  isStudentMode = false,
  tableData,
  studentData,
  searchingKey,
}) => {
  const tableStyle = isStudentMode
    ? ` ${styles.studentstable} + ${styles.studentMode}`
    : ` ${styles.studentstable}`;

  return (
    <>
      {isStudentMode && <StudentCard />}
      <fieldset className={tableStyle}>
        <TableTitle isStudent={isStudentMode} />
        {tableData.map((item: any) => {
          return (
            <TableRow
              key={item.subject_name}
              isStudent={isStudentMode}
              studentID={isStudentMode ? item.semester : item.student_id}
              studentName={isStudentMode ? item.year : item.user_name}
              subjectName={item.subject_name}
              classWork={item.classwork}
              final={item.final}
              examState={item.exam_state}
              grade={item.grade}
              score={item.score}
            />
          );
        })}
      </fieldset>
    </>
  );
};

export default GradesTable;
