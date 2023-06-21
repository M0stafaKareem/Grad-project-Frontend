import { FunctionComponent } from "react";
import styles from "./CoursesHeader.module.css";

const CoursesHeader: FunctionComponent = () => {
  return (
    <div className={styles.labels}>
      <h3 className={styles.courseName}>Course Name</h3>
      <h3 className={styles.grade}>Grade</h3>
      <h3 className={styles.credits}>Marks</h3>
    </div>
  );
};

export default CoursesHeader;
