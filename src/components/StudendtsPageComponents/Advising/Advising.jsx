import RegisterationHeader from "./RegisterationHeader";
import LevelBar from "./LevelBar";
import styles from "./Advising.module.css";
import { FetchDataService } from "../../../service/fetchData";
import { useEffect, useState } from "react";
import Done from "../../General/Done";
import RegisterButton from "./RegisterButton";

function Advising(props) {
  const [subjecs, setSubjecs] = useState([]);
  const [doneIsOpen, setDoneIsOpen] = useState(false);

  const getStuSubjects = async (studentId) => {
    const stuSubjectsService = new FetchDataService();
    try {
      const jsonData = await stuSubjectsService.getStuSubjects(studentId);
      setSubjecs(jsonData);
      return jsonData;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStuSubjects(props.studentData.Id);
  }, [doneIsOpen]);

  const leveledSubjects = {};

  subjecs.map((item) => {
    const { subject_level } = item;
    if (!leveledSubjects[subject_level]) {
      leveledSubjects[subject_level] = [];
    }

    leveledSubjects[subject_level].push(item);
  });

  let registeredHours = 0;
  subjecs.map((item) => {
    const { enrolment_state } = item;
    if (enrolment_state === "Requested") {
      registeredHours += item.subject_hours;
    }
  });

  const maxRegHours =
    props.studentData.GPA >= 3
      ? "21"
      : props.studentData.GPA >= 2
      ? "18"
      : "14";

  return (
    <div className={styles.levelsDiv}>
      {doneIsOpen && (
        <Done
          onBtnClick={() => {
            setDoneIsOpen(false);
          }}
          btnLabel="Done"
          cardDiscription="Courses Updated successfully"
        />
      )}
      <RegisterationHeader
        registerationMax={maxRegHours}
        component={registeredHours}
      />
      <LevelBar
        onSubmitFeedback={setDoneIsOpen}
        level="Level 0"
        Id={props.studentData.Id}
        subjects={leveledSubjects[0]}
        leftTitleVal={"5/11"}
        rightTitleVal={"2"}
      />
      <LevelBar
        onSubmitFeedback={setDoneIsOpen}
        level="Level 1"
        Id={props.studentData.Id}
        subjects={leveledSubjects[1]}
        leftTitleVal={"5/11"}
        rightTitleVal={"2.6"}
      />
      <LevelBar
        level="Level 2"
        onSubmitFeedback={setDoneIsOpen}
        Id={props.studentData.Id}
        subjects={leveledSubjects[2]}
        leftTitleVal={"5/10"}
        rightTitleVal={"2.4"}
      />
      <LevelBar
        onSubmitFeedback={setDoneIsOpen}
        level="Level 3"
        Id={props.studentData.Id}
        subjects={leveledSubjects[3]}
        leftTitleVal={"3/10"}
        rightTitleVal={"3.3"}
      />
      <LevelBar
        onSubmitFeedback={setDoneIsOpen}
        level="Level 4"
        Id={props.studentData.Id}
        subjects={leveledSubjects[4]}
        leftTitleVal={"0/12"}
        rightTitleVal={""}
      />
      <RegisterButton btnLabel="Withdrawal" onBtnClick={() => {}} />
    </div>
  );
}
export default Advising;
