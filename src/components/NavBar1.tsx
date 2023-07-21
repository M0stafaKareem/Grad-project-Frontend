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
  function scheduleHandler() {
    setCurrentState("Schedule");
  }
  function applicationsHandler() {
    setCurrentState("Applications");
  }
  function statisticsHandler() {
    setCurrentState("Statistics");
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
          pressedBtnIcon={
            userMode === "advisor"
              ? "../advClassesPressed.svg"
              : "../classes.svg"
          }
          btnState={btnState}
          btnLabel={userMode === "advisor" ? "Applications" : "Classes"}
          onClick={applicationsHandler}
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
          pressedBtnIcon="../schedulePressed.svg"
          btnIcon={
            userMode === "advisor" ? "../advSchedule.svg" : "../schedule.svg"
          }
          btnState={btnState}
          onClick={scheduleHandler}
          btnLabel="Schedule"
        />
        <UnPressedNavBtn
          userMode={userMode}
          btnIcon={
            userMode === "advisor" ? "../Statistics.svg" : "../mailing.svg"
          }
          pressedBtnIcon={
            userMode === "advisor"
              ? "../pressedStatistics.svg"
              : "../pressedMailing.svg"
          }
          btnLabel={userMode === "advisor" ? "Statistics" : "Mailings"}
          btnState={btnState}
          onClick={statisticsHandler}
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
