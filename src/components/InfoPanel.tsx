import { FunctionComponent } from "react";
import styles from "./InfoPanel.module.css";

type InfoPanelType = {
  userName?: string;
  currentLevel?: string;
  displayPic?: Blob | MediaSource;
};

const InfoPanel: FunctionComponent<InfoPanelType> = ({
  displayPic,
  userName = "Aster Seawalker",
  currentLevel = "Level 3.1",
}) => {
  return (
    <div className={styles.user}>
      <img
        className={styles.maskGroupIcon}
        alt=""
        src={URL.createObjectURL(displayPic!)}
      />

      <h2 className={styles.asterSeawalker}>{userName}</h2>
      <h3 className={styles.level31}>{currentLevel}</h3>
    </div>
  );
};

export default InfoPanel;
