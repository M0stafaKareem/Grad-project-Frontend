import { FunctionComponent } from "react";
import styles from "./Notification1.module.css";

type Notification1Type = {
  notificationBody?: string;
  notificationDate?: string;
  notificationIcon?: string;
};

const Notification1: FunctionComponent<Notification1Type> = ({
  notificationBody = "Well done! You have submitted your tasks of Javascript 1",
  notificationDate = "Yesterday",
  notificationIcon = "../checkcirclefill.svg",
}) => {
  return (
    <section className={styles.notification}>
      <h2 className={styles.jonathanWilliamCre}>{notificationBody}</h2>
      <h3 className={styles.aug10}>{notificationDate}</h3>
      <img
        className={styles.checkCircleFillIcon}
        alt=""
        src={notificationIcon}
      />
    </section>
  );
};

export default Notification1;
