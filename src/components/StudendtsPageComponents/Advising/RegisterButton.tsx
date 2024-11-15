import { FunctionComponent, MouseEventHandler } from "react";
import styles from "./RegisterButton.module.css";

type RegBtnType = {
  RegBtnOnClick?: MouseEventHandler;
  userMode?: "" | "advisors" | undefined;
  btnLabel?: string;
  modifiedStyle?: {};
};
const RegisterButton: FunctionComponent<RegBtnType> = ({
  userMode = "",
  RegBtnOnClick,
  btnLabel = userMode === "" ? "Register" : "Submit",
  modifiedStyle,
}) => {
  const styling =
    userMode === "advisors"
      ? `${styles.registerb} + ${styles.advisors}`
      : styles.registerb;

  return (
    <button className={styling} onClick={RegBtnOnClick} style={modifiedStyle}>
      {userMode === "" && (
        <img className={styles.bookIcon} alt="" src="../book.svg" />
      )}
      {userMode === "advisors" && (
        <img className={styles.bookIcon} alt="" src="../advBook.svg" />
      )}
      {btnLabel}
      <img className={styles.bookIcon1} alt="" src="../book1.svg" />
    </button>
  );
};

export default RegisterButton;
