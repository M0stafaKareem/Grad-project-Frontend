import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoPanel from "../components/InfoPanel";
import styles from "./NavBar1.module.css";
import UnPressedNavBtn from "./UnPressedNavBtn";

type NavBarType = {
  btnState: string;
  setCurrentState: any;
  userData: any;
  userMode: string;
};
const NavBar1: FunctionComponent<NavBarType> = ({
  setCurrentState,
  userMode,
  btnState,
  userData,
}) => {
  const navigate = useNavigate();

  function dashboardHandler() {
    setCurrentState("Dashboard");
  }
  function advisingHandler() {
    setCurrentState("Advising");
  }
  function gradesHandler() {
    setCurrentState("Grades");
  }
  function logOutHandler() {
    navigate("/");
  }

  return (
    <div className={styles.navBar}>
      <nav className={styles.frameNav}>
        <InfoPanel
          displayPic={userData.Photo}
          userName={userData.Name}
          currentLevel={userData.Level}
        />
        <UnPressedNavBtn
          pressedBtnIcon="../dashboardPressed.svg"
          btnIcon={
            userMode === "advisor" ? "../advDashboard.svg" : "../dashboard.svg"
          }
          btnLabel="Dashboard"
          btnState={btnState}
          userMode={userMode}
          onClick={dashboardHandler}
        />
        <UnPressedNavBtn
          pressedBtnIcon="../advisingPressed.svg"
          btnIcon={
            userMode === "advisor" ? "../advAdvising.svg" : "../advising.svg"
          }
          btnLabel="Advising"
          btnState={btnState}
          userMode={userMode}
          onClick={advisingHandler}
        />
        <UnPressedNavBtn
          userMode={userMode}
          btnIcon={
            userMode === "advisor" ? "../advClasses.svg" : "../classes.svg"
          }
          btnLabel="Classes"
        />
        <UnPressedNavBtn
          pressedBtnIcon="../gradesPressed.svg"
          btnIcon={
            userMode === "advisor" ? "../advGrades.svg" : "../grades.svg"
          }
          btnLabel="Grades"
          btnState={btnState}
          userMode={userMode}
          onClick={gradesHandler}
        />
        <UnPressedNavBtn
          userMode={userMode}
          btnIcon={
            userMode === "advisor" ? "../advSchedule.svg" : "../schedule.svg"
          }
          btnLabel="Schedule"
        />
        <UnPressedNavBtn
          userMode={userMode}
          btnIcon={
            userMode === "advisor" ? "../advSettings.svg" : "../settings.svg"
          }
          btnLabel="Settings"
        />
        <UnPressedNavBtn
          btnIcon={
            userMode === "advisor" ? "../advLogout.svg" : "../logout.svg"
          }
          userMode={userMode}
          btnLabel="Log Out"
          onClick={logOutHandler}
        />
      </nav>
    </div>
  );
};

export default NavBar1;
