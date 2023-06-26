export class PushDataService {
  public registerSubjects = async (udpatingData: {}) => {
    const url = "http://127.0.0.1:8000/api/studentRequest";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(udpatingData),
      headers: { "Content-Type": "application/json" },
    });
  };

  public changeCourseState = async (coursesData: {}) => {
    const url = "http://127.0.0.1:8000/api/subject/updateStatus";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(coursesData),
      headers: { "Content-Type": "application/json" },
    });
  };

  public assignCourseGrades = async (
    studentId: number,
    subjectCode: string,
    grade: number,
    score: string,
    courseState: string
  ) => {
    const url =
      "http://127.0.0.1:8000/api/enrolment/insertGrades/" +
      studentId +
      subjectCode +
      grade +
      score +
      courseState;
    await fetch(url, {
      method: "PUT",
    });
  };
}
