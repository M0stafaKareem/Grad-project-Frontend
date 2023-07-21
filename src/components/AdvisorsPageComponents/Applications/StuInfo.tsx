import { FunctionComponent } from "react";
import styles from "./StuInfo.module.css";
const StuInfo: FunctionComponent = () => {
  return (
    <div className={styles.photoParent}>
      <img className={styles.photoIcon} alt="" src="./group-3.png" />
      <div className={styles.name}>Abdelaziz Shaheen</div>
      <div className={styles.id}>21042</div>
    </div>
  );
};

export default StuInfo;
