import { FunctionComponent } from "react";
import styles from "./RegisterationHeader.module.css";

type RegisterationHeaderType = {
  registerationMax?: string;
  component?: string;
};

const RegisterationHeader: FunctionComponent<RegisterationHeaderType> = ({
  registerationMax = "20",
  component = "18",
}) => {
  return (
    <div className={styles.subjectsbar}>
      <div className={styles.level0Parent}>
        <h2 className={styles.level0}>Maximum Hours to Register:</h2>
        <h2 className={styles.h2}>{registerationMax}</h2>
        <h2 className={styles.registeredHours}>Registered Hours</h2>
        <h2 className={styles.h21}>{component}</h2>
      </div>
    </div>
  );
};

export default RegisterationHeader;
