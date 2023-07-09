import { useState } from "react";
import styles from "./Cells.module.css";
import InputRow from "./InputRow";

const Cells = (props) => {
  const [fullFormIsOpen, setFullFormIsOpen] = useState(false);
  let inputArray = [];
  const subjectsNames = [];
  props.subjects.map((item) => {
    subjectsNames.push({ value: item.subject_code, label: item.subject_name });
  });

  const onInputRowFocused = (inputRow) => {
    props.setFocusedInput(inputRow);
    console.log(inputRow);
  };

  return (
    <div className={styles.cells}>
      <InputRow
        title="Course Name"
        type="dropdown"
        subjectsNames={subjectsNames}
        onFocus={onInputRowFocused}
        passInputVal={(inputVal) => {
          inputArray[0] = inputVal;
          props.passInputArray(inputArray);
        }}
      />
      <InputRow
        type=""
        title="Student ID"
        onFocus={onInputRowFocused}
        passInputVal={(inputVal) => {
          inputArray[1] = inputVal;
          props.passInputArray(inputArray);
        }}
      />
      {!fullFormIsOpen && (
        <div className={styles.box}>
          <button
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              setFullFormIsOpen(true);
            }}
          >
            <img
              className={styles.button}
              alt="Register b"
              src="./upArrow.svg"
            />
          </button>
        </div>
      )}
      {fullFormIsOpen && (
        <>
          <InputRow
            type="splitted"
            title="Class Work"
            passInputVal={(inputVal) => {
              inputArray[2] = inputVal;
              props.passInputArray(inputArray);
            }}
          />
          <InputRow
            type=""
            title="Final"
            passInputVal={(inputVal) => {
              inputArray[3] = inputVal;
              props.passInputArray(inputArray);
            }}
          />
          <InputRow
            type=""
            title="State"
            passInputVal={(inputVal) => {
              inputArray[3] = inputVal;
              props.passInputArray(inputArray);
            }}
          />
          <InputRow
            type=""
            title="Date"
            passInputVal={(inputVal) => {
              inputArray[3] = inputVal;
              props.passInputArray(inputArray);
            }}
          />
        </>
      )}
    </div>
  );
};

export default Cells;
