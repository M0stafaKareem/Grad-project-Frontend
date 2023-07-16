import { FunctionComponent } from "react";
import StudentInfoCard from "./StudentInfoCard";
import GPACard from "./GPACard";
import styles from "./StudentCard.module.css";

type studentCardType = {
  personalData: any;
};
const StudentCard: FunctionComponent<studentCardType> = ({ personalData }) => {
  return (
    <div className={styles.studentCardParent}>
      <StudentInfoCard
        studentPhoto="./file.jpg"
        studentName={personalData.user_name}
        nationalID={personalData.national_id}
        phoneNumber={personalData.telephone}
        acceptedHours={personalData.accepted_hours}
        studentLevel={personalData.student_level}
        passedSubjects={personalData.passed_subjects}
        studentStatus={personalData.college_state}
        studentID={personalData.student_id}
      />
      <GPACard studentGPA={personalData.student_gpa} />
    </div>
  );
};

export default StudentCard;
