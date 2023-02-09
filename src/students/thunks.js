import {
  markStudentComplete,
  createStudent,
  loadStudentsFailure,
  loadStudentsInProgress,
  loadStudentsSuccess,
  removeStudent,
} from "./actions";

export const loadStudents = () => async (dispatch) => {
  try {
    dispatch(loadStudentsInProgress());
    const response = await fetch("http://localhost:8080/students-delay");
    const students = await response.json();
    dispatch(loadStudentsSuccess(students));
  } catch (error) {
    dispatch(loadStudentsFailure());
    dispatch(displayAlert(error));
  }
};

export const addStudentRequest = (student) => async (dispatch) => {
  try {
    const body = JSON.stringify({ student });
    const response = await fetch("http://localhost:8080/students", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });
    const studentJson = await response.json();
    dispatch(createStudent(studentJson));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const removeStudentRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/students/${id}`, {
      method: "delete",
    });
    const removedStudent = await response.json();
    dispatch(removeStudent(removedStudent));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const markStudentCompleteRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/students/${id}/completed`,
      {
        method: "post",
      }
    );
    const completedStudent = await response.json();
    dispatch(markStudentComplete(completedStudent));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const displayAlert = (text) => () => {
  console.log("in thunk");
  alert(text);
};
