import { FunctionComponent, useEffect, useState } from "react";
import styles from "./ApplicationsPage.module.css";
import RgCrad1 from "./RgCrad1";
import { FetchDataService } from "../../../service/fetchData";
import LoadingScreen from "../../loadingScreen/LoadingScreen";
import { position } from "@chakra-ui/react";

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
  console.log(studentsRequests);
  return (
    <>
      {isLoading && <LoadingScreen />}
      <main className={styles.advisingPage}>
        {studentsRequests ? (
          studentsRequests.map((item: any) => {
            return (
              <RgCrad1
                key={item.student_id}
                photo={item.studentPhoto}
                registeredSubjects={item.requested_subjects}
                studentID={item.student_id}
                studentName={item.user_name}
              />
            );
          })
        ) : (
          <p
            style={{
              padding: "100px",
              borderRadius: "15px",
              position: "absolute",
              left: "20vw",
              top: "20vh",
              backgroundColor: "#fff",
              fontFamily: "Poppings",
              fontSize: "20px",
            }}
          >
            No Requests at the moment
          </p>
        )}
      </main>
    </>
  );
};

export default ApplicationsPage;
