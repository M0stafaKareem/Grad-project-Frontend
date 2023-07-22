import { FunctionComponent, useEffect, useState } from "react";
import styles from "./ApplicationsPage.module.css";
import RgCrad1 from "./RgCrad1";
import { FetchDataService } from "../../../service/fetchData";
import LoadingScreen from "../../loadingScreen/LoadingScreen";

const ApplicationsPage: FunctionComponent = () => {
  const [studentsRequests, setStudentsRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const f1 = new FetchDataService();

  const getData = async () => {
    setIsLoading(true);
    const data: any = await f1.getApplicationsData();
    setStudentsRequests(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <main className={styles.advisingPage}>
        {studentsRequests[0] &&
          studentsRequests.map((item: any) => {
            return (
              <RgCrad1
                photo={item.studentPhoto}
                registeredSubjects={item.requested_subjects}
                studentID={item.student_id}
                studentName={item.user_name}
              />
            );
          })}
      </main>
    </>
  );
};

export default ApplicationsPage;
