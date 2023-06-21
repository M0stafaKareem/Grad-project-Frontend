import { FunctionComponent } from "react";
import styles from "./SemGpa.module.css";

type SemGpaType = {
  semGPA?: string;
};

const SemGpa: FunctionComponent<SemGpaType> = ({ semGPA }) => {
  return (
    <div className={styles.semgpa}>
      <h2 className={styles.semesterIiGpa}>Semester II GPA: </h2>
      <h2 className={styles.gpa}>{semGPA}</h2>
    </div>
  );
};

export default SemGpa;
