import { FunctionComponent, useEffect, useState } from "react";
import Courses from "../grades/Courses";
import styles from "./GPAPageTable.module.css";

type gradesPageType = {
  studentGrades: [];
};
const GPAPageTable: FunctionComponent<gradesPageType> = ({ studentGrades }) => {
  const [gradesMode, setGradesMode] = useState({
    first: "",
    level: "",
    semester: "",
    year: "",
  });
  const [displayedGrades, setDisplayedGrades] = useState([]);
  const leveledGrades: any = [];
  const semesteredGrades: any = [];
  studentGrades.map((item) => {
    const { subject_level } = item;
    const { year } = item;
    const { semester } = item;
    if (year === gradesMode.year && semester === gradesMode.semester) {
      semesteredGrades.push(item);
    }
    if (!leveledGrades[subject_level]) {
      leveledGrades[subject_level] = [];
    }
    leveledGrades[subject_level].push(item);
  });

  useEffect(() => {
    gradesMode.first === "All"
      ? setDisplayedGrades(studentGrades)
      : gradesMode.first === "Level" && gradesMode.level
      ? setDisplayedGrades(leveledGrades[+gradesMode.level])
      : gradesMode.first === "Semester" &&
        gradesMode.semester &&
        gradesMode.year
      ? setDisplayedGrades(semesteredGrades)
      : null;
  }, [gradesMode]);
  console.log(displayedGrades);
  return (
    <div className={styles.gpaPageTable}>
      <div className={styles.dropdowns}>
        <select
          className={styles.semesterIi}
          onChange={(e) => {
            setGradesMode(() => {
              return {
                first: e.target.value,
                level: "",
                semester: "",
                year: "",
              };
            });
          }}
          defaultValue={""}
        >
          <option value="" disabled hidden>
            Select Option
          </option>
          <option value="Level">Level</option>
          <option value="Semester">Semester</option>
          <option value="All">All </option>
        </select>
        <div className={styles.secondDropdown}>
          {gradesMode.first === "Level" && (
            <select
              className={styles.secondBox}
              defaultValue={""}
              onChange={(e) => {
                setGradesMode((prev) => {
                  return { ...prev, level: e.target.value };
                });
              }}
            >
              <option value="" disabled hidden>
                Select Option
              </option>
              <option value="0">Level zero </option>
              <option value="1">Level One </option>
              <option value="2">Level Two </option>
              <option value="3">Level Three </option>
              <option value="4">Level Four </option>
            </select>
          )}
          {gradesMode.first === "Semester" && (
            <select
              className={styles.secondBox}
              defaultValue={""}
              onChange={(e) => {
                setGradesMode((prev) => {
                  return { ...prev, semester: e.target.value };
                });
              }}
            >
              <option value="" disabled hidden>
                Select Option
              </option>
              <option value="Fall"> Fall</option>
              <option value="Spring"> Spring</option>
              <option value="Summer"> Summer</option>
            </select>
          )}
          {gradesMode.semester && (
            <select
              className={styles.secondBox}
              defaultValue={""}
              onChange={(e) => {
                setGradesMode((prev) => {
                  return { ...prev, year: e.target.value };
                });
              }}
            >
              <option value="" disabled hidden>
                Select Option
              </option>
              {[...new Set(studentGrades.map((item: any) => item.year))].map(
                (item: any) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                }
              )}
            </select>
          )}
        </div>
      </div>
      {(gradesMode.first === "All" ||
        (gradesMode.first === "Level" && gradesMode.level) ||
        (gradesMode.first === "Semester" &&
          gradesMode.semester &&
          gradesMode.year)) && (
        <Courses grades={displayedGrades} gradesMode={gradesMode} />
      )}
    </div>
  );
};

export default GPAPageTable;
