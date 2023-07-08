import { FunctionComponent } from "react";
import styles from "./GPACard.module.css";
const GPACard: FunctionComponent = () => {
  return (
    <div className={styles.gpaCard}>
      <h2 className={styles.text}>GPA</h2>
      <div className={styles.colorParent}>
        <img className={styles.colorIcon} alt="" src="/color.svg" />
        <img className={styles.ovalIcon} alt="" src="/oval.svg" />
        <div className={styles.div}>2.61</div>
      </div>
      <div className={styles.level}>
        <p className={styles.posts}>Maximum Hours to Register</p>
        <h3 className={styles.posts1}>20</h3>
      </div>
    </div>
  );
};

export default GPACard;
