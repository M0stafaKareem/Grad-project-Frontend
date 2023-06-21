import { FunctionComponent, useEffect } from "react";
import styles from "./PressedNavBtn.module.css";

type PressedNavBtnType = {
  btnIcon?: string;
  btnLabel?: string;
};

const PressedNavBtn: FunctionComponent<PressedNavBtnType> = ({
  btnIcon,
  btnLabel,
}) => {
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
    <button className={styles.dashboard} data-animate-on-scroll>
      <img className={styles.vectorIcon} alt="" src={btnIcon} />
      <h2 className={styles.dashboard1}>{btnLabel}</h2>
    </button>
  );
};

export default PressedNavBtn;
