import React from "react";

import StudentList from "./students/StudentList";
import styled from "styled-components";
import Toolbar from "./students/Toolbar";

const AppContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  width: 100%;
  height: 100%;
  background: #eae8e8;
`;

const App = () => (
  <AppContainer>
    <Toolbar />
    <StudentList />
  </AppContainer>
);

export default App;
