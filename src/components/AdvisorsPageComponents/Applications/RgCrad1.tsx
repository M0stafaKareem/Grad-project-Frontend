import { FunctionComponent } from "react";
import StudentInfo from "./StudentInfo";
import SubjectsInfo from "./SubjectsInfo";
import styles from "./RgCrad1.module.css";

type RgCradType = {
  photo?: Blob;
  studentName?: string;
  studentID?: number;
  registeredSubjects?: string;
};
const RgCrad1: FunctionComponent<RgCradType> = ({
  photo,
  registeredSubjects,
  studentID,
  studentName,
}) => {
  return (
    <div className={styles.rgcrad}>
      <StudentInfo id={studentID} name={studentName} photo={photo} />
      <SubjectsInfo registeredSubjects={registeredSubjects} />
      <button className={styles.btn}>
        <img src="./vector9.svg" alt="Accept" />
      </button>
      <button className={styles.btn}>
        <img src="./error-svgrepo-com.svg" alt="Decline" />
      </button>
    </div>
  );
};

export default RgCrad1;
