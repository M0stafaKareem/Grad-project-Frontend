import { FunctionComponent, MouseEventHandler } from "react";
import styles from "./UnPressedNavBtn.module.css";

type UnPressedNavBtnType = {
  pressedBtnIcon?: string;
  btnIcon?: string;
  btnLabel?: string;
  btnState?: string;
  userMode?: string;
  onClick?: MouseEventHandler;
};

const UnPressedNavBtn: FunctionComponent<UnPressedNavBtnType> = ({
  pressedBtnIcon,
  btnIcon,
  btnLabel,
  btnState,
  userMode,
  onClick,
}) => {
  return (
    <button
      className={
        btnState === btnLabel
          ? ` ${styles.pressed} + ${styles[userMode!]} `
          : `${styles.unPressed} + ${styles[userMode!]} `
      }
      onClick={onClick}
      tabIndex={-1}
    >
      <div className={styles.peopleParent}>
        <div className={styles.people}>
          <img className={styles.vectorIcon} src={btnIcon} />
          <img className={styles.vectorIcon1} src={pressedBtnIcon} />
        </div>
        <h2 className={styles.advising1}>{btnLabel}</h2>
      </div>
    </button>
  );
};

export default UnPressedNavBtn;
