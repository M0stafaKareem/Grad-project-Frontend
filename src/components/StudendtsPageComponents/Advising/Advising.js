import RegisterationHeader from "./RegisterationHeader";
import LevelBar from "./LevelBar";
import styles from "./Advising.module.css";
import { FetchDataService } from "../../../service/fetchData";
import { useEffect, useState } from "react";

function Advising(props) {
  const [subjecs, setSubjecs] = useState([]);

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
      <RegisterationHeader />
      <LevelBar
        level="Level 0"
        Id={props.studentData.Id}
        subjects={leveledSubjects[0]}
        endDate={"5/11"}
        levelGPA={"2"}
      />
      <LevelBar
        level="Level 1"
        Id={props.studentData.Id}
        subjects={leveledSubjects[1]}
        endDate={"5/11"}
        levelGPA={"2.6"}
      />
      <LevelBar
        level="Level 2"
        Id={props.studentData.Id}
        subjects={leveledSubjects[2]}
        endDate={"5/10"}
        levelGPA={"2.4"}
      />
      <LevelBar
        level="Level 3"
        Id={props.studentData.Id}
        subjects={leveledSubjects[3]}
        endDate={"3/10"}
        levelGPA={"3.3"}
      />
      <LevelBar
        level="Level 4"
        Id={props.studentData.Id}
        subjects={leveledSubjects[4]}
        endDate={"0/12"}
        levelGPA={""}
      />
    </div>
  );
}
export default Advising;
