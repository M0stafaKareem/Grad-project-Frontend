import { useState } from "react";
import FrameComponent from "../components/AdvisorsPageComponents/Dashboard/FrameComponent";
import GradesWindow from "../components/AdvisorsPageComponents/Grades/GradesWindow";
import NavBar1 from "../components/NavBar1";
import SearchBar1 from "../components/SearchBar1";
import styles from "./AdvisorPage1.module.css";
import AdvisorsAdvising from "../components/AdvisorsPageComponents/Advising/AdvisorsAdvising";
import { useLocation } from "react-router-dom";

const AdvisorPage = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const location = useLocation();
  const advisorData = location.state;

  return (
    <main className={styles.advisorpage1}>
      <SearchBar1 />
      <NavBar1
        userMode="advisor"
        btnState={currentPage}
        setCurrentState={setCurrentPage}
        userData={advisorData}
      />
      {currentPage === "Dashboard" && <FrameComponent />}
      {currentPage === "Advising" && (
        <AdvisorsAdvising advisorData={advisorData} />
      )}
      {currentPage === "Grades" && <GradesWindow />}
    </main>
  );
};

export default AdvisorPage;
