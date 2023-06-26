import { FunctionComponent, MouseEventHandler } from "react";
import styles from "./RegisterButton.module.css";

type RegBtnType = {
  RegBtnOnClick?: MouseEventHandler;
  userMode?: string;
};
const RegisterButton: FunctionComponent<RegBtnType> = ({
  userMode = "",
  RegBtnOnClick,
}) => {
  const styling =
    userMode === "advisors"
      ? `${styles.registerb} + ${styles.advisors}`
      : styles.registerb;

  return (
    <button className={styling} onClick={RegBtnOnClick}>
      {userMode === "" && (
        <img className={styles.bookIcon} alt="" src="../book.svg" />
      )}
      {userMode === "advisors" && (
        <img className={styles.bookIcon} alt="" src="../advBook.svg" />
      )}
      <label className={styles.register}>Register</label>
      <img className={styles.bookIcon1} alt="" src="../book1.svg" />
    </button>
  );
};

export default RegisterButton;
