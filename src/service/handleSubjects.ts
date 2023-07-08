import { advSubject, stuSubject } from "./datatype";

export class Courses {
  constructor(courses: stuSubject | advSubject) {
    this.coursesArray = courses;
  }
  private coursesArray: stuSubject | advSubject;
  private leveledSubjects = [];

  private splitToLevels = (courses: []) => {
    const leveledCourses: any[] = [];
    courses.map((item) => {
      const { subject_level } = item;
      if (!leveledCourses[subject_level]) {
        leveledCourses[subject_level] = [];
      }

      leveledCourses[subject_level].push(item);
    });
    return leveledCourses;
  };

  private getStuRegisteredHours(courses: stuSubject[]) {
    let registeredHours = 0;
    courses.map((item) => {
      const { enrolment_state } = item;
      if (enrolment_state === "Requested") {
        registeredHours += item.subject_hours;
      }
    });
    return registeredHours;
  }

  private getMaxHoursToRegister(GPA: number) {
    let hours;
    GPA >= 3 ? (hours = "21") : GPA >= 2 ? (hours = "18") : (hours = "14");
    return hours;
  }
}
