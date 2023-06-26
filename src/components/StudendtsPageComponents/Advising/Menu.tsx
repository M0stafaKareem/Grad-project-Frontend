import { FunctionComponent, MouseEventHandler, useEffect } from "react";
import SubjectsHeader from "./SubjectsHeader";
import RegisterButton from "./RegisterButton";
import styles from "./Menu.module.css";
import SubjectDetails from "./SubjectDetails";
import { PushDataService } from "../../../service/pushData";

type MenuType = {
  closeDropdown: Function;
  userMode?: string;
  Id?: number;
  subjects?: any;
};

const Menu: FunctionComponent<MenuType> = ({
  closeDropdown,
  subjects,
  Id,
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

  const data: any = [];
  const getCourseState = (courseState: {
    student_id?: number;
    subject_code: string;
    status?: boolean | string;
  }) => {
    if (userMode === "advisors") {
      courseState = {
        subject_code: courseState.subject_code,
        status: courseState.status ? "Open" : "Close",
      };
      data.push(courseState);
    } else {
      courseState = {
        student_id: Id,
        subject_code: courseState.subject_code,
      };
      data.push(courseState);
    }
  };

  async function regBtnHandler() {
    console.log(JSON.stringify({ data }));
    const p1 = new PushDataService();
    userMode === "advisors"
      ? await p1.changeCourseState({ data })
      : await p1.registerSubjects({ data });
    closeDropdown(false);
  }
  return (
    <div className={styles.menu} data-animate-on-scroll>
      <SubjectsHeader userMode={userMode} />
      {subjects.map((item: any) => {
        if (!item.subject_code) return;
        else
          return (
            <SubjectDetails
              key={item.subject_code}
              subject_code={item.subject_code}
              subject_name={item.subject_name}
              subject_hours={item.subject_hours}
              checkboxChecked={item.checkboxChecked}
              checkboxIsDisabled={item.checkboxIsDisabled}
              liftUpcourseState={getCourseState}
            />
          );
      })}
      <RegisterButton userMode={userMode} RegBtnOnClick={regBtnHandler} />
    </div>
  );
};

export default Menu;
