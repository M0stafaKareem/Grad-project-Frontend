import { useEffect, useState } from "react";
import { FetchDataService } from "../../../service/fetchData";
import GPAPageTable from "./GPAPageTable";
import OverallGPA from "./OverallGPA";

function GradesComp(props) {
  const [grades, setGrades] = useState();

  const fetchGrades = async () => {
    const f1 = new FetchDataService();
    setGrades(await f1.getStudentGrades(props.studentData.Id));
  };
  useEffect(() => {
    fetchGrades();
  }, []);

  return (
    <>
      {grades && <GPAPageTable studentGrades={grades} />}
      <OverallGPA cGPA={props.studentData.GPA} />
    </>
  );
}
export default GradesComp;
