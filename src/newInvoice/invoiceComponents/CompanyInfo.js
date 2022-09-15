import React from 'react'
import styled from "styled-components"

const CompanyInfo = () => {
  return (
    <Main >
      <div className="companyInfo">
      <div className='companyLogo'>Company Logo</div>
      <div className='companyAddr'>
        {/* <input className="companyName" type="text" placeholder="company name" /> */}
        <div className="companyName"> Your Company Name</div>
        <div className="adderres">Your Business Adderess</div>
        <div className="city">City</div>
        <div className="country">Country</div>
        <div className="postal">Postal</div>
      </div>
      </div>
    </Main>
  )
}

const Main = styled.div`
 & .companyInfo{
   border-bottom:2px solid grey;
   height:20vh;
   display:flex;
   flex-direction:row;
   justify-content:space-between;

 }

 & .companyLogo{
  
   width:30%;
   text-align:center;
   display:flex;
   height:20vh; 
   justify-content:center;
   align-items:center;
   font-size:200%;
   
   
 }
 & .companyAddr{
   width:30%;
   height:20vh;
 
   text-align:end;
   padding-right:1%;
   display:flex;
   flex-direction:column;
   justify-content:space-evenly;
   
 }
 & .companyName{
   font-weight:bolder;
   border:none;
   font-size:1.6rem;
   
  
 }

`
export default CompanyInfo