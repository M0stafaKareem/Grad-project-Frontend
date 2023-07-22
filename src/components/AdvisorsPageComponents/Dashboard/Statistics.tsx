import styles from "./Statistics.module.css";
const Statistics = ({
  currentSemester = "Fall Semester",
  semeterDate = "January - June 2023",
}) => {
  return (
    <section className={styles.statistics}>
      <p className={styles.homepageDesign}>{currentSemester}</p>
      <h3 className={styles.title}>{semeterDate}</h3>
    </section>
  );
};

export default Statistics;
