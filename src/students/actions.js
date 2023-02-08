export const CREATE_STUDENT = "CREATE_STUDENT";
export const createStudent = (student) => ({
  type: CREATE_STUDENT,
  payload: { student },
});

export const REMOVE_STUDENT = "REMOVE_STUDENT";
export const removeStudent = (student) => ({
  type: REMOVE_STUDENT,
  payload: { student },
});

export const MARK_STUDENT_COMPLETE = "MARK_STUDENT_COMPLETE";
export const markStudentComplete = (student) => ({
  type: MARK_STUDENT_COMPLETE,
  payload: { student },
});

export const LOAD_STUDENTS_IN_PROGRESS = "LOAD_STUDENTS_IN_PROGRESS";
export const loadStudentsInProgress = () => ({
  type: LOAD_STUDENTS_IN_PROGRESS,
});

export const LOAD_STUDENTS_SUCCESS = "LOAD_STUDENTS_SUCCESS";
export const loadStudentsSuccess = (students) => ({
  type: LOAD_STUDENTS_SUCCESS,
  payload: { students },
});

export const LOAD_STUDENTS_FAILURE = "LOAD_STUDENTS_FAILURE";
export const loadStudentsFailure = () => ({
  type: LOAD_STUDENTS_FAILURE,
});
