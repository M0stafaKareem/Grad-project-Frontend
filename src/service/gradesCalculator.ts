export class gradesCalculator {
  public getLetteredScore(totalMarks: number, isFailed: boolean = false) {
    const letterScore =
      totalMarks >= 97 && !isFailed
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
        : { letter: "F", points: 0 };

    return letterScore;
  }

  private getCoursePoints(
    totalMarks: number,
    courseCreditHours: number,
    isFailed: boolean = false
  ) {
    const points =
      courseCreditHours * this.getLetteredScore(totalMarks, isFailed).points;
    return points;
  }

  public getCGPA(
    gradesArray: [
      { courseGrades: number; courseCreditHours: number; isFailed?: boolean }
    ]
  ) {
    let totalPoints: number;
    let CGPA: number;
    let totalHours: number;

    gradesArray.forEach((course) => {
      totalHours += course.courseCreditHours;
      totalPoints += this.getCoursePoints(
        course.courseGrades,
        course.courseCreditHours,
        course.isFailed
      );

      CGPA = totalPoints / totalHours;
      return CGPA;
    });
  }
}
