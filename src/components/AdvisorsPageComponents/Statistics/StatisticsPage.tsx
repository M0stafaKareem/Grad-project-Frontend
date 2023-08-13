import { FunctionComponent, useEffect, useState } from "react";
import SearchingParams from "./SearchingParams";
import styles from "./StatisticsPage.module.css";
import RankingTable from "./RankingTable";
import SubjectStatistics from "./SubjectStatistics";
import { FetchDataService } from "../../../service/fetchData";

type StatisticsPageType = {
  subjects: any;
};

const StatisticsPage: FunctionComponent<StatisticsPageType> = ({
  subjects,
}) => {
  const subjectsNames: any[] = [];
  const f1 = new FetchDataService();
  const [statsData, setStatsData] = useState(null);
  const [params, setParams] = useState({
    statsMode: null,
    courseCode: null,
    semester: null,
    year: null,
  });

  subjects &&
    subjects.map((item: any) => {
      subjectsNames.push({
        value: item.subject_code,
        label: item.subject_name,
      });
    });

  const getData = async () => {
    let jsonData = null;
    setStatsData(null);
    if (params.semester && params.year) {
      params.statsMode === "Course"
        ? (jsonData = await f1.getSubjectGraphData(
            params.courseCode!,
            params.semester,
            params.year
          ))
        : (jsonData = await f1.getStudentsGraphData(
            params.semester,
            params.year
          ));
    }
    setStatsData(jsonData);
  };

  useEffect(() => {
    getData();
  }, [params]);

  return (
    <div className={styles.main}>
      <SearchingParams
        subjectsNames={subjectsNames}
        updatingFunction={setParams}
      />
      {params.statsMode === "Course" && statsData && (
        <SubjectStatistics graphData={statsData} />
      )}

      {params.statsMode === "Graduates" && statsData && (
        <RankingTable tableData={statsData} />
      )}
    </div>
  );
};

export default StatisticsPage;
