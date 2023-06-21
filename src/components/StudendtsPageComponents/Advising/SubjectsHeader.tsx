import { FunctionComponent } from "react";
import styles from "./SubjectsHeader.module.css";

type HeaderType = {
  userMode?: string;
};
const SubjectsHeader: FunctionComponent<HeaderType> = ({ userMode }) => {
  return (
    <div
      className={
        userMode === "advisors"
          ? `${styles.frameParent} + ${styles.advisors}`
          : styles.frameParent
      }
    >
      <h2 className={styles.text}>Code</h2>
      <h2 className={styles.text}>Name</h2>
      <h2 className={styles.text}>Credit Hours</h2>
      <h2 className={styles.text}>Register</h2>
    </div>
  );
};

export default SubjectsHeader;
