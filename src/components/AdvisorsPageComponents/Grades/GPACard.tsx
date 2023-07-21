import { FunctionComponent } from "react";
import styles from "./GPACard.module.css";
import "antd/dist/reset.css";
import { Progress } from "antd";

type GPAcardType = {
  studentGPA?: number;
  isFormated?: boolean;
  modifiedStyle?: {};
  title?: string;
  title2?: string;
  title2Value?: string;
};

const GPACard: FunctionComponent<GPAcardType> = ({
  studentGPA = 3.43,
  isFormated = true,

  modifiedStyle,
  title = "GPA",
  title2Value = studentGPA >= 3 ? "21" : studentGPA >= 2 ? "18" : "14",
  title2 = "Max Hours to Register",
}) => {
  return (
    <div className={styles.gpaCard} style={modifiedStyle}>
      <h2 className={styles.text}>{title}</h2>
      <div className={styles.GPAdiv}>
        <Progress
          type="circle"
          format={isFormated ? () => `${studentGPA}` : undefined}
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
        <p className={styles.posts}>{title2} </p>
        <h3 className={styles.posts1}>{title2Value}</h3>
      </div>
    </div>
  );
};

export default GPACard;
