import { useState } from "react";
import styled from "styled-components";
import "./global.css";
import {Navbar, SubNavbar, Headings, MainPage} from "./components";

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <Main>
      <div className="contianer">
        <div className="topHead">
          <Navbar className="navbar" />
          <SubNavbar />
          <Headings setCurrentTab={setCurrentTab} />
        </div>
        <div className="bottomPage">
          <MainPage currentTab={currentTab} />
        </div>
      </div>
    </Main>
  );
}

const Main = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  & .container {
    width: 80%;
  }
  & .topHead {
    height: 30vh;
    background-color: #e9ecea;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  & .bottomPage {
    max-width: 100vw;
    height: 70vh;
    background-color: #ffffff;
    padding-top: 1em;
  }
`;

export default App;