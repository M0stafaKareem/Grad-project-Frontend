import RegisterB from "./RegisterB";
import Cells from "./Cells";
import styles from "./GradesWindow.module.css";
const GradesWindow = () => {
  return (
    <form className={styles.gradeswindow}>
      <div className={styles.gradeswindowChild} />
      <button className={styles.uploadACsv}>Upload a csv File</button>
      <RegisterB />
      <p className={styles.fallSemester}>Fall Semester</p>
      <Cells />
      <h2 className={styles.submitted}>Submitted</h2>
    </form>
  );
};

export default GradesWindow;
