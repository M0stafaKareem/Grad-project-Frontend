import { FunctionComponent } from "react";
import styles from "./CourseInstructors.module.css";

type CourseInstructorsType = {
  teacher?: string;
  assistant?: string;
};

const CourseInstructors: FunctionComponent<CourseInstructorsType> = ({
  teacher = "Dr Hadder Ahmed",
  assistant = "Eng. Ahmed Saed",
}) => {
  return (
    <div className={styles.names}>
      <h2 className={styles.taughtByContainer}>
        <span className={styles.taughtByContainer1}>
          <b>{`Taught by : `}</b>
          <span>{teacher}</span>
        </span>
      </h2>
      <h2 className={styles.taughtByContainer}>
        <span className={styles.taughtByContainer1}>
          <b>{`Assisted by : `}</b>
          <span>{assistant}</span>
        </span>
      </h2>
    </div>
  );
};

export default CourseInstructors;
