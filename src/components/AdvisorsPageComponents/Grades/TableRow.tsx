import { FunctionComponent, useEffect, useState } from "react";
import styles from "./TableRow.module.css";
import { gradesCalculator } from "../../../service/gradesCalculator";

type TableRowType = {
  rowIndex: number;
  updatingFunction: Function;
  isStudent?: boolean;
  studentID?: number;
  studentName?: string;
  semester?: string;
  semesterDate?: string;
  regState?: string;
  grade: number;
  score: string;
  subjectName: string;
  subjectCode: string;
  classWork: number;
  final: number;
  examState: string;
};

const TableRow: FunctionComponent<TableRowType> = ({
  isStudent,
  rowIndex,
  regState,
  updatingFunction,
  semester,
  semesterDate,
  studentID,
  studentName,
  subjectName,
  subjectCode,
  classWork,
  final,
  examState,
  grade,
  score,
}) => {
  const rowIsDisabled =
    regState === "Dropped" ||
    regState === "Withdrawed" ||
    regState === "Finished"
      ? true
      : false;
  const [updatingData, setUpdatingDAta] = useState({
    semester: semester,
    semesterDate: semesterDate,
    studentID: studentID,
    studentName: studentName,
    courseName: subjectName,
    courseCode: subjectCode,
    classWork: classWork,
    final: final,
    state: rowIsDisabled ? regState : null,
    examState: examState,
    grade: grade,
    score: score,
  });
  const helper = new gradesCalculator();

  useEffect(() => {
    updatingFunction((prev: any) => {
      prev[rowIndex] = updatingData;
      prev[rowIndex].grade =
        updatingData.classWork && updatingData.final
          ? +updatingData.classWork + +updatingData.final
          : null;
      prev[rowIndex].score = helper.getLetteredScore(
        prev[rowIndex].grade
      ).letter;
      prev[rowIndex].state = updatingData.grade ? "Finished" : null;
      return prev;
    });
  }, [updatingData]);

  return (
    <div className={styles.tableRow}>
      <div className={styles.tableComponents}>
        <h2 className={styles.title}> {isStudent ? semester : studentID} </h2>
      </div>
      <div className={styles.tableComponents1}>
        <h2 className={styles.title}>
          {isStudent ? semesterDate : studentName}
        </h2>
      </div>
      <div className={styles.tableComponents2}>
        <h2 className={styles.title}>{subjectName}</h2>
      </div>
      <input
        className={styles.tableComponents3}
        disabled={rowIsDisabled}
        type="number"
        max={50}
        min={0}
        defaultValue={classWork}
        onChange={(e) => {
          setUpdatingDAta((prev: any) => {
            return {
              ...prev,
              classWork: e.target.value,
            };
          });
        }}
      />
      <input
        className={styles.tableComponents4}
        disabled={rowIsDisabled}
        type="number"
        max={50}
        min={0}
        defaultValue={final}
        onChange={(e) => {
          setUpdatingDAta((prev: any) => {
            return {
              ...prev,
              final: e.target.value,
            };
          });
        }}
      />
      <div className={styles.tableComponents5}>
        <h2 className={styles.title}>
          {+updatingData.classWork + +updatingData.final}
        </h2>
      </div>
      <div className={styles.tableComponents6}>
        <h2 className={styles.title}>
          {
            helper.getLetteredScore(
              +updatingData.classWork + +updatingData.final
            ).letter
          }
        </h2>
      </div>
      <select
        className={styles.pass}
        defaultValue={""}
        disabled={rowIsDisabled}
        onChange={(e) => {
          setUpdatingDAta((prev: any) => {
            return {
              ...prev,
              examState: e.target.value,
            };
          });
        }}
      >
        <option value="" disabled hidden>
          {regState === "Dropped" || regState === "Withdrawed"
            ? regState
            : examState}
        </option>
        <option value="Passed">Passed</option>
        <option value="Dropped" hidden>
          Dropped
        </option>
        <option value="Failed">Failed</option>
        <option value="Abcent">Abcent</option>
        <option value="Cheated">Cheated</option>
        <option value="Withdrawed" hidden>
          Withdrawed
        </option>
      </select>
    </div>
  );
};

export default TableRow;
