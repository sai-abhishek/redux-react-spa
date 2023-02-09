import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
// import "./NewStudentForm.css";
import { getStudents } from "./selectors";
import { addStudentRequest } from "./thunks";

const StudentFormContainer = styled.div`
  border-radius: 8px;
  margin: 10px;
  padding: 16px;
  box-shadow: 0 4px 8px grey;
  display: flex;
  flex-direction: column;
  background: white;
`;
const StudentInput = styled.input`
  font-size: 16px;
  padding: 8px;
  margin: 12px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
`;
const CreateStudentButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #7fcd68;
`;

const NewStudentForm = ({ students, onCreatePressed }) => {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    hasCompleted: false,
  };
  const [student, setStudent] = useState(initialState);

  return (
    <StudentFormContainer>
      <StudentInput
        type="text"
        placeholder="Student name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />
      <StudentInput
        type="email"
        placeholder="Email"
        value={student.email}
        onChange={(e) => setStudent({ ...student, email: e.target.value })}
      />
      <StudentInput
        type="text"
        placeholder="Essay subject"
        value={student.subject}
        onChange={(e) => setStudent({ ...student, subject: e.target.value })}
      />
      <ButtonsContainer>
        <CreateStudentButton
          onClick={() => {
            const isDuplicateSubject = students.some(
              (item) => item.subject === student.subject
            );
            if (!isDuplicateSubject) {
              onCreatePressed(student);
              setStudent(initialState);
            }
          }}
        >
          Create Student
        </CreateStudentButton>
      </ButtonsContainer>
    </StudentFormContainer>
  );
};

const mapStateToProps = (state) => ({
  students: getStudents(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (student) => dispatch(addStudentRequest(student)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewStudentForm);
