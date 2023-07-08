import { FunctionComponent } from "react";
import styles from "./OverallGPA.module.css";

type OverallGPAType = {
  cGPA?: string;
};

const OverallGPA: FunctionComponent<OverallGPAType> = ({ cGPA }) => {
  return (
    <div className={styles.gpaPageOverall}>
      <h2 className={styles.label}>Overall GPA</h2>
      <h2 className={styles.cgpa}>{cGPA}</h2>
    </div>
  );
};

export default OverallGPA;
