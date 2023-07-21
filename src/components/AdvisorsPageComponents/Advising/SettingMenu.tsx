import { FunctionComponent, useState } from "react";
import styles from "./SettingMenu.module.css";
import Backdrop from "../../Backdrop";
import { Checkbox } from "antd";
import RegisterButton from "../../StudendtsPageComponents/Advising/RegisterButton";
import { PushDataService } from "../../../service/pushData";

type SettingMenuType = {
  closeMenuHandler: Function;
  regestirationStatus: {
    submition: string;
    dropablitiy: string;
    semester: string;
    year: string;
  };
};

const SettingMenu: FunctionComponent<SettingMenuType> = ({
  closeMenuHandler,
  regestirationStatus,
}) => {
  const pushData = new PushDataService();
  const regCheckBoxInitialState =
    regestirationStatus.submition === "true" ? true : false;
  const dropCheckBoxInitialState =
    regestirationStatus.dropablitiy === "true" ? true : false;

  const [regCheckbox, setRegCheckbox] = useState(regCheckBoxInitialState);
  const [dropCheckbox, setDropCheckbox] = useState(dropCheckBoxInitialState);
  const [semester, setSemester] = useState(regestirationStatus.semester);
  const [semesterYear, setSemesterYear] = useState(regestirationStatus.year);

  function doneBtnOnClick(): void {
    pushData.updateRegistrationStatus(
      regCheckbox,
      dropCheckbox,
      semesterYear,
      semester
    );
    closeMenuHandler(false);
  }
  return (
    <>
      <Backdrop onClick={() => closeMenuHandler(false)} />
      <div className={styles.menu}>
        <div className={styles.controlRow}>
          <div className={styles.controlLabel}>
            <Checkbox
              className={styles.checkbox}
              checked={regCheckbox}
              onClick={() => {
                setRegCheckbox(!regCheckbox);
              }}
            />
            Registration Status
          </div>
          <select
            className={styles.controlInput}
            value={semester}
            onChange={(e) => {
              setSemester(e.target.value);
            }}
          >
            <option value="" disabled hidden>
              Current Semester
            </option>
            <option value="Fall">Fall</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
          </select>
        </div>
        <div className={styles.controlRow}>
          <div className={styles.controlLabel}>
            <Checkbox
              className={styles.checkbox}
              checked={dropCheckbox}
              onClick={() => {
                setDropCheckbox(!dropCheckbox);
              }}
            />
            Dropping Status
          </div>
          <input
            type="text"
            onChange={(e) => setSemesterYear(e.target.value)}
            className={styles.controlInput}
            placeholder="Educational Year"
            defaultValue={semesterYear}
          />
        </div>
        <RegisterButton
          RegBtnOnClick={doneBtnOnClick}
          userMode="advisors"
          btnLabel="Done"
        />
      </div>
    </>
  );
};

export default SettingMenu;
