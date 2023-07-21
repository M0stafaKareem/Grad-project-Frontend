import { FunctionComponent } from "react";
import styles from "./SubjectsInfo.module.css";
const SubjectsInfo: FunctionComponent = () => {
  return (
    <div className={styles.ahParent}>
      <div className={styles.ah}>
        <h2 className={styles.followers}>Registered</h2>
      </div>
      <div className={styles.ahGroup}>
        <h3 className={styles.ps}>
          <div className={styles.posts}>Operating Systems</div>
        </h3>
        <h3 className={styles.ps}>
          <div className={styles.posts}>Embedded Systems</div>
        </h3>
        <h3 className={styles.ps}>
          <div className={styles.posts}>Digital Elec.</div>
        </h3>
        <h3 className={styles.ps}>
          <div className={styles.posts}>Comm. Network</div>
        </h3>
        <h3 className={styles.ps}>
          <div className={styles.posts}>Discrete Math</div>
        </h3>
      </div>
    </div>
  );
};

export default SubjectsInfo;
