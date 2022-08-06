import React from "react";
import styled from "styled-components";

const Navbar = () => {

  return (
    <Main>
      <div className="companyName">TaxAdda</div>
      <div className="spacer"></div>
      <div className="tabs">
        {/* <div className="home tab-item">Home</div>
        <div className="about tab-item">about</div>
        <div className="profile">
        <div>alert</div>
      </div> */}
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 80vw;
  padding:1em 0;
  display: flex;
  align-items: center;
    & .spacer {
        flex-grow: 1;
    }
  & .companyName {
    width: 20%;
    font-weight: bolder;
    font-size: xx-large;
    color: #b85ae6;
  }
  & .tabs {
    display: flex;
    justify-content: end;
    align-items:center;
  }
  & .tab-item {
    margin-left: 5%;
    font-weight: bold;
    font-size: 1.2em;
    color: #787777;
    text-shadow: black;
  }
  & .profile {
      margin-left: 10px;
  }
`;

export default Navbar;
