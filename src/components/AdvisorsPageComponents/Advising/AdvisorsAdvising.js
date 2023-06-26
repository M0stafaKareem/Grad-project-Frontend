import LevelBar from "../../StudendtsPageComponents/Advising/LevelBar";
import RegisterationHeader from "../../StudendtsPageComponents/Advising/RegisterationHeader";
import styles from "./AdvisorsAdvising.module.css";
import { FetchDataService } from "../../../service/fetchData";
import { useEffect, useState } from "react";

function AdvisorsAdvising() {
  const [subjecs, setSubjecs] = useState([]);

  const getSubjects = async () => {
    const SubjectsService = new FetchDataService();
    try {
      const jsonData = await SubjectsService.getAdvSubjects();
      setSubjecs(jsonData);
      return jsonData;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSubjects();
  }, []);

  const leveledSubjects = {};

  subjecs.map((item) => {
    const { subject_level } = item;
    if (!leveledSubjects[subject_level]) {
      leveledSubjects[subject_level] = [];
    }

    leveledSubjects[subject_level].push(item);
  });

  return (
    <div className={styles.levelsDiv}>
      <RegisterationHeader leftTitle="Opened subjects to register:" />
      <LevelBar
        subjects={leveledSubjects[0]}
        userMode="advisors"
        level="level 0"
        startDate="Opened"
        endDate="5/11"
        GPA="remaining"
        levelGPA="6"
      />
      <LevelBar
        subjects={leveledSubjects[1]}
        userMode="advisors"
        level="level 1"
        startDate="Opened"
        endDate="5/11"
        GPA="remaining"
        levelGPA="6"
      />
      <LevelBar
        subjects={leveledSubjects[2]}
        userMode="advisors"
        level="level 2"
        startDate="Opened"
        endDate="5/11"
        GPA="remaining"
        levelGPA="6"
      />
      <LevelBar
        subjects={leveledSubjects[3]}
        userMode="advisors"
        level="level 3"
        startDate="Opened"
        endDate="5/11"
        GPA="remaining"
        levelGPA="6"
      />
      <LevelBar
        subjects={leveledSubjects[4]}
        userMode="advisors"
        level="level 4"
        startDate="Opened"
        endDate="5/11"
        GPA="remaining"
        levelGPA="6"
      />
    </div>
  );
}
export default AdvisorsAdvising;
