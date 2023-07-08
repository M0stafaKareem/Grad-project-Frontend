import { FunctionComponent } from "react";
import styles from "./StudentInfoCard.module.css";

type StudentInfoCardType = {
  studentName?: string;
  studentPhoto?: string;
  studentID?: string;
  acceptedHours?: string;
  passedSubjects?: string;
  studentStatus?: string;
  studentLevel?: string;
};

const StudentInfoCard: FunctionComponent<StudentInfoCardType> = ({
  studentName = "Abdelaziz Shaheen",
  studentPhoto,
  studentID = "21042",
  acceptedHours = "153",
  passedSubjects = "45",
  studentStatus = "Undergrade",
  studentLevel = "4.3",
}) => {
  return (
    <div className={styles.studentCard}>
      <div className={styles.photoParent}>
        <img className={styles.photoIcon} alt="" src={studentPhoto} />
        <h2 className={styles.name}>{studentName}</h2>
        <h3 className={styles.countries}>{studentID}</h3>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.ahParent}>
          <div className={styles.ah}>
            <h2 className={styles.name}>{acceptedHours}</h2>
            <h3 className={styles.followers}>Accepted Hours</h3>
          </div>
          <div className={styles.ps}>
            <h2 className={styles.name}>{passedSubjects}</h2>
            <h3 className={styles.followers}>Passed Subjects</h3>
          </div>
        </div>
        <div className={styles.levelParent}>
          <div className={styles.level}>
            <h3 className={styles.posts1}>Level</h3>
            <h3 className={styles.posts2}>{studentLevel}</h3>
          </div>
          <div className={styles.level}>
            <h3 className={styles.posts1}>Status</h3>
            <h3 className={styles.posts4}>{studentStatus}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoCard;
