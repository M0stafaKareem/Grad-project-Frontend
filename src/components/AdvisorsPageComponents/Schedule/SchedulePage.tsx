import RegisterButton from "../../StudendtsPageComponents/Advising/RegisterButton";
import InputHeader from "./InputHeader";
import styles from "./Schedule.module.css";

const SchedulePage = () => {
  return (
    <div className={styles.main}>
      <InputHeader
        paragragh="Select max number of student per group"
        unit={"Student"}
        hasBtn={false}
      />
      <InputHeader
        paragragh="Select the number of time slots"
        unit={"Slots"}
        type="3-columns"
      />
      <InputHeader
        paragragh="Select available doctors for each slot"
        unit="Doctors"
        type="2-columns"
        hasInput={true}
      />
      <InputHeader
        paragragh="Select available lecture Rooms for each Slot"
        hasInput={false}
        type="2-columns"
        unit={null}
      />
      <RegisterButton userMode="advisors" btnLabel="Confirm" />
    </div>
  );
};

export default SchedulePage;
