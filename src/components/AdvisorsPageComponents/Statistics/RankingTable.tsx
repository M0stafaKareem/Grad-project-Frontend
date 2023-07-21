import styles from "./RankingTable.module.css";
import { FunctionComponent } from "react";

import RankingHeader from "./RankingHeader";
import RankingRow from "./RankingRow";

type RankingTableType = {
  tableData: any;
};

const RankingTable: FunctionComponent<RankingTableType> = ({ tableData }) => {
  return (
    <div className={styles.main}>
      <RankingHeader />

      {tableData &&
        tableData.map((item: any) => {
          return (
            <RankingRow
              key={item.student_id}
              name={item.user_name}
              ID={item.student_id}
              rank={item.Rank}
              GPA={item.student_gpa}
            />
          );
        })}
    </div>
  );
};

export default RankingTable;
