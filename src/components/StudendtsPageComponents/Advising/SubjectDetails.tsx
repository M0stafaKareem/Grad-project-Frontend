import { FunctionComponent } from "react";
import CheckBox from "../../CheckBox";
import styles from "./SubjectDetails.module.css";

type SubjectDetailsType = {
  subject_code?: string;
  subject_name?: string;
  subject_hours?: number;
  status?: boolean;
};

const SubjectDetails: FunctionComponent<SubjectDetailsType> = ({
  subject_code: subjectCode,
  subject_name: subjectName,
  subject_hours: subjectCreditHours,
  status: subjectState,
}) => {
  return (
    <div className={styles.frameParent}>
      <h2 className={styles.sharedWithMeWrapper}>
        <div className={styles.sharedWithMe}>{subjectCode}</div>
      </h2>
      <h2 className={styles.sharedWithMeContainer}>
        <div className={styles.sharedWithMe}>{subjectName}</div>
      </h2>
      <h2 className={styles.wrapper}>
        <div className={styles.sharedWithMe}>{subjectCreditHours}</div>
      </h2>
      <div className={styles.checkbox}>
        <CheckBox checkBoxstate={subjectState} />
      </div>
    </div>
  );
};

export default SubjectDetails;
