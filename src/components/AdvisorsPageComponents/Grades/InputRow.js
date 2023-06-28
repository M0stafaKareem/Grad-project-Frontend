import styles from "./InputRow.module.css";
import Select from "react-select";

function InputRow(props) {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none", // Remove border
      boxShadow: "none", // Remove box shadow
      cursor: "pointer", // Change cursor on hover
      backgroundColor: "#f4f4f4",

      // Add any other custom styles as needed
    }),
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{props.title}</h2>
      {!props.isCourse && <input className={styles.input} type="text" />}
      {props.isCourse && (
        <Select
          className={styles.input}
          styles={customStyles}
          placeholder={""}
          options={props.subjectsNames}
        />
      )}
    </div>
  );
}
export default InputRow;
