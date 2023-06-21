import { advSubject, stuSubject } from "./datatype";

export class FetchDataService {
  private userID: number | null = null;
  private privID: number | null = null;

  private studentData: {
    Name?: string;
    Photo?: Blob;
    Level?: string;
    GPA?: number;
    subjecs: stuSubject[];
  } = {
    subjecs: [],
  };

  private advisorData: {
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
            this.userID = jsonData[0].student_id;
            this.studentData.Name = jsonData[0].user_name;
            this.studentData.Level = "Level ".concat(jsonData[0].student_level);
            this.studentData.GPA = jsonData[0].student_gpa;
          }

          //advisor case
          if (this.privID == 2) {
            this.userID = jsonData[0].advisor_id;
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
    let url = "http://127.0.0.1:8000/api/studentImage/" + this.userID;
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
    let url = "http://127.0.0.1:8000/api/advisorImage/" + this.userID;
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
    await this.getStuSubjects();

    return this.studentData;
  };

  public getAdvisorData = async () => {
    await this.getAdvisorImage();
    await this.getAdvSubjects();

    return this.advisorData;
  };

  private getStuSubjects = async () => {
    let url = "http://127.0.0.1:8000/api/stuSubject/" + this.userID;
    await fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        this.studentData.subjecs = jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  private getAdvSubjects = async () => {
    let url = "http://127.0.0.1:8000/api/advSubject/subjectStatus";
    await fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        this.advisorData.subjecs = jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
