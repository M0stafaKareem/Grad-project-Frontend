import { FunctionComponent } from "react";
import "antd/dist/reset.css";
import { Progress } from "antd";
import styles from "./Gpa1.module.css";

type Gpa1Type = {
  gpaValue?: number;
};

const Gpa1: FunctionComponent<Gpa1Type> = ({ gpaValue }) => {
  return (
    <div className={styles.stats}>
      <div className={styles.groupDiv}>
        <h3 className={styles.homepageDesign}>GPA</h3>
        <strong className={styles.strong}>{gpaValue?.toFixed(2)}</strong>
      </div>
      <Progress
        className={styles.groupProgress}
        style={{ width: 169 }}
        type="dashboard"
        percent={(gpaValue! / 4) * 100}
        strokeColor={gpaValue! < 2 ? "#FF0000" : ""}
        showInfo={false}
      />
    </div>
  );
};

export default Gpa1;
