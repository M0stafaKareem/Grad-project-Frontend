import { FunctionComponent } from "react";
import styles from "./TableRow.module.css";

type TableRowType = {
  isStudent?: boolean;
  studentID?: number;
  studentName?: string;
  grade: number;
  score: string;
  subjectName: string;
  classWork: number;
  final: number;
  examState: string;
};

const TableRow: FunctionComponent<TableRowType> = ({
  isStudent,
  studentID,
  studentName,
  subjectName,
  classWork,
  final,
  examState,
  grade,
  score,
}) => {
  return (
    <div className={styles.tableRow}>
      {isStudent ? (
        <select className={styles.tableComponents} defaultValue={""}>
          <option value="" disabled hidden>
            {studentID}
          </option>
          <option value="Fall"> Fall</option>
          <option value="Spring"> Spring </option>
          <option value="Summer"> Summer </option>
        </select>
      ) : (
        <input
          className={styles.tableComponents}
          type="number"
          defaultValue={studentID}
        />
      )}
      <input
        className={styles.tableComponents1}
        type="text"
        defaultValue={studentName}
      />
      <input
        className={styles.tableComponents2}
        type="text"
        defaultValue={subjectName}
      />
      <input
        className={styles.tableComponents3}
        type="number"
        defaultValue={classWork}
      />
      <input
        className={styles.tableComponents4}
        type="number"
        defaultValue={final}
      />
      <div className={styles.tableComponents5}>
        <h2 className={styles.title}>{grade}</h2>
      </div>
      <div className={styles.tableComponents6}>
        <h2 className={styles.title}>{score}</h2>
      </div>
      <select className={styles.pass} defaultValue={""}>
        <option value="" disabled hidden>
          {examState}
        </option>
        <option value="Passed">Passed</option>
        <option value="Dropped">Dropped</option>
        <option value="Failed">Failed</option>
        <option value="Abcent">Abcent</option>
        <option value="Cheated">Cheated</option>
        <option value="Withdrawed">Withdrawed</option>
      </select>
    </div>
  );
};

export default TableRow;
