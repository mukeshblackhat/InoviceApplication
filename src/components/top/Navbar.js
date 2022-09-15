import React from "react";
import styled from "styled-components";
import {   useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <div className="companyName">BillBook</div>
      <div className="spacer"></div>
      <div className="tabs">
        <div onClick={()=>navigate('/home')} className="home tab-item">Home</div>
        <div onClick={()=>navigate('/requests')} className="about tab-item">Requests</div>
        <div className="profile">
        {/* <div>alert</div> */}
      </div>
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
    padding:0 2% 0 2%;
  }
  & .profile {
      margin-left: 10px;
  }
`;

export default Navbar;
