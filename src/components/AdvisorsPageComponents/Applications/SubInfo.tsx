import { FunctionComponent } from "react";
import styles from "./SubInfo.module.css";
const SubInfo: FunctionComponent = () => {
  return (
    <div className={styles.ahParent}>
      <div className={styles.ah}>
        <b className={styles.followers}>Registered</b>
      </div>
      <div className={styles.ahGroup}>
        <div className={styles.ah}>
          <div className={styles.posts}>Operating Systems</div>
        </div>
        <div className={styles.ah}>
          <div className={styles.posts}>Embedded Systems</div>
        </div>
        <div className={styles.ah}>
          <div className={styles.posts}>Digital Elec.</div>
        </div>
        <div className={styles.ah}>
          <div className={styles.posts}>Comm. Network</div>
        </div>
        <div className={styles.ah}>
          <div className={styles.posts}>Discrete Math</div>
        </div>
      </div>
    </div>
  );
};

export default SubInfo;
