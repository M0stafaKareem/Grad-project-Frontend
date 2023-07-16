import { FunctionComponent, useState } from "react";
import SubjectsHeader from "./SubjectsHeader";
import RegisterButton from "./RegisterButton";
import styles from "./Menu.module.css";
import SubjectDetails from "./SubjectDetails";
import { PushDataService } from "../../../service/pushData";
import Backdrop from "../../Backdrop";

type MenuType = {
  modifiedStyles?: {};
  closeDropdown: Function;
  onSubmitFeedback: Function;
  studentRequest?: string;
  userMode?: string;
  Id?: number;
  subjects?: any;
};

const Menu: FunctionComponent<MenuType> = ({
  onSubmitFeedback,
  modifiedStyles,
  closeDropdown,
  subjects,
  studentRequest,
  Id,
  userMode,
}) => {
  const [backdropIsOpen, setBackdropIsOpen] = useState(true);
  const data: any = [];
  const getCourseState = (courseState: {
    student_id?: number;
    state?: string;
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
        state: studentRequest,
      };
      data.push(courseState);
    }
  };
  async function regBtnHandler() {
    const p1 = new PushDataService();
    userMode === "advisors"
      ? await p1.changeCourseState({ data })
      : await p1.registerSubjects({ data });
    closeDropdown(false);
    onSubmitFeedback(true);
  }

  return (
    <>
      <div className={styles.menu} style={modifiedStyles}>
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
                checkboxChecked={
                  item.checkboxChecked ? item.checkboxChecked : false
                }
                checkboxIsDisabled={
                  item.checkboxIsDisabled ? item.checkboxIsDisabled : false
                }
                liftUpcourseState={getCourseState}
              />
            );
        })}
        <RegisterButton userMode={userMode} RegBtnOnClick={regBtnHandler} />
      </div>
      {backdropIsOpen && (
        <Backdrop
          onClick={() => {
            setBackdropIsOpen(false);
            closeDropdown(false);
          }}
        />
      )}
    </>
  );
};

export default Menu;
