import { FunctionComponent, MouseEventHandler, useEffect } from "react";
import SubjectsHeader from "./SubjectsHeader";
import RegisterButton from "./RegisterButton";
import styles from "./Menu.module.css";
import SubjectDetails from "./SubjectDetails";

type MenuType = {
  RegBtnOnClick?: MouseEventHandler;
  userMode?: string;
  subjects?: any;
};

const Menu: FunctionComponent<MenuType> = ({
  RegBtnOnClick,
  subjects,
  userMode,
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

  function rederComponents(count: number) {
    const components = [];
    for (let i = 0; i < count; i++)
      components.push(
        <SubjectDetails
          key={i}
          subject_code={subjects![i].subject_code}
          subject_name={subjects![i].subject_name}
          subject_hours={subjects![i].subject_hours}
          status={subjects![i].status}
        />
      );
    return components;
  }
  return (
    <div className={styles.menu} data-animate-on-scroll>
      <SubjectsHeader userMode={userMode} />
      {rederComponents(subjects!.length)}
      <RegisterButton userMode={userMode} RegBtnOnClick={RegBtnOnClick} />
    </div>
  );
};

export default Menu;
