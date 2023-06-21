import { FunctionComponent } from "react";
import styles from "./CourseDetails.module.css";

type CourseDetailsType = {
  courseName?: string;
  courseGrade?: string;
  courseCredits?: string;
};

const CourseDetails: FunctionComponent<CourseDetailsType> = ({
  courseName,
  courseGrade,
  courseCredits,
}) => {
  return (
    <div className={styles.cells}>
      <div className={styles.rectangleParent}>
        <div className={styles.text}>{courseName}</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.text}>{courseGrade}</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.text}>{courseCredits}</div>
      </div>
    </div>
  );
};

export default CourseDetails;
