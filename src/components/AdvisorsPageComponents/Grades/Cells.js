import styles from "./Cells.module.css";
import InputRow from "./InputRow";

const Cells = () => {
  return (
    <div className={styles.cells}>
      <InputRow title="Course Name" />
      <InputRow title="Student Name" />
      <InputRow title="Grade" />
      <InputRow title="Score" />
    </div>
  );
};

export default Cells;
