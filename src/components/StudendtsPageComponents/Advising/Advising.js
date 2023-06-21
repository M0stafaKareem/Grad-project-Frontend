import RegisterationHeader from "./RegisterationHeader";
import LevelBar from "./LevelBar";
import styles from "./Advising.module.css";

function Advising(props) {
  const leveledSubjects = {};

  props.studentData.subjecs.map((item) => {
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
        subjects={leveledSubjects[0]}
        endDate={"5/5"}
        levelGPA={"2"}
      />
      <LevelBar
        level="Level 1"
        subjects={leveledSubjects[1]}
        endDate={"5/6"}
        levelGPA={"2.6"}
      />
      <LevelBar
        level="Level 2"
        subjects={leveledSubjects[2]}
        endDate={"5/5"}
        levelGPA={"2.4"}
      />
      <LevelBar
        level="Level 3"
        subjects={leveledSubjects[3]}
        endDate={"3/4"}
        levelGPA={"3.3"}
      />
      <LevelBar
        level="Level 4"
        subjects={leveledSubjects[4]}
        endDate={"0/5"}
        levelGPA={""}
      />
    </div>
  );
}
export default Advising;
