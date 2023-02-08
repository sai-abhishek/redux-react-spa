import React, { useState } from "react";
import { connect } from "react-redux";
// import "./NewStudentForm.css";
import { getStudents } from "./selectors";
import { addStudentRequest } from "./thunks";

const NewStudentForm = ({ students, onCreatePressed }) => {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    hasCompleted: false,
  };
  const [student, setStudent] = useState(initialState);

  return (
    <div className="new-student-form">
      <input
        className="new-student-input"
        type="text"
        placeholder="Student name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />
      <input
        className="new-student-input"
        type="email"
        placeholder="Email"
        value={student.email}
        onChange={(e) => setStudent({ ...student, email: e.target.value })}
      />
      <input
        className="new-student-input"
        type="text"
        placeholder="Essay subject"
        value={student.subject}
        onChange={(e) => setStudent({ ...student, subject: e.target.value })}
      />
      <div className="buttons-container">
        <button
          onClick={() => {
            const isDuplicateSubject = students.some(
              (item) => item.subject === student.subject
            );
            if (!isDuplicateSubject) {
              onCreatePressed(student);
              setStudent(initialState);
            }
          }}
          className="new-student-button"
        >
          Create Student
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  students: getStudents(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (student) => dispatch(addStudentRequest(student)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewStudentForm);
