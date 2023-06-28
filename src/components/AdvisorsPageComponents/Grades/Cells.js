import styles from "./Cells.module.css";
import InputRow from "./InputRow";

const Cells = (props) => {
  const subjectsNames = [];
  props.subjects.map((item) => {
    subjectsNames.push({ value: item.subject_code, label: item.subject_name });
  });
  return (
    <div className={styles.cells}>
      <InputRow
        title="Course Name"
        isCourse={true}
        subjectsNames={subjectsNames}
      />
      <InputRow title="Student ID" />
      <InputRow title="Grade" />
      <InputRow title="Score" />
    </div>
  );
};

export default Cells;
