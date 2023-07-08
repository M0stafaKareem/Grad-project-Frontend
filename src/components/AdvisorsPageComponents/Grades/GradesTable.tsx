import { FunctionComponent, useState } from "react";
import TableTitle from "./TableTitle";
import TableRow from "./TableRow";
import styles from "./GradesTable.module.css";
import StudentCard from "./StudentCard";

const GradesTable: FunctionComponent = () => {
  const [studentMode, setStudentMode] = useState(true);
  const tableStyle = studentMode
    ? ` ${styles.studentstable} + ${styles.studentMode}   `
    : ` ${styles.studentstable}`;
  return (
    <>
      {studentMode && <StudentCard />}
      <fieldset className={tableStyle}>
        <TableTitle isStudent={studentMode} />
        <TableRow isStudent={studentMode} />
        <TableRow isStudent={studentMode} />
        <TableRow isStudent={studentMode} />
        <TableRow isStudent={studentMode} />
        <TableRow isStudent={studentMode} />
        <TableRow isStudent={studentMode} />
        <TableRow isStudent={studentMode} />
        <TableRow isStudent={studentMode} />
      </fieldset>
    </>
  );
};

export default GradesTable;
