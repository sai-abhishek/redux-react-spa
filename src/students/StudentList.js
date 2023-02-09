import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewStudentForm from "./NewStudentForm";
import StudentListItem from "./StudentListItem";
import {
  markStudentCompleteRequest,
  displayAlert,
  loadStudents,
  removeStudentRequest,
} from "./thunks";
import { getStudents, getStudentsLoading } from "./selectors";
import styled from "styled-components";

const StudentListContainer = styled.div`
  max-width: 750px;
  margin: auto;
`;

const StudentList = ({
  students = [],
  onRemovePressed,
  onCompletePressed,
  isLoading,
  startLoadingStudents,
}) => {
  useEffect(() => {
    startLoadingStudents();
  }, []);

  const loading = <div>Loading students...</div>;
  const content = (
    <StudentListContainer>
      <NewStudentForm />
      {students.map((student) => (
        <StudentListItem
          key={student.id}
          student={student}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
    </StudentListContainer>
  );

  return isLoading ? loading : content;
};

const mapStateToProps = (state) => ({
  students: getStudents(state),
  isLoading: getStudentsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingStudents: () => dispatch(loadStudents()),
  onRemovePressed: (id) => dispatch(removeStudentRequest(id)),
  onCompletePressed: (id) => dispatch(markStudentCompleteRequest(id)),
  onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
