import { FunctionComponent, MouseEventHandler } from "react";
import styles from "./SettingMenu.module.css";
import Backdrop from "../../Backdrop";
import { Checkbox } from "antd";
import RegisterButton from "../../StudendtsPageComponents/Advising/RegisterButton";
type SettingMenuType = {
  doneBtnOnClick?: MouseEventHandler;
};

const SettingMenu: FunctionComponent<SettingMenuType> = ({
  doneBtnOnClick,
}) => {
  return (
    <>
      <Backdrop onClick={doneBtnOnClick} />
      <div className={styles.menu}>
        <div className={styles.controlRow}>
          <div className={styles.controlLabel}>
            <Checkbox className={styles.checkbox} />
            Registration
          </div>
          <input type="date" className={styles.controlInput} />
        </div>
        <div className={styles.controlRow}>
          <div className={styles.controlLabel}>
            <Checkbox className={styles.checkbox} />
            Drop
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
