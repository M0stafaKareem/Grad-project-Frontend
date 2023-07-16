import { FunctionComponent } from "react";
import styles from "./RegisterationHeader.module.css";

type RegisterationHeaderType = {
  leftTitle: string;
  rightTitle?: string;
  registerationMax?: string;
  component?: string;
  modifiedStyles?: {};
};

const RegisterationHeader: FunctionComponent<RegisterationHeaderType> = ({
  leftTitle = "Maximum Hours to Register:",
  rightTitle = "Registered Hours",
  registerationMax = "20",
  component = "18",
  modifiedStyles,
}) => {
  return (
    <div className={styles.subjectsbar} style={modifiedStyles}>
      <div className={styles.level0Parent}>
        <h2 className={styles.level0}>{leftTitle}</h2>
        <h2 className={styles.h2}>{registerationMax}</h2>
        <h2 className={styles.registeredHours}>{rightTitle}</h2>
        <h2 className={styles.h21}>{component}</h2>
      </div>
    </div>
  );
};

export default RegisterationHeader;
