export class gradesCalculator {
  public getLetteredScore(
    totalMarks: number | null,
    isFailed: boolean = false
  ) {
    const letterScore = totalMarks
      ? totalMarks >= 97 && !isFailed
        ? { letter: "A+", points: 4.3 }
        : totalMarks >= 93 && !isFailed
        ? { letter: "A", points: 4 }
        : totalMarks >= 89 && !isFailed
        ? { letter: "A-", points: 3.7 }
        : totalMarks >= 84
        ? { letter: "B+", points: 3.3 }
        : totalMarks >= 80
        ? { letter: "B", points: 3 }
        : totalMarks >= 76
        ? { letter: "B-", points: 2.7 }
        : totalMarks >= 73
        ? { letter: "C+", points: 2.3 }
        : totalMarks >= 70
        ? { letter: "C", points: 2 }
        : totalMarks >= 67
        ? { letter: "C-", points: 1.7 }
        : totalMarks >= 64
        ? { letter: "D+", points: 1.3 }
        : totalMarks >= 60
        ? { letter: "D", points: 1 }
        : { letter: "F", points: 0 }
      : { letter: null, points: null };

    return letterScore;
  }

  public getCoursePoints(
    totalMarks: number | null,
    courseCreditHours: number,
    isFailed: boolean = false
  ) {
    const points = totalMarks
      ? courseCreditHours * this.getLetteredScore(totalMarks, isFailed).points!
      : null;
    return points;
  }

  public getCGPA(
    gradesArray: [
      {
        courseGrades: number | null;
        courseCreditHours: number;
        isFailed?: boolean;
      }
    ],
    previousGPA: number = 0,
    previousAcceptedHours: number = 0
  ) {
    let totalPoints: number = previousAcceptedHours * previousGPA;
    let CGPA: number;
    let totalHours: number = previousAcceptedHours;

    gradesArray.forEach((course) => {
      if (course.courseGrades) {
        totalHours += course.courseCreditHours;
        totalPoints += this.getCoursePoints(
          course.courseGrades,
          course.courseCreditHours,
          course.isFailed
        )!;
      }

      CGPA = totalPoints / totalHours;
      return CGPA;
    });
  }
}
