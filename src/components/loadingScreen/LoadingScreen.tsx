import { FunctionComponent, MouseEventHandler } from "react";
import Backdrop from "../Backdrop";
import styles from "./LoadingScreen.module.css";

type LoadingScreenType = {};

const LoadingScreen: FunctionComponent<LoadingScreenType> = ({}) => {
  return (
    <div>
      <Backdrop />
      <div className={styles.newtons_cradle}>
        <div className={styles.newtons_cradle__dot}></div>
        <div className={styles.newtons_cradle__dot}></div>
        <div className={styles.newtons_cradle__dot}></div>
        <div className={styles.newtons_cradle__dot}></div>
      </div>
    </div>
  );
};
export default LoadingScreen;
