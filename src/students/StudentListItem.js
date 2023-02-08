import React from "react";
// import "./StudentListItem.css";

const StudentListItem = ({ student, onRemovePressed, onCompletePressed }) => (
  <div className="student-item-container">
    <h2>{student.name}</h2>
    <h4>Email: {student.email}</h4>
    <h4>Essay subject: {student.subject}</h4>
    <div className="buttons-container">
      {student.hasCompleted ? null : (
        <button
          onClick={() => onCompletePressed(student.id)}
          className="completed-button"
        >
          Mark As Completed
        </button>
      )}
      <button
        onClick={() => onRemovePressed(student.id)}
        className="remove-button"
      >
        Withdraw
      </button>
    </div>
  </div>
);

export default StudentListItem;
