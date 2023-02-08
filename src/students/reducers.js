import {
  MARK_STUDENT_COMPLETE,
  CREATE_STUDENT,
  LOAD_STUDENTS_FAILURE,
  LOAD_STUDENTS_IN_PROGRESS,
  LOAD_STUDENTS_SUCCESS,
  REMOVE_STUDENT,
} from "./actions";

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_STUDENTS_IN_PROGRESS:
      return { ...state, isLoading: true };
    case LOAD_STUDENTS_SUCCESS:
    case LOAD_STUDENTS_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
const initialState = { data: [], isLoading: false };

export const students = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_STUDENT: {
      const { student } = payload;
      return {
        ...state,
        data: state.data.concat(student),
      };
    }
    case REMOVE_STUDENT: {
      const { student: studentToRemove } = payload;
      return {
        ...state,
        data: state.data.filter((student) => student.id !== studentToRemove.id),
      };
    }
    case MARK_STUDENT_COMPLETE: {
      const { student: completedStudent } = payload;
      return {
        ...state,
        data: state.data.map((student) => {
          if (student.id === completedStudent.id) {
            return completedStudent;
          }
          return student;
        }),
      };
    }
    case LOAD_STUDENTS_SUCCESS: {
      const { students } = payload;
      return { ...state, isLoading: false, data: students };
    }
    case LOAD_STUDENTS_IN_PROGRESS:
      return { ...state, isLoading: true };
    case LOAD_STUDENTS_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
