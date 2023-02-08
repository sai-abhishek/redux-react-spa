import { createSelector } from "reselect";

export const getStudents = (state) => state.students.data;
export const getStudentsLoading = (state) => state.students.isLoading;

export const getIncompleteStudents = createSelector(getStudents, (students) =>
  students.filter((student) => !student.hasCompleted)
);
