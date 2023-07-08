import GPAPageTable from "./GPAPageTable";
import OverallGPA from "./OverallGPA";

function GradesComp(props) {
  return (
    <>
      <GPAPageTable />
      <OverallGPA cGPA={props.studentData.GPA} />
    </>
  );
}
export default GradesComp;
