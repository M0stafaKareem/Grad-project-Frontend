import { FunctionComponent } from "react";
import StudentInfo from "./StudentInfo";
import SubjectsInfo from "./SubjectsInfo";
import styles from "./RgCrad1.module.css";
const RgCrad1: FunctionComponent = () => {
  return (
    <div className={styles.rgcrad}>
      <StudentInfo />
      <SubjectsInfo />
    </div>
  );
};

export default RgCrad1;
