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
      {props.type === "" && (
        <input
          onChange={(e) => props.passInputVal(e.target.value)}
          onFocus={() => props.onFocus(props.title)}
          className={styles.input}
          type="text"
        />
      )}
      {props.type === "splitted" && (
        <>
          <input
            onChange={(e) => props.passInputVal(e.target.value)}
            className={styles.smallInput}
            type="number"
          />
          <input
            onChange={(e) => props.passInputVal(e.target.value)}
            className={styles.smallInput}
            type="number"
          />
        </>
      )}
      {props.type === "dropdown" && (
        <Select
          className={styles.input}
          isDisabled={props.isDisabled}
          onFocus={() => props.onFocus(props.title)}
          onChange={(e) => props.passInputVal(e.value)}
          styles={customStyles}
          placeholder={""}
          options={props.subjectsNames}
        />
      )}
    </div>
  );
}
export default InputRow;
