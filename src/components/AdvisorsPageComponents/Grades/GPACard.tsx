import { FunctionComponent } from "react";
import styles from "./GPACard.module.css";
import "antd/dist/reset.css";

import { Progress } from "antd";
const GPACard: FunctionComponent = () => {
  const GPA = 2.3;
  return (
    <div className={styles.gpaCard}>
      <h2 className={styles.text}>GPA</h2>
      <div className={styles.GPAdiv}>
        <Progress
          type="circle"
          format={() => `${GPA}`}
          percent={(GPA / 4) * 100}
          strokeWidth={8}
          strokeColor={GPA < 2 ? "#FF0000" : GPA > 3 ? "#34b53a" : ""}
          trailColor="white"
          size={180}
        />
      </div>
      <div className={styles.level}>
        <p className={styles.posts}>Maximum Hours to Register</p>
        <h3 className={styles.posts1}>20</h3>
      </div>
    </div>
  );
};

export default GPACard;
