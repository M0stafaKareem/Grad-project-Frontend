import { FunctionComponent, MouseEventHandler } from "react";
import styles from "./LoginButton.module.css";

type loginBtnType = {
  btnOnClick: MouseEventHandler;
};
const LoginButton: FunctionComponent<loginBtnType> = ({ btnOnClick }) => {
  return (
    <button className={styles.loginb} id="loginBtn" onClick={btnOnClick}>
      <label className={styles.login} htmlFor="loginBtn">
        Login
      </label>
    </button>
  );
};

export default LoginButton;
