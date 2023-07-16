import RegisterButton from "../../StudendtsPageComponents/Advising/RegisterButton";
import RegisterationHeader from "../../StudendtsPageComponents/Advising/RegisterationHeader";
import styles from "./Schedule.module.css";

const SchedulePage = () => {
  return (
    <div className={styles.main}>
      <RegisterationHeader
        leftTitle="Select Max Number of Students Per Group"
        component=""
        rightTitle="Students"
      />
      <RegisterationHeader
        leftTitle="Select the number of time Slots"
        component=""
        rightTitle="Slots"
      />
      <RegisterationHeader
        leftTitle="Select Available Doctors for Each Slot"
        component=""
        registerationMax=""
        rightTitle=""
      />
      <RegisterationHeader
        leftTitle="Select Available Lecture Rooms for Each Slot"
        component=""
        registerationMax=""
        rightTitle=""
      />
      <RegisterButton userMode="advisors" btnLabel="Confirm" />
    </div>
  );
};

export default SchedulePage;
