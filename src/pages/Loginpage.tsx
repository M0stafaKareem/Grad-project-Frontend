import { FunctionComponent, useState } from "react";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";
import LoginFrom from "../components/login/LoginFrom";
import styles from "./Loginpage.module.css";

const Loginpage: FunctionComponent = () => {
  const [loadingScreenIsOpen, setLoadingScreen] = useState(false);

  return (
    <main className={styles.loginpageMain}>
      <img className={styles.groupIcon} src="../FEHUlogo.svg" />
      <LoginFrom setLoadingScreen={setLoadingScreen} />
      {loadingScreenIsOpen && <LoadingScreen />}
    </main>
  );
};

export default Loginpage;
