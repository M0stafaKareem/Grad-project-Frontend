import styles from "./InputRow.module.css";
function InputRow(props) {
  return (
    <div className={styles.main}>
      <label className={styles.title}>{props.title}</label>
      <input className={styles.input} type="text" />
    </div>
  );
}
export default InputRow;
