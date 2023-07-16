import { useState } from "react";
import styles from "./Cells.module.css";
import InputRow from "./InputRow";
import RegisterB from "./RegisterB";

const Cells = (props) => {
  const [fullFormIsOpen, setFullFormIsOpen] = useState(false);

  const subjectsNames = [];
  props.subjects.map((item) => {
    subjectsNames.push({ value: item.subject_code, label: item.subject_name });
  });

  return (
    <div className={styles.cells}>
      <InputRow
        type=""
        title="Semester Date"
        passInputVal={(inputVal) => {
          props.passInputArray((prevData) => {
            return {
              ...prevData,
              semesterDate: inputVal,
            };
          });
        }}
      />
      <InputRow
        title="Course Name"
        type="dropdown"
        subjectsNames={subjectsNames}
        passInputVal={(inputVal) => {
          props.passInputArray((prevData) => {
            return {
              ...prevData,
              isStudent: false,
              courseCode: inputVal,
            };
          });
        }}
      />
      <InputRow
        type=""
        title="Student ID"
        passInputVal={(inputVal) => {
          props.passInputArray((prevData) => {
            return {
              ...prevData,
              isStudent: true,
              studentID: inputVal,
            };
          });
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
            type=""
            title="Class Work"
            passInputVal={(inputVal) => {
              props.passInputArray((prevData) => {
                return {
                  ...prevData,
                  classWork: inputVal,
                };
              });
            }}
          />
          <InputRow
            type=""
            title="Final"
            passInputVal={(inputVal) => {
              props.passInputArray((prevData) => {
                return {
                  ...prevData,
                  final: inputVal,
                };
              });
            }}
          />
          <InputRow
            type=""
            title="State"
            passInputVal={(inputVal) => {
              props.passInputArray((prevData) => {
                return {
                  ...prevData,
                  examState: inputVal,
                };
              });
            }}
          />
          <RegisterB />
        </>
      )}
    </div>
  );
};

export default Cells;
