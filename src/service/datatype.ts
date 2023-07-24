interface Subject {
  subject_level: number;
  Term: number;
  subject_code: string;
  subject_name: string;
  subject_hours: number;
  status: string;
}

export interface stuSubject extends Subject {
  enrolment_state: string;
  prerequisite1: null | string;
  prerequisite2: null | string;
  grade: number;
}

export interface advSubject extends Subject {
  enrolment_state: null;
  prerequisite1: null;
  prerequisite2: null;
  grade: null;
}
