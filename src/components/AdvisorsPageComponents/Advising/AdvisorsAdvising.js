import LevelBar from "../../StudendtsPageComponents/Advising/LevelBar";
import RegisterationHeader from "../../StudendtsPageComponents/Advising/RegisterationHeader";
import styles from "./AdvisorsAdvising.module.css";
import { FetchDataService } from "../../../service/fetchData";
import { useEffect, useState } from "react";
import Done from "../../General/Done";
import RegisterButton from "../../StudendtsPageComponents/Advising/RegisterButton";
import SettingMenu from "./SettingMenu";

function AdvisorsAdvising() {
  const [subjecs, setSubjecs] = useState([]);
  const [doneIsOpen, setDoneIsOpen] = useState(false);
  const [settingsMenuIsOpen, setSettingMenuIsOpen] = useState(false);
  const [regestiration, setRegestiration] = useState(false);
  const SubjectsService = new FetchDataService();
  const leveledSubjects = {};
  let openedCourses = 0;
  let openedHours = 0;

  const paragraph =
    regestiration.submition === "true" && regestiration.dropablitiy === "true"
      ? "Registration and Drop are Opened "
      : regestiration.dropablitiy === "true"
      ? "Drop is Opened for Students"
      : regestiration.submition === "true"
      ? "Registration is Opened for Students"
      : "Only Withdrawal is available ";

  const getSubjects = async () => {
    try {
      const jsonData = await SubjectsService.getAdvSubjects();
      setSubjecs(jsonData.subjectStatus);
      setRegestiration(jsonData.regestirationStatus[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSubjects();
  }, [doneIsOpen, settingsMenuIsOpen]);

  subjecs.map((item) => {
    const { subject_level } = item;
    if (!leveledSubjects[subject_level]) {
      leveledSubjects[subject_level] = [];
    }

    leveledSubjects[subject_level].push(item);
  });

  subjecs.map((item) => {
    const { status } = item;
    if (status === "Open") {
      openedCourses++;
      openedHours += item.subject_hours;
    }
  });

  return (
    <div className={styles.levelsDiv}>
      {settingsMenuIsOpen && (
        <SettingMenu
          regestirationStatus={regestiration}
          closeMenuHandler={setSettingMenuIsOpen}
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
        leftTitle="Opened subjects to register:"
        registerationMax={openedCourses}
        component={openedHours}
      />
      <LevelBar
        onSubmitFeedback={setDoneIsOpen}
        subjects={leveledSubjects[0]}
        userMode="advisors"
        level="level 0"
        leftTitle="Opened"
        rightTitle="remaining"
      />
      <LevelBar
        onSubmitFeedback={setDoneIsOpen}
        subjects={leveledSubjects[1]}
        userMode="advisors"
        level="level 1"
        leftTitle="Opened"
        rightTitle="remaining"
      />
      <LevelBar
        onSubmitFeedback={setDoneIsOpen}
        subjects={leveledSubjects[2]}
        userMode="advisors"
        level="level 2"
        leftTitle="Opened"
        rightTitle="remaining"
      />
      <LevelBar
        subjects={leveledSubjects[3]}
        onSubmitFeedback={setDoneIsOpen}
        userMode="advisors"
        level="level 3"
        leftTitle="Opened"
        rightTitle="remaining"
      />
      <LevelBar
        onSubmitFeedback={setDoneIsOpen}
        subjects={leveledSubjects[4]}
        userMode="advisors"
        level="level 4"
        leftTitle="Opened"
        rightTitle="remaining"
      />

      <div className={styles.deadlineCheckbox}>
        <p className={styles.label}>{paragraph}</p>
        <RegisterButton
          RegBtnOnClick={() => {
            setSettingMenuIsOpen(true);
          }}
          userMode="advisors"
          btnLabel="Settings"
          modifiedStyle={{ top: "0", left: "515px", height: "45px" }}
        />
      </div>
    </div>
  );
}
export default AdvisorsAdvising;
