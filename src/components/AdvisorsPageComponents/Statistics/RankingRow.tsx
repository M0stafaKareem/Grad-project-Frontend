import { FunctionComponent } from "react";
import styles from "./RankingRow.module.css";

type RankingRowType = {
  rank?: number;
  name?: string;
  ID?: string;
  GPA?: string;
};
const RankingRow: FunctionComponent<RankingRowType> = ({
  rank = 1,
  name = "AbdelAziz Karam AbdelAziz",
  ID = "21042",
  GPA = 2.53,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.rank}>{rank} </div>
      <div className={styles.name}> {name} </div>
      <div className={styles.ID}>{ID} </div>
      <div className={styles.GPA}>{GPA} </div>
    </div>
  );
};

export default RankingRow;
