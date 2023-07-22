import { FunctionComponent } from "react";
import styles from "./StudentInfo.module.css";

type StudentInfoType = {
  photo?: Blob;
  name?: string;
  id?: number;
};
const StudentInfo: FunctionComponent<StudentInfoType> = ({
  id,
  name,
  photo,
}) => {
  return (
    <div className={styles.photoParent}>
      <img
        className={styles.photoIcon}
        alt=""
        src={URL.createObjectURL(photo!)}
      />
      <h2 className={styles.name}>{name}</h2>
      <h3 className={styles.id}>{id}</h3>
    </div>
  );
};

export default StudentInfo;
