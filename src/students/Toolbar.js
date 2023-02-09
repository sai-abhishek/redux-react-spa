import styled from "styled-components";

const ToolbarContainer = styled.div`
  background: #3f51b5;
  color: #fff;
  font-weight: 400;
  height: 64px;
  ${
    "" /* left: 0;
  top: 0;
  position: fixed; */
  }
  width: 100%;
  z-index: 2;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
`;

const TitleContainer = styled.div`
  display: inline-block;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: 5%;
  justify-content: start;
`;

const Toolbar = () => (
  <ToolbarContainer>
    <TitleContainer>
      <h2>Student Essay Competition Tracker</h2>
    </TitleContainer>
  </ToolbarContainer>
);
export default Toolbar;
