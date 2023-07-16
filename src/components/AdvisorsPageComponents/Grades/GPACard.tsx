import { FunctionComponent } from "react";
import styles from "./GPACard.module.css";
import "antd/dist/reset.css";
import { Progress } from "antd";

type GPAcardType = {
  studentGPA?: number;
};

const GPACard: FunctionComponent<GPAcardType> = ({ studentGPA = 2.4 }) => {
  const maxRegHours = studentGPA >= 3 ? "21" : studentGPA >= 2 ? "18" : "14";
  return (
    <div className={styles.gpaCard}>
      <h2 className={styles.text}>GPA</h2>
      <div className={styles.GPAdiv}>
        <Progress
          type="circle"
          format={() => `${studentGPA}`}
          percent={(studentGPA / 4) * 100}
          strokeWidth={8}
          strokeColor={
            studentGPA < 2 ? "#FF0000" : studentGPA > 3 ? "#34b53a" : ""
          }
          trailColor="white"
          size={180}
        />
      </div>
      <div className={styles.level}>
        <p className={styles.posts}>Maximum Hours to Register</p>
        <h3 className={styles.posts1}>{maxRegHours}</h3>
      </div>
    </div>
  );
};

export default GPACard;
