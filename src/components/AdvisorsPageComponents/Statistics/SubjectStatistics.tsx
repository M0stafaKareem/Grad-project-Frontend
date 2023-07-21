import { FunctionComponent, useEffect } from "react";
import SplineAreaChart from "./Spline Area Chart";
import CourseInstructors from "./CourseInstructors";
import GPACard from "../Grades/GPACard";
import styles from "./SubjectStatistics.module.css";

type SubjectStatisticsType = {
  graphData: any;
};

const SubjectStatistics: FunctionComponent<SubjectStatisticsType> = ({
  graphData,
}) => {
  useEffect(() => {
    document.getElementsByClassName("canvasjs-chart-credit")[0].remove();
  }, []);
  return (
    <div>
      <CourseInstructors
        assistant={graphData.AssistantName}
        teacher={graphData.InstructorName}
      />
      <GPACard
        title="Success Rate"
        modifiedStyle={{
          position: "absolute",
          top: "120px",
          width: "283px",
          height: " 290px",
          left: "575px",
        }}
        title2="Registered Students"
        title2Value={graphData.StudentCount}
        isFormated={false}
        studentGPA={
          +(
            (+graphData.PassedStudentsCount / +graphData.StudentCount) *
            4
          ).toPrecision(3)
        }
      />
      <div className={styles.graph}>
        <SplineAreaChart
          A={graphData.A}
          Aplus={graphData.Aplus}
          Aminus={graphData.Aminus}
          B={graphData.B}
          Bplus={graphData.Bplus}
          Bminus={graphData.Bminus}
          C={graphData.C}
          Cplus={graphData.Cplus}
          Cminus={graphData.Cminus}
          D={graphData.D}
          Dplus={graphData.Dplus}
          F={graphData.F}
        />
      </div>
    </div>
  );
};

export default SubjectStatistics;
