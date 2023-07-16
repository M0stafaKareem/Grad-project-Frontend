import { FunctionComponent, useState } from "react";
import Courses from "../grades/Courses";
import styles from "./GPAPageTable.module.css";
import { FetchDataService } from "../../../service/fetchData";

type gradesPageType = {
  studentID: number;
};
const GPAPageTable: FunctionComponent<gradesPageType> = ({ studentID }) => {
  const [gradesMode, setGradesMode] = useState({ first: "", second: "" });
  const [grades, setGrades] = useState();

  const fetchGrades = async () => {
    const f1 = new FetchDataService();
    setGrades(await f1.getStudentGrades(studentID, gradesMode.second));
    console.log(grades);
  };

  return (
    <div className={styles.gpaPageTable}>
      <div className={styles.dropdowns}>
        <select
          className={styles.semesterIi}
          onChange={(e) => {
            setGradesMode(() => {
              return { first: e.target.value, second: "" };
            });
          }}
          defaultValue={""}
        >
          <option value="" disabled hidden>
            Select Option
          </option>
          <option value="Level">Level</option>
          {/* <option value="Semester">Semester</option> */}
          <option value="All">All </option>
        </select>
        {gradesMode.first === "Level" && (
          <select
            className={styles.secondBox}
            defaultValue={""}
            onChange={(e) => {
              fetchGrades();
              setGradesMode((prev) => {
                return { ...prev, second: e.target.value };
              });
            }}
          >
            <option value="" disabled hidden>
              Select Option
            </option>
            {gradesMode.first === "Level" && (
              <option value={0}>Level: 0 </option>
            )}
            {gradesMode.first === "Level" && (
              <option value={1}>Level: 1 </option>
            )}
            {gradesMode.first === "Level" && (
              <option value={2}>Level: 2 </option>
            )}
            {gradesMode.first === "Level" && (
              <option value={3}>Level: 3 </option>
            )}
            {gradesMode.first === "Level" && (
              <option value={4}>Level: 4 </option>
            )}
            {/*             {gradesMode.first === "Semester" && (
              <option value="Fall"> Fall</option>
            )}
            {gradesMode.first === "Semester" && (
              <option value="Spring"> Spring</option>
            )}
            {gradesMode.first === "Semester" && (
              <option value="Summer"> Summer</option>
            )} */}
          </select>
        )}
      </div>
      {(gradesMode.first === "All" || gradesMode.second) && <Courses />}
    </div>
  );
};

export default GPAPageTable;
