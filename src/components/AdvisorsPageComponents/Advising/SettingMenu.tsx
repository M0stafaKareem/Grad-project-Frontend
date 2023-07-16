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

  function doneBtnOnClick(): void {
    pushData.updateRegistrationStatus(regCheckbox, dropCheckbox);
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
            Registration
          </div>
          <input type="date" className={styles.controlInput} />
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
            Dropablitiy
          </div>
          <input type="date" className={styles.controlInput} />
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
