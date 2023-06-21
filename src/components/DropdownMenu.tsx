import { FunctionComponent, useEffect } from "react";
import Notification1 from "../components/Notification1";
import styles from "./DropdownMenu.module.css";

const DropdownMenu: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <main className={styles.groupMain} data-animate-on-scroll>
      <img className={styles.polygonIcon} alt="" src="../polygon-1.svg" />
      <div className={styles.frameDiv}>
        <Notification1
          notificationIcon="../group-7.svg"
          notificationDate="Just Now"
          notificationBody="Hello Dr Hadeer"
        />
        <Notification1
          notificationIcon="checkcirclefill.svg"
          notificationDate="Yesterday"
          notificationBody="all done till now"
        />
        <Notification1
          notificationIcon="group-71.svg"
          notificationDate="2 days"
          notificationBody="all animations implemented successfully"
        />
        <Notification1
          notificationIcon="pluscirclefill.svg"
          notificationDate="1 week"
          notificationBody="line written here are limited to only 2 lines of text, for example : hi students here you can "
        />
      </div>
    </main>
  );
};

export default DropdownMenu;
