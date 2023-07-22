import styles from "./CourseOverview.module.css";
const CourseOverview = ({
  courseName = "Programming Techniques",
  courseCode = "CIE1810",
  courseProvider = "Dr. Hadeer Ahmed",
  numberOfRegs = "80",
}) => {
  return (
    <div className={styles.courseoverview}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.homepageDesignParent}>
            <h2 className={styles.homepageDesign}>{courseName}</h2>
            <h4 className={styles.homepageDesign1}>{courseCode}</h4>
          </div>
          <h3 className={styles.homepageDesign2}>{courseProvider}</h3>
        </div>
        <div className={styles.homepageDesignGroup}>
          <h3 className={styles.homepageDesign2}>details</h3>
          <img className={styles.frameChild} alt="" src="/arrow-1.svg" />
        </div>
      </div>
      <div className={styles.numberofregParent}>
        <div className={styles.numberofreg}>
          <div className={styles.div}>{numberOfRegs}</div>
        </div>
        <label className={styles.enrolled}>
          <label className={styles.enrolled1}>Enrolled</label>
        </label>
      </div>
    </div>
  );
};

export default CourseOverview;
