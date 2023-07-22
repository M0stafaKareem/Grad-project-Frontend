import { FunctionComponent } from "react";
import CoursesHeader from "../grades/CoursesHeader";
import CourseDetails from "../grades/CourseDetails";
import SemGpa from "../grades/SemGpa";
import styles from "./Courses.module.css";
import { gradesCalculator } from "../../../service/gradesCalculator";

type CoursesType = {
  gradesMode: {
    first: string;
    level: string;
    semester: string;
    year: string;
  };
  grades: any;
};

const Courses: FunctionComponent<CoursesType> = ({ grades, gradesMode }) => {
  let totalPoints = 0;
  let totalCreditHours = 0;
  let cGPA;
  const helper = new gradesCalculator();

  const currentSem = gradesMode.level
    ? "Level ".concat(gradesMode.level)
    : "Overall ";
  {
    grades &&
      grades.map((item: any) => {
        if (item.grade) {
          totalPoints += helper.getCoursePoints(
            item.grade,
            item.subject_hours
          )!;
          totalCreditHours += item.subject_hours;
        }
      });
    cGPA = (totalPoints / totalCreditHours).toPrecision(3);
  }

  return (
    <div className={styles.pages}>
      <CoursesHeader />
      {grades &&
        grades.map((item: any) => {
          return (
            <CourseDetails
              key={item.subject_name}
              courseName={item.subject_name}
              courseGrade={item.score}
              courseCredits={item.grade}
            />
          );
        })}

      <SemGpa currentSemester={currentSem} semGPA={cGPA.toString()} />
    </div>
  );
};

export default Courses;
