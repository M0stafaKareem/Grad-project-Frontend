import { useState } from "react";
import FrameComponent from "../components/AdvisorsPageComponents/Dashboard/FrameComponent";
import GradesWindow from "../components/AdvisorsPageComponents/Grades/GradesWindow";
import NavBar1 from "../components/NavBar1";
import SearchBar1 from "../components/SearchBar1";
import styles from "./AdvisorPage1.module.css";
import AdvisorsAdvising from "../components/AdvisorsPageComponents/Advising/AdvisorsAdvising";
import { useLocation } from "react-router-dom";
import RegisterB from "../components/AdvisorsPageComponents/Grades/RegisterB";

const AdvisorPage = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const location = useLocation();
  const advisorData = location.state;

  return (
    <main className={styles.advisorpage1}>
      <NavBar1
        userMode="advisor"
        btnState={currentPage}
        setCurrentState={setCurrentPage}
        userData={advisorData}
      />
      <SearchBar1 />
      {currentPage === "Dashboard" && <FrameComponent />}
      {currentPage === "Advising" && <AdvisorsAdvising />}
      {currentPage === "Grades" && (
        <GradesWindow subjects={advisorData.subjecs} />
      )}
    </main>
  );
};

export default AdvisorPage;
