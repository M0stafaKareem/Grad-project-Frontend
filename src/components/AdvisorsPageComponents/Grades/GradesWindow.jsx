import RegisterB from "./RegisterB";
import Cells from "./Cells";
import styles from "./GradesWindow.module.css";
import { PushDataService } from "../../../service/pushData";
import Done from "../../General/Done";
import { useState } from "react";
import { Box } from "./screens/Box";
import GradesTable from "./GradesTable";
import { FetchDataService } from "../../../service/fetchData";

const GradesWindow = (props) => {
  const [doneIsOpen, setDoneIsOpen] = useState(false);
  const [gradesWindowIsOpen, setgradesWindowIsOpen] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  let inputData = [];
  const onFormSubmit = (e) => {
    e.preventDefault();
    const p1 = new PushDataService();
    p1.assignCourseGrades(
      inputData[0],
      inputData[1],
      inputData[2],
      inputData[3],
      inputData[2] >= 60 ? "Finished" : "Failed"
    );
    setDoneIsOpen(true);
  };

  const handleInputFile = (event) => {
    event.preventDefault();
    const p1 = new PushDataService();
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("excel_file", file);
    p1.uploadXlsGradeFile(formData);
    setDoneIsOpen(true);
  };
  const isStudent =
    focusedInput === "Student ID"
      ? true
      : focusedInput === "Course Name"
      ? false
      : undefined;

  const [gradesPageData, setGradesPageData] = useState();
  return (
    <>
      {!gradesWindowIsOpen && (
        <>
          <form className={styles.gradeswindow} onSubmit={onFormSubmit}>
            <select
              className={styles.fallSemester}
              onChange={(e) => {
                inputData["semester"] = e.target.value;
              }}
            >
              <option value="" selected disabled hidden>
                Select Semester
              </option>
              <option value="Fall"> Fall Semester</option>
              <option value="Spring"> Spring Semester</option>
              <option value="Summer"> Summer Semester</option>
            </select>

            {doneIsOpen && (
              <Done
                onBtnClick={() => {
                  setDoneIsOpen(false);
                }}
                btnLabel="Done"
                cardDiscription="Grades Updated Successfully"
              />
            )}
            <Cells
              setFocusedInput={setFocusedInput}
              subjects={props.subjects}
              passInputArray={(inputArray) => {
                inputData = inputArray;
              }}
            />
            <RegisterB />
            <h2 className={styles.submitted}>Submitted</h2>
            <label htmlFor="file" className={styles.uploadACsv}>
              Upload a xls File
            </label>
            <input
              id="file"
              type="file"
              style={{ visibility: "hidden" }}
              onChange={handleInputFile}
            />
          </form>
          <Box
            onClick={async () => {
              const f1 = new FetchDataService();
              isStudent
                ? setGradesPageData(await f1.getStudentGradesPageData(21044))
                : setGradesPageData(
                    await f1.getSubjectGradesPageData(
                      "GEN0801",
                      "Spring",
                      "2022-2023"
                    )
                  );
              isStudent != undefined ? setgradesWindowIsOpen(true) : null;
            }}
          />
        </>
      )}
      {gradesWindowIsOpen && (
        <GradesTable
          isStudentMode={isStudent}
          tableData={isStudent ? gradesPageData.subjectsData : gradesPageData}
          studentData={isStudent ? gradesPageData.personalData : null}
        />
      )}
    </>
  );
};

export default GradesWindow;
