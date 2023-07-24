import { FunctionComponent, useRef } from "react";
import classes from "./CheckBox.module.css";
import styles from "./SubjectDetails.module.css";

/* type SubjectDetailsType = {
  subject_code?: string;
  subject_name?: string;
  subject_hours?: number;
  checkboxChecked?: boolean;
  checkboxIsDisabled?: boolean;
  liftUpcourseState: Function;
}; */

const SubjectDetails /* : FunctionComponent<SubjectDetailsType> */ = ({
  subject_code,
  subject_name,
  subject_hours,
  checkboxChecked,
  checkboxIsDisabled,
  liftUpcourseState,
}) => {
  const checkboxRef = useRef(null);

  return (
    <div className={styles.frameParent}>
      <h2 className={styles.sharedWithMeWrapper}>
        <div className={styles.sharedWithMe}>{subject_code}</div>
      </h2>
      <h2 className={styles.sharedWithMeContainer}>
        <div className={styles.sharedWithMe}>{subject_name}</div>
      </h2>
      <h2 className={styles.wrapper}>
        <div className={styles.sharedWithMe}>{subject_hours}</div>
      </h2>
      <div className={styles.checkbox}>
        <label>
          <input
            ref={checkboxRef}
            onChange={() => {
              liftUpcourseState({
                subject_code: subject_code,
                subject_hours: +subject_hours,
                status: checkboxRef.current.checked,
              });
            }}
            type="checkbox"
            defaultChecked={checkboxChecked}
            disabled={checkboxIsDisabled}
          />
          <span className={classes.checkbox} />
        </label>
      </div>
    </div>
  );
};

export default SubjectDetails;
