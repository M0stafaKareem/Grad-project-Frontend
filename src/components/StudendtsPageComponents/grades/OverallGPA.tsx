import { FunctionComponent } from "react";
import styles from "./OverallGPA.module.css";

type OverallGPAType = {
  cGPS?: string;
};

const OverallGPA: FunctionComponent<OverallGPAType> = ({ cGPS }) => {
  return (
    <div className={styles.gpaPageOverall}>
      <h2 className={styles.label}>Overall GPA</h2>
      <h2 className={styles.cgpa}>{cGPS}</h2>
    </div>
  );
};

export default OverallGPA;
