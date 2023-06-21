import { FunctionComponent, useState } from "react";
import { advSubject, stuSubject } from "../../../service/datatype";
import Backdrop from "../../Backdrop";
import styles from "./LevelBar.module.css";
import Menu from "./Menu";

type LevelBarType = {
  userMode?: string;
  level?: string;
  startDate?: string;
  endDate?: string;
  GPA?: string;
  levelGPA?: string;
  subjects?: advSubject[] | stuSubject[];
};

const LevelBar: FunctionComponent<LevelBarType> = ({
  userMode = "",
  level = "Level 1",
  startDate = "Registered",
  endDate = "5/5",
  GPA = "GPA",
  levelGPA = 2.7,
  subjects,
}) => {
  const [DropdownIsOpen, changeDropdown] = useState(false);
  function menuBtnHandler() {
    changeDropdown(true);
  }

  function regBtnHandler() {
    changeDropdown(false);
  }

  const modifiedSubjects = subjects?.map((item) => {
    return {
      subject_code: item.subject_code,
      subject_name: item.subject_name,
      subject_hours: item.subject_hours,
      status:
        userMode === ""
          ? item.grade! >= 60
            ? true
            : false
          : item.status === "Open"
          ? true
          : false,
    };
  });

  return (
    <div>
      <button
        className={styles.subjectsbar}
        onClick={menuBtnHandler}
        tabIndex={-1}
      >
        <div className={styles.level0Parent}>
          <h2 className={styles.level0}>{level}</h2>
          <h3 className={styles.registered}>{startDate}</h3>
          <h3 className={styles.h3}>{endDate}</h3>
          <h3 className={styles.gpa}>{GPA}</h3>
          <h3 className={styles.h31}>{levelGPA}</h3>
          <img className={styles.optionsIcon} src="../options.svg" />
          <img className={styles.optionsIcon1} src="../options1.svg" />
        </div>
      </button>
      {DropdownIsOpen && (
        <Menu
          RegBtnOnClick={regBtnHandler}
          subjects={subjects}
          userMode={userMode}
        />
      )}
      {DropdownIsOpen && <Backdrop onClick={regBtnHandler} />}
    </div>
  );
};

export default LevelBar;
