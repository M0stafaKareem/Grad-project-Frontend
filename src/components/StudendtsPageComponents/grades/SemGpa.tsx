import { FunctionComponent } from "react";
import styles from "./SemGpa.module.css";

type SemGpaType = {
  currentSemester?: string;
  semGPA?: string;
};

const SemGpa: FunctionComponent<SemGpaType> = ({
  semGPA,
  currentSemester = "Level 0",
}) => {
  return (
    <div className={styles.semgpa}>
      <h2 className={styles.semesterIiGpa}>{currentSemester} GPA: </h2>
      <h2 className={styles.gpa}>{semGPA}</h2>
    </div>
  );
};

export default SemGpa;
