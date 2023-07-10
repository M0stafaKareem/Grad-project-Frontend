import { advSubject, stuSubject } from "./datatype";

export class FetchDataService {
  private privID: number | null = null;

  private studentData: {
    Id?: number;
    Name?: string;
    Photo?: Blob;
    Level?: string;
    GPA?: number;
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

  /* public getStudentdata = async () => {
    let url = "http://127.0.0.1:8000/api/data/" + this.studentID;
    await fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        this.mainData.studentName = jsonData[0].user_name;
        this.mainData.studentLevel = jsonData[0].student_level;
        this.mainData.studentGPA = jsonData[0].student_gpa;
      })
      .catch((error) => {
        console.error(error);
      });
  }; */

  private getStudentImage = async () => {
    let url = "http://127.0.0.1:8000/api/student/Image/" + this.studentData.Id;
    await fetch(url)
      .then((response) => response.blob())
      .then((jsonData) => {
        this.studentData.Photo = jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
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
    await this.getStudentImage();
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
    let url = "http://127.0.0.1:8000/api/advSubject/subjectStatus";
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

  public getStudentGradesPageData = async (studentID: number) => {
    let url = "http://127.0.0.1:8000/api/advisor/studentData/" + studentID;
    return fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        return jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
}
