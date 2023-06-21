import { FunctionComponent, MouseEventHandler } from "react";
import styles from "./Backdrop.module.css";

type backdropType = {
  onClick?: MouseEventHandler;
};

const Backdrop: FunctionComponent<backdropType> = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick} />;
};
export default Backdrop;
