import { FunctionComponent, useState, useEffect } from "react";
import CourseOverview from "./CourseOverview";
import styles from "./FrameComponent.module.css";
import Statistics from "./Statistics";
import { FetchDataService } from "../../../service/fetchData";

const FrameComponent: FunctionComponent = () => {
  const [courseData, setCourseData] = useState([]);
  const f1 = new FetchDataService();
  async function fetchData() {
    setCourseData(await f1.getAdvisorDashboardData());
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.courseoverviewParent}>
      <div className={styles.stats}>
        <Statistics />
      </div>
      <div className={styles.courseoverview}>
        {courseData &&
          courseData.map((item: any) => {
            return (
              <CourseOverview
                key={item.subject_code}
                courseCode={item.subject_code}
                courseProvider={item.instructor_name}
                courseName={item.subject_name}
                numberOfRegs={item.request_count}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FrameComponent;
