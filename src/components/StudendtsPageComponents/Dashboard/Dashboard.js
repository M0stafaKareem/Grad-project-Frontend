import Gpa1 from "./Gpa1";
import StatisticsField from "./StatisticsField";
import styles from "./Dashboard.module.css";

function Dashboard(props) {
  return (
    <div className={styles.statistics}>
      <section className={styles.frameSection}>
        <div className={styles.statistics1}>
          <b className={styles.statistics2}>Statistics</b>
          <h3 className={styles.statsPeriod}>
            {props.studentData.subjecs[0].semester +
              " : " +
              props.studentData.subjecs[0].year}
          </h3>
        </div>
        <div className={styles.frameDiv}>
          <StatisticsField
            stateIcon="Absence.svg"
            stateLabel="Student ID"
            statePercent={props.studentData.Id}
          />
          <StatisticsField
            stateIcon="PassedSubjects.svg"
            stateLabel="Passed Subjects"
            statePercent={props.studentData.passed_subjects}
          />
          <StatisticsField
            stateIcon="AcceptedHours.svg"
            stateLabel="Accepted Hours"
            statePercent={props.studentData.acceptedHours}
          />
          <StatisticsField
            stateIcon="checkcirclefill.svg"
            stateLabel="Total Registered Subjects"
            statePercent="5"
          />
        </div>
      </section>
      <Gpa1 gpaValue={props.studentData.GPA} />
    </div>
  );
}
export default Dashboard;
