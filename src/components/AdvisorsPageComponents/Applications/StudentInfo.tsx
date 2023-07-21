import { FunctionComponent } from "react";
import styles from "./StudentInfo.module.css";

const StudentInfo: FunctionComponent = () => {
  return (
    <div className={styles.photoParent}>
      <img className={styles.photoIcon} alt="" src="./group-3.png" />
      <h2 className={styles.name}>Abdelaziz Shaheen</h2>
      <h3 className={styles.id}>21042</h3>
    </div>
  );
};

export default StudentInfo;
