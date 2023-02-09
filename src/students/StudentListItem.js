import React from "react";
import styled from "styled-components";

const StudentItemContainer = styled.div`
  box-shadow: 0 4px 8px grey;
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
  position: relative;
  background: white;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
`;
const Button = styled.button`
  font-size: 15px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`;
const CompleteButton = styled(Button)`
  display: inline-block;
  background-color: #7fcd68;
`;
const WithdrawButton = styled(Button)`
  display: inline-block;
  background-color: #24bfd6;
  margin-left: 8px;
`;

const StudentListItem = ({ student, onRemovePressed, onCompletePressed }) => (
  <StudentItemContainer>
    <h2>{student.name}</h2>
    <h4>Email: {student.email}</h4>
    <h4>Essay subject: {student.subject}</h4>
    <ButtonsContainer>
      {student.hasCompleted ? null : (
        <CompleteButton
          onClick={() => onCompletePressed(student.id)}
          className="completed-button"
        >
          Mark As Completed
        </CompleteButton>
      )}
      <WithdrawButton
        onClick={() => onRemovePressed(student.id)}
        className="remove-button"
      >
        Withdraw
      </WithdrawButton>
    </ButtonsContainer>
  </StudentItemContainer>
);

export default StudentListItem;
