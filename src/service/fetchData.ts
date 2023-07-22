import { advSubject, stuSubject } from "./datatype";

export class FetchDataService {
  private privID: number | null = null;

  private studentData: {
    Id?: number;
    Name?: string;
    Photo?: Blob;
    Level?: string;
    GPA?: number;
    acceptedHours?: number;
    passed_subjects?: number;
    subjecs: stuSubject[];
  } = {
    subjecs: [],
  };

  private advisorData: {
    Id?: number;
    Name?: string;
    Photo?: Blob;
    Level?: string;
    subjecs: advSubject[];
  } = {
    subjecs: [],
  };

  public authenticate = async (
    username: string,
    password: string,
    setIsLoading: (state: boolean) => void
  ) => {
    setIsLoading(true);
    let url = "http://127.0.0.1:8000/api/auth/" + username + "/" + password;
    await fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData != "Not A Registered User GO BACK") {
          this.privID = jsonData[0].priv_id;

          //student case
          if (this.privID == 1) {
            this.studentData.Id = jsonData[0].student_id;
            this.studentData.Name = jsonData[0].user_name;
            this.studentData.Level = "Level ".concat(jsonData[0].student_level);
            this.studentData.GPA = jsonData[0].student_gpa;
            this.studentData.passed_subjects = jsonData[0].passed_subjects;
            this.studentData.acceptedHours = jsonData[0].accepted_hours;
          }

          //advisor case
          if (this.privID == 2) {
            this.advisorData.Id = jsonData[0].advisor_id;
            this.advisorData.Name = jsonData[0].user_name;
            this.advisorData.Level = "Advisor";
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoading(false);
    return this.privID;
  };

  public getStudentImage = async (studentID: number) => {
    let url = "http://127.0.0.1:8000/api/student/Image/" + studentID;
    try {
      const response = await fetch(url);
      const blobData = await response.blob();
      this.studentData.Photo = blobData;
      return blobData;
    } catch (error) {
      console.error(error);
    }
  };

  private getAdvisorImage = async () => {
    let url = "http://127.0.0.1:8000/api/advisor/Image/" + this.advisorData.Id;
    await fetch(url)
      .then((response) => response.blob())
      .then((jsonData) => {
        this.advisorData.Photo = jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  public getStudentData = async () => {
    await this.getStudentImage(this.studentData.Id!);
    await this.getStuSubjects(this.studentData.Id);

    return this.studentData;
  };

  public getAdvisorData = async () => {
    await this.getAdvisorImage();
    await this.getAdvSubjects();

    return this.advisorData;
  };

  public getStuSubjects = async (studentId?: number) => {
    let url = "http://127.0.0.1:8000/api/student/subject/" + studentId;
    return fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        this.studentData.subjecs = jsonData;
        return jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  public getAdvSubjects = async () => {
    let url = "http://127.0.0.1:8000/api/advisor/subject/subjectStatus";
    return fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        this.advisorData.subjecs = jsonData;
        return jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  private studentGradesPageData: {
    photo?: Blob;
    data?: any;
  } = {};

  private getStudentGradesData = async (studentID: number) => {
    let url = "http://127.0.0.1:8000/api/advisor/studentData/" + studentID;
    return fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        this.studentGradesPageData.data = jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  public async getStudentGradesPageData(studentID: number) {
    await this.getStudentGradesData(studentID);
    this.studentGradesPageData.photo = await this.getStudentImage(studentID);

    return this.studentGradesPageData;
  }

  public getSubjectGradesPageData = async (
    subjectCode: string,
    semester: string,
    year: string
  ) => {
    let url =
      "http://127.0.0.1:8000/api/advisor/subjectGrades/getGrades/" +
      subjectCode +
      "/" +
      semester +
      "/" +
      year;
    return fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        return jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  public getStudentRequestedSubjects = async (studentID: number) => {
    let url =
      "http://127.0.0.1:8000/api/student/enrolment/getRequests/" + studentID;
    return fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        return jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  public getStudentGrades = async (
    studentID: number,
    Level: number | string = ""
  ) => {
    let url = Level
      ? "http://127.0.0.1:8000/api/student/grades/" + studentID + "/" + Level
      : "http://127.0.0.1:8000/api/student/grades/" + studentID;
    return fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        return jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  public getSubjectGraphData = async (
    subjectCode: string,
    semester: string,
    year: string
  ) => {
    let url =
      "http://127.0.0.1:8000/api/graph/bySubject/" +
      subjectCode +
      "/" +
      year +
      "/" +
      semester;
    return fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        return jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  public getStudentsGraphData = async (semester: string, year: string) => {
    let url =
      "http://127.0.0.1:8000/api/graph/byStudents/" + year + "/" + semester;
    return fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        return jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  public getAdvisorDashboardData = async () => {
    let url = "http://127.0.0.1:8000/api/advisor/enrolment/getRequestCount";
    return fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        return jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  public async getApplicationsData() {
    let url = "http://127.0.0.1:8000/api/advisor/enrolment/getStudentsRequests";
    return fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        if (Array.isArray(jsonData) && jsonData.length > 0) {
          return Promise.all(
            jsonData.map(async (item) => {
              const id = item.student_id; // Assuming student_id is a property in the object
              const photo = await this.getStudentImage(id);
              return { ...item, studentPhoto: photo };
            })
          );
        } else {
          throw new Error("No data or invalid data format in the response");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
