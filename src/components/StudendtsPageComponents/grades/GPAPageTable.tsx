import { FunctionComponent } from "react";
import Courses from "../grades/Courses";
import styles from "./GPAPageTable.module.css";

const GPAPageTable: FunctionComponent = () => {
  return (
    <div className={styles.gpaPageTable}>
      <h2 className={styles.semesterIi}>Semester II</h2>
      <Courses />
    </div>
  );
};

export default GPAPageTable;
