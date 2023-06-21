import Gpa1 from "./Gpa1";
import StatisticsField from "./StatisticsField";
import styles from "./Dashboard.module.css";

function Dashboard(props) {
  return (
    <div className={styles.statistics}>
      <section className={styles.frameSection}>
        <div className={styles.statistics1}>
          <b className={styles.statistics2}>Statistics</b>
          <h3 className={styles.statsPeriod}>October - January 2023</h3>
        </div>
        <div className={styles.frameDiv}>
          <StatisticsField
            stateIcon="Absence.svg"
            stateLabel="Absence"
            statePercent="10%"
          />
          <StatisticsField
            stateIcon="PassedSubjects.svg"
            stateLabel="Passed Subjects"
            statePercent="64%"
          />
          <StatisticsField
            stateIcon="AcceptedHours.svg"
            stateLabel="Accepted Hours"
            statePercent="66%"
          />
          <StatisticsField
            stateIcon="checkcirclefill.svg"
            stateLabel="Total Registered Subjects"
            statePercent="5%"
          />
        </div>
      </section>
      <Gpa1 gpaValue={props.studentData.GPA} />
    </div>
  );
}
export default Dashboard;
