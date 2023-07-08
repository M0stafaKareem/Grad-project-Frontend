import { FunctionComponent } from "react";
import styles from "./TableTitle.module.css";
type TableTitleType = {
  isStudent: boolean;
};
const TableTitle: FunctionComponent<TableTitleType> = ({ isStudent }) => {
  return (
    <div className={styles.tableTitle}>
      <div className={styles.tableComponents}>
        {isStudent ? "Semester" : "ID"}
      </div>
      <div className={styles.tableComponents1}>
        {isStudent ? "Date" : "Name"}
      </div>
      <div className={styles.tableComponents2}>Subject </div>
      <div className={styles.tableComponents3}>Class Work </div>
      <div className={styles.tableComponents4}>Final </div>
      <div className={styles.tableComponents5}>Total </div>
      <div className={styles.tableComponents5}>Grade </div>
      <div className={styles.tableComponents7}>Status </div>
    </div>
  );
};

export default TableTitle;
