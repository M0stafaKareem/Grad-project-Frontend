import GPAPageTable from "./GPAPageTable";
import OverallGPA from "./OverallGPA";

function GradesComp(props) {
  console.log(props.studentData.subjecs);
  return (
    <>
      <GPAPageTable studentID={props.studentData.Id} />
      <OverallGPA cGPA={props.studentData.GPA} />
    </>
  );
}
export default GradesComp;
