export class PushDataService {
  public registerSubjects = async (udpatingData: {}) => {
    const url = "http://127.0.0.1:8000/api/student/enrolmentState";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(udpatingData),
      headers: { "Content-Type": "application/json" },
    });
  };

  public changeCourseState = async (coursesData: {}) => {
    const url = "http://127.0.0.1:8000/api/subject/update/SubjectStatus";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(coursesData),
      headers: { "Content-Type": "application/json" },
    });
  };

  public assignCourseGrades = async (inputData: {}) => {
    const url = "http://127.0.0.1:8000/api/advisor/studentGrades/insertGrade";
    await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ data: inputData }),
      headers: { "Content-Type": "application/json" },
    });
  };

  public async uploadXlsGradeFile(data: any) {
    const url = "http://127.0.0.1:8000/api/advisor/uploadCSV";
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

  public async updateRegistrationStatus(
    submition: boolean,
    dropablitiy: boolean,
    year: string,
    semester: string
  ) {
    const url =
      "http://127.0.0.1:8000/api/subject/updateRegestrationStatus/" +
      submition +
      "/" +
      dropablitiy +
      "/" +
      year +
      "/" +
      semester;
    await fetch(url, {
      method: "POST",
    });
  }
}
