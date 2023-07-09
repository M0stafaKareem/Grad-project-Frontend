import { FunctionComponent, useState } from "react";
import TableTitle from "./TableTitle";
import TableRow from "./TableRow";
import styles from "./GradesTable.module.css";
import StudentCard from "./StudentCard";

type GradesTableType = {
  isStudentMode: boolean;
};

const GradesTable: FunctionComponent<GradesTableType> = ({
  isStudentMode = false,
}) => {
  const tableStyle = isStudentMode
    ? ` ${styles.studentstable} + ${styles.studentMode}`
    : ` ${styles.studentstable}`;
  return (
    <>
      {isStudentMode && <StudentCard />}
      <fieldset className={tableStyle}>
        <TableTitle isStudent={isStudentMode} />
        <TableRow isStudent={isStudentMode} />
        <TableRow isStudent={isStudentMode} />
        <TableRow isStudent={isStudentMode} />
        <TableRow isStudent={isStudentMode} />
        <TableRow isStudent={isStudentMode} />
        <TableRow isStudent={isStudentMode} />
        <TableRow isStudent={isStudentMode} />
        <TableRow isStudent={isStudentMode} />
      </fieldset>
    </>
  );
};

export default GradesTable;
