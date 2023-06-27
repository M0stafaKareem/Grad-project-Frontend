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
  grade: number;
}

export interface advSubject extends Subject {
  enrolment_state: null;
  grade: null;
}
