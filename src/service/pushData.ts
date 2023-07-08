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
    subjectCode: string,
    studentId: number,
    grade: number,
    score: string,
    courseState: string
  ) => {
    const url =
      "http://127.0.0.1:8000/api/enrolment/insertGrades/" +
      studentId +
      "/" +
      subjectCode +
      "/" +
      grade +
      "/" +
      score +
      "/" +
      courseState;
    await fetch(url, {
      method: "PUT",
    });
  };

  public async uploadXlsGradeFile(data: any) {
    const url = "http://127.0.0.1:8000/api/uploadCSV";
    await fetch(url, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("File upload failed");
        }
      })
      .then((data) => {
        console.log(data);
        // Perform additional tasks if needed
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
