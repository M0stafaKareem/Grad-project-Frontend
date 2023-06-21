import CourseOverview from "./CourseOverview";
import styles from "./FrameComponent.module.css";
import Statistics from "./Statistics";
const FrameComponent = () => {
  return (
    <div className={styles.courseoverviewParent}>
      <div className={styles.stats}>
        <Statistics />
      </div>
      <div className={styles.courseoverview}>
        <CourseOverview />
        <CourseOverview />
        <CourseOverview />
        <CourseOverview />
      </div>
    </div>
  );
};

export default FrameComponent;
