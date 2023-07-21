import styles from "./RankingHeader.module.css";

const RankingHeader = () => {
  return (
    <div className={styles.main}>
      <div className={styles.rank}>Rank </div>
      <div className={styles.name}> Name </div>
      <div className={styles.ID}>ID </div>
      <div className={styles.GPA}>GPA </div>
    </div>
  );
};

export default RankingHeader;
