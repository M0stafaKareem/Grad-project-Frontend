import { FunctionComponent } from "react";
import styles from "./TableRow.module.css";
type TableRowType = {
  isStudent: boolean;
};

const TableRow: FunctionComponent<TableRowType> = ({ isStudent }) => {
  return (
    <div className={styles.tableRow}>
      {isStudent ? (
        <select className={styles.tableComponents}>
          <option value="0"> Fall</option>
          <option value="1"> Spring </option>
          <option value="2"> Summer </option>
        </select>
      ) : (
        <input
          className={styles.tableComponents}
          type="number"
          defaultValue="21041"
        />
      )}
      <input
        className={styles.tableComponents1}
        type="text"
        defaultValue="Abdelaziz Shaheen "
      />
      <input
        className={styles.tableComponents2}
        type="text"
        defaultValue="Operating System"
      />
      <input
        className={styles.tableComponents3}
        type="number"
        defaultValue="45"
      />
      <input
        className={styles.tableComponents4}
        type="number"
        defaultValue="44"
      />
      <div className={styles.tableComponents5}>
        <h2 className={styles.title}>89</h2>
      </div>
      <div className={styles.tableComponents6}>
        <h2 className={styles.title}>A-</h2>
      </div>
      <select className={styles.pass}>
        <option value="0">Passed</option>
        <option value="1">Dropped</option>
        <option value="2">Failed</option>
        <option value="3">Abcent</option>
        <option value="4">Cheated</option>
        <option value="5">Withdrawed</option>
      </select>
    </div>
  );
};

export default TableRow;
