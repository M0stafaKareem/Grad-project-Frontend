import { FunctionComponent, useState } from "react";
import { advSubject, stuSubject } from "../../../service/datatype";
import Backdrop from "../../Backdrop";
import styles from "./LevelBar.module.css";
import Menu from "./Menu";

type LevelBarType = {
  onSubmitFeedback: () => {};
  userMode?: string;
  level?: string;
  leftTitle?: string;
  rightTitle?: string;
  rightTitleVal?: string;
  Id?: number;
  subjects?: advSubject[] | stuSubject[];
};

const LevelBar: FunctionComponent<LevelBarType> = ({
  userMode = "",
  onSubmitFeedback,
  level = "Level 1",
  leftTitle = "Registered",
  rightTitle = "Opened",
  Id,
  subjects,
}) => {
  const [DropdownIsOpen, changeDropdown] = useState(false);

  let Opened = 0;
  let registered = 0;

  const modifiedSubjects = subjects?.map((item) => {
    item.status === "Open" ? Opened++ : null;
    userMode === ""
      ? item.enrolment_state === "Requested" ||
        item.enrolment_state === "Finished"
        ? registered++
        : null
      : null;
    if (userMode === "" && item.status !== "Open") return {};
    else
      return {
        subject_code: item.subject_code,
        subject_name: item.subject_name,
        subject_hours: item.subject_hours,
        checkboxChecked:
          userMode === ""
            ? item.grade! >= 60 ||
              item.enrolment_state === "Requested" ||
              item.enrolment_state === "Approved"
              ? true
              : false
            : item.status === "Open"
            ? true
            : false,
        checkboxIsDisabled:
          userMode === ""
            ? item.grade! >= 60 ||
              item.enrolment_state === "Requested" ||
              item.enrolment_state === "Approved"
              ? true
              : false
            : false,
      };
  });

  return (
    <div>
      <button
        className={styles.subjectsbar}
        onClick={() => {
          changeDropdown(true);
        }}
        tabIndex={-1}
      >
        <div className={styles.level0Parent}>
          <h2 className={styles.level0}>{level}</h2>
          <h3 className={styles.registered}>{leftTitle}</h3>
          <h3 className={styles.h3}>
            {userMode === ""
              ? registered.toString().concat("/" + subjects?.length)
              : Opened.toString().concat("/" + subjects?.length)}
          </h3>
          <h3 className={styles.gpa}>{rightTitle}</h3>
          <h3 className={styles.h31}>
            {userMode === "" ? Opened : subjects?.length! - Opened}
          </h3>
          <img className={styles.optionsIcon} src="../options.svg" />
          <img className={styles.optionsIcon1} src="../options1.svg" />
        </div>
      </button>
      {DropdownIsOpen && (
        <Menu
          closeDropdown={changeDropdown}
          onSubmitFeedback={onSubmitFeedback}
          subjects={modifiedSubjects}
          userMode={userMode}
          Id={Id}
          studentRequest="Requested"
        />
      )}
    </div>
  );
};

export default LevelBar;
