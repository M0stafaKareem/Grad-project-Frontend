import Cells from "./Cells";
import styles from "./GradesWindow.module.css";
import { PushDataService } from "../../../service/pushData";
import Done from "../../General/Done";
import { useState } from "react";
import { Box } from "./screens/Box";
import GradesTable from "./GradesTable";
import { FetchDataService } from "../../../service/fetchData";
import { gradesCalculator } from "../../../service/gradesCalculator";

const GradesWindow = (props) => {
  const [doneIsOpen, setDoneIsOpen] = useState(false);
  const [gradesWindowIsOpen, setgradesWindowIsOpen] = useState(false);
  const [gradesPageData, setGradesPageData] = useState();
  const [inputData, setInputData] = useState({
    semester: "",
    courseName: "",
    courseCode: "",
    studentID: 0,
    studentName: "",
    classWork: 0,
    final: 0,
    examState: "",
    semesterDate: "",
    grade: 0,
    score: "",
    isStudent: undefined,
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    const p1 = new PushDataService();
    const helper = new gradesCalculator();
    inputData.grade = +inputData.classWork + +inputData.final;
    inputData.score = helper.getLetteredScore(inputData.grade).letter;
    p1.assignCourseGrades(inputData);
    setDoneIsOpen(true);
    // p1.updateStudentData( inputData.studentID , helper. )
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
            <select
              className={styles.fallSemester}
              defaultValue={""}
              onChange={(e) => {
                setInputData((inputData) => {
                  return {
                    ...inputData,
                    semester: e.target.value,
                  };
                });
              }}
            >
              <option value="" disabled hidden>
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
            <Cells subjects={props.subjects} passInputArray={setInputData} />
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
              inputData.isStudent
                ? setGradesPageData(
                    await f1.getStudentGradesPageData(inputData.studentID)
                  )
                : setGradesPageData(
                    await f1.getSubjectGradesPageData(
                      inputData.courseCode,
                      inputData.semester,
                      inputData.semesterDate
                    )
                  );
              inputData.isStudent != undefined
                ? setgradesWindowIsOpen(true)
                : null;
            }}
          />
        </>
      )}
      {gradesWindowIsOpen && (
        <GradesTable
          isStudentMode={inputData.isStudent}
          semester={inputData.isStudent ? undefined : inputData.semester}
          year={inputData.isStudent ? undefined : inputData.semesterDate}
          tableData={
            inputData.isStudent
              ? gradesPageData.data.subjectsData
              : gradesPageData
          }
          studentData={
            inputData.isStudent ? gradesPageData.data.personalData[0] : null
          }
          studentPhoto={inputData.isStudent ? gradesPageData.photo : undefined}
        />
      )}
    </>
  );
};

export default GradesWindow;
