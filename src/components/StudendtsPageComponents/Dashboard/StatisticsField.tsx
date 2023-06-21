import { FunctionComponent } from "react";
import styles from "./StatisticsField.module.css";

type StatisticsType = {
  stateIcon?: string;
  stateLabel?: string;
  statePercent?: string;
};

const StatisticsField: FunctionComponent<StatisticsType> = ({
  stateIcon,
  stateLabel,
  statePercent,
}) => {
  return (
    <section className={styles.tRS}>
      <img className={styles.vectorIcon} src={stateIcon} />
      <div className={styles.totalRegisteredSubjects}>{stateLabel}</div>
      <strong className={styles.strong}>{statePercent}</strong>
    </section>
  );
};

export default StatisticsField;
