import RegisterationHeader from "./RegisterationHeader";
import LevelBar from "./LevelBar";
import styles from "./Advising.module.css";
import { FetchDataService } from "../../../service/fetchData";
import { useEffect, useState } from "react";
import Done from "../../General/Done";
import RegisterButton from "./RegisterButton";
import Menu from "./Menu";

function Advising(props) {
  const [subjecs, setSubjecs] = useState([]);
  const [doneIsOpen, setDoneIsOpen] = useState(false);
  const [editRegMenuIsOpen, setEditRegMenuIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const stuSubjectsService = new FetchDataService();

  const getStuSubjects = async (studentId) => {
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

  const par =
    subjecs[1] && subjecs[1].dropablitiy === "true" ? "Drop" : "Withdraw";
  const regIsOpen =
    subjecs[1] && subjecs[1].submition === "true" ? true : false;
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
      {regIsOpen && (
        <>
          <LevelBar
            onSubmitFeedback={setDoneIsOpen}
            level="Level 0"
            Id={props.studentData.Id}
            subjects={leveledSubjects[0]}
          />
          <LevelBar
            onSubmitFeedback={setDoneIsOpen}
            level="Level 1"
            Id={props.studentData.Id}
            subjects={leveledSubjects[1]}
          />
          <LevelBar
            level="Level 2"
            onSubmitFeedback={setDoneIsOpen}
            Id={props.studentData.Id}
            subjects={leveledSubjects[2]}
          />
          <LevelBar
            onSubmitFeedback={setDoneIsOpen}
            level="Level 3"
            Id={props.studentData.Id}
            subjects={leveledSubjects[3]}
          />
          <LevelBar
            onSubmitFeedback={setDoneIsOpen}
            level="Level 4"
            Id={props.studentData.Id}
            subjects={leveledSubjects[4]}
          />
        </>
      )}
      {!regIsOpen && (
        <div
          style={{
            width: "500px",
            height: "250px",
            fontSize: "20px",
            fontFamily: "Poppings",
            backgroundColor: "white",
            borderRadius: "15px",
            margin: "120px 0 100px 200px ",
            padding: "100px",
            textAlign: "center",
          }}
        >
          Registration Season Has Ended, Better Luck Next Time
        </div>
      )}
      {editRegMenuIsOpen && (
        <Menu
          closeDropdown={setEditRegMenuIsOpen}
          onSubmitFeedback={setDoneIsOpen}
          subjects={data}
          Id={props.studentData.Id}
          modifiedStyles={{ top: "50px" }}
          studentRequest="Drop"
        />
      )}
      <RegisterButton
        btnLabel={par}
        modifiedStyle={{ top: "37px", marginBottom: "0" }}
        RegBtnOnClick={async () => {
          setData(
            await stuSubjectsService.getStudentRequestedSubjects(
              props.studentData.Id
            )
          );
          setEditRegMenuIsOpen(true);
        }}
      />
      <RegisterButton
        btnLabel="Recommendations"
        modifiedStyle={{ top: "0", left: "0" }}
      />
    </div>
  );
}
export default Advising;
