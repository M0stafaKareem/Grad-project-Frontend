import { FunctionComponent } from "react";
import StudentInfoCard from "./StudentInfoCard";
import GPACard from "./GPACard";
import styles from "./StudentCard.module.css";
const StudentCard: FunctionComponent = () => {
  return (
    <div className={styles.studentCardParent}>
      <StudentInfoCard studentPhoto="./group-3.png" />
      <GPACard />
    </div>
  );
};

export default StudentCard;
