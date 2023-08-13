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
  const [isRegLimitExceded, setIsRegLimitExceded] = useState(false);
  const [editRegMenuIsOpen, setEditRegMenuIsOpen] = useState(false);
  const [regMenuIsOpen, setRegMenuIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const stuSubjectsService = new FetchDataService();
  const RecommendationData = [
    {
      subject_code: "CIE4807",
      subject_hours: 3,
      subject_name: "Network Security",
    },
    {
      subject_code: "CIE4809",
      subject_hours: 3,
      subject_name: "Microwave",
    },
    {
      subject_code: "CIE4810",
      subject_hours: 3,
      subject_name: "Artificial intelligence",
    },
    {
      subject_code: "CIE4811",
      subject_hours: 3,
      subject_name: "Data minning",
    },
    {
      subject_code: "CIE4812",
      subject_hours: 3,
      subject_name: "Machine Learning",
    },
    {
      subject_code: "CIE4814",
      subject_hours: 3,
      subject_name: "Computer Vision",
    },
    {
      subject_code: "CIE4815",
      subject_hours: 3,
      subject_name: "Embedded systems",
    },
  ];
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
  console.log(data);
  const leveledSubjects = {};
  let registeredHours = 0;
  let prerequisitesState = [];

  subjecs.map((course) => {
    const { enrolment_state } = course;
    const { subject_level } = course;
    const { prerequisite1 } = course;
    const { prerequisite2 } = course;

    if (prerequisite1) {
      let prerequisiteState = {};
      subjecs.map((item) => {
        const { subject_code } = item;
        if (subject_code === prerequisite1) {
          prerequisiteState.course = course.subject_name;
          prerequisiteState.prerequisite1 = item.subject_name;
          prerequisiteState.prerequisite1Grade = item.grade;
        } else if (subject_code === prerequisite2) {
          prerequisiteState.course = course.subject_name;
          prerequisiteState.prerequisite2 = item.subject_name;
          prerequisiteState.prerequisite2Grade = item.grade;
        }
      });
      prerequisitesState.push(prerequisiteState);
    }

    if (enrolment_state === "Requested") {
      registeredHours += course.subject_hours;
    }
    if (!leveledSubjects[subject_level]) {
      leveledSubjects[subject_level] = [];
    }

    leveledSubjects[subject_level].push(course);
  });

  const maxRegHours =
    props.studentData.GPA >= 3 ? 21 : props.studentData.GPA >= 2 ? 18 : 14;

  const par =
    subjecs[1] && subjecs[1].dropablitiy === "true" ? "Drop" : "Withdraw";
  const regIsOpen =
    subjecs[1] && subjecs[1].submition === "true" ? true : false;

  return (
    <div className={styles.levelsDiv}>
      {isRegLimitExceded && (
        <Done
          onBtnClick={() => {
            setIsRegLimitExceded(false);
          }}
          type="error"
          btnLabel="Retry"
          cardDiscription="You've Exceeded Your Registration Limit"
        />
      )}
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
      {regIsOpen && registeredHours <= maxRegHours && (
        <>
          <LevelBar
            setIsRegLimitExceded={setIsRegLimitExceded}
            registrationMax={maxRegHours}
            onSubmitFeedback={setDoneIsOpen}
            currRegisteredHours={registeredHours}
            level="Level 0"
            Id={props.studentData.Id}
            subjects={leveledSubjects[0]}
          />
          <LevelBar
            registrationMax={maxRegHours}
            setIsRegLimitExceded={setIsRegLimitExceded}
            onSubmitFeedback={setDoneIsOpen}
            currRegisteredHours={registeredHours}
            level="Level 1"
            Id={props.studentData.Id}
            subjects={leveledSubjects[1]}
          />
          <LevelBar
            level="Level 2"
            onSubmitFeedback={setDoneIsOpen}
            setIsRegLimitExceded={setIsRegLimitExceded}
            currRegisteredHours={registeredHours}
            registrationMax={maxRegHours}
            Id={props.studentData.Id}
            subjects={leveledSubjects[2]}
          />
          <LevelBar
            onSubmitFeedback={setDoneIsOpen}
            currRegisteredHours={registeredHours}
            setIsRegLimitExceded={setIsRegLimitExceded}
            level="Level 3"
            Id={props.studentData.Id}
            subjects={leveledSubjects[3]}
            registrationMax={maxRegHours}
          />
          <LevelBar
            onSubmitFeedback={setDoneIsOpen}
            currRegisteredHours={registeredHours}
            setIsRegLimitExceded={setIsRegLimitExceded}
            level="Level 4"
            Id={props.studentData.Id}
            subjects={leveledSubjects[4]}
            registrationMax={maxRegHours}
          />
        </>
      )}
      {!regIsOpen && (
        <div className={styles.regEnded}>
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
          studentRequest={par + "ed"}
        />
      )}
      {regMenuIsOpen && (
        <Menu
          closeDropdown={setRegMenuIsOpen}
          onSubmitFeedback={setDoneIsOpen}
          subjects={RecommendationData}
          Id={props.studentData.Id}
          modifiedStyles={{ top: "50px" }}
          studentRequest={"Requested"}
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
        onBtnClick={() => {
          setRegMenuIsOpen(!regMenuIsOpen);
        }}
        modifiedStyle={{ top: "0", left: "0" }}
      />
    </div>
  );
}
export default Advising;
