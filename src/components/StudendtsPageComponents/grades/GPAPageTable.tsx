import { FunctionComponent, useEffect, useState } from "react";
import Courses from "../grades/Courses";
import styles from "./GPAPageTable.module.css";

type gradesPageType = {
  studentGrades: [];
};
const GPAPageTable: FunctionComponent<gradesPageType> = ({ studentGrades }) => {
  const [gradesMode, setGradesMode] = useState({ first: "", second: "" });
  const [displayedGrades, setDisplayedGrades] = useState([]);
  const leveledGrades: any = [];

  studentGrades.map((item) => {
    const { subject_level } = item;
    if (!leveledGrades[subject_level]) {
      leveledGrades[subject_level] = [];
    }
    leveledGrades[subject_level].push(item);
  });

  useEffect(() => {
    gradesMode.first === "All"
      ? setDisplayedGrades(studentGrades)
      : gradesMode.second === "0"
      ? setDisplayedGrades(leveledGrades[0])
      : gradesMode.second === "1"
      ? setDisplayedGrades(leveledGrades[1])
      : gradesMode.second === "2"
      ? setDisplayedGrades(leveledGrades[2])
      : gradesMode.second === "3"
      ? setDisplayedGrades(leveledGrades[3])
      : gradesMode.second === "4"
      ? setDisplayedGrades(leveledGrades[4])
      : null;
  }, [gradesMode]);

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
              setGradesMode((prev) => {
                return { ...prev, second: e.target.value };
              });
            }}
          >
            <option value="" disabled hidden>
              Select Option
            </option>
            {gradesMode.first === "Level" && (
              <option value="0">Level zero </option>
            )}
            {gradesMode.first === "Level" && (
              <option value="1">Level One </option>
            )}
            {gradesMode.first === "Level" && (
              <option value="2">Level Two </option>
            )}
            {gradesMode.first === "Level" && (
              <option value="3">Level Three </option>
            )}
            {gradesMode.first === "Level" && (
              <option value="4">Level Four </option>
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
      {(gradesMode.first === "All" || gradesMode.second) && (
        <Courses grades={displayedGrades} gradesMode={gradesMode} />
      )}
    </div>
  );
};

export default GPAPageTable;
