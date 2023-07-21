import { FunctionComponent, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar1 from "../components/NavBar1";
import SearchBar1 from "../components/SearchBar1";
import styles from "./StudentPage1.module.css";
import Advising from "../components/StudendtsPageComponents/Advising/Advising";
import Dashboard from "../components/StudendtsPageComponents/Dashboard/Dashboard";
import GradesComp from "../components/StudendtsPageComponents/grades/GradesComp";

const StudentPage1: FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const location = useLocation();
  const studentData = location.state;

  return (
    <main className={styles.studentPage1}>
      <SearchBar1 />
      <NavBar1
        userMode=""
        btnState={currentPage}
        setCurrentState={setCurrentPage}
        userData={studentData}
      />
      {currentPage === "Dashboard" && <Dashboard studentData={studentData} />}
      {currentPage === "Advising" && <Advising studentData={studentData} />}
      {currentPage === "Grades" && <GradesComp studentData={studentData} />}
    </main>
  );
};

export default StudentPage1;
