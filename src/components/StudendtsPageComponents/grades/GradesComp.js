import GPAPageTable from "./GPAPageTable";
import OverallGPA from "./OverallGPA";

function GradesComp(props) {
  return (
    <>
      <GPAPageTable />
      <OverallGPA cGPS={props.studentData.studentGPA} />
    </>
  );
}
export default GradesComp;
