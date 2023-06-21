import { FunctionComponent } from "react";
import CoursesHeader from "../grades/CoursesHeader";
import CourseDetails from "../grades/CourseDetails";
import SemGpa from "../grades/SemGpa";
import styles from "./Courses.module.css";

const Courses: FunctionComponent = () => {
  return (
    <div className={styles.pages}>
      <CoursesHeader />
      <CourseDetails
        courseName="Control system design"
        courseGrade="B+"
        courseCredits="84"
      />
      <CourseDetails
        courseName="Digital Communication"
        courseGrade="D+"
        courseCredits="64"
      />
      <CourseDetails
        courseName="Database System"
        courseGrade="B+"
        courseCredits="84"
      />
      <CourseDetails
        courseName="Antennas"
        courseGrade="A+"
        courseCredits="98"
      />
      <CourseDetails
        courseName="Machine learning"
        courseGrade="B"
        courseCredits="80"
      />
      <SemGpa semGPA="2.84" />
    </div>
  );
};

export default Courses;
