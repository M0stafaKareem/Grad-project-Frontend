import RegisterB from "./RegisterB";
import Cells from "./Cells";
import styles from "./GradesWindow.module.css";

const GradesWindow = (props) => {
  return (
    <form className={styles.gradeswindow}>
      <RegisterB />
      <p className={styles.fallSemester}>Fall Semester</p>
      <Cells subjects={props.subjects} />
      <h2 className={styles.submitted}>Submitted</h2>
      <button className={styles.uploadACsv}>Upload a csv File</button>
    </form>
  );
};

export default GradesWindow;
