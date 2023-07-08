import RegisterB from "./RegisterB";
import Cells from "./Cells";
import styles from "./GradesWindow.module.css";
import { PushDataService } from "../../../service/pushData";
import Done from "../../General/Done";
import { useState } from "react";
import { Box } from "./screens/Box";
import GradesTable from "./GradesTable";

const GradesWindow = (props) => {
  const [doneIsOpen, setDoneIsOpen] = useState(false);
  const [gradesWindowIsOpen, setgradesWindowIsOpen] = useState(false);
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

  return (
    <>
      {!gradesWindowIsOpen && (
        <>
          <form className={styles.gradeswindow} onSubmit={onFormSubmit}>
            <select className={styles.fallSemester}>
              <option value="0"> Fall Semester</option>
              <option value="1"> Spring Semester</option>
              <option value="2"> Summer Semester</option>
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
            onClick={() => {
              setgradesWindowIsOpen(true);
            }}
          />
        </>
      )}
      {gradesWindowIsOpen && <GradesTable />}
    </>
  );
};

export default GradesWindow;