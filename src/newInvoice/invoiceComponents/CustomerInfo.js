import React from 'react'
import styled from 'styled-components'

function CustomerInfo() {
  return (
    <Main >
      <div className="custmerInfo">
        <div className="personalInfoCustomer">
          <div className="heading">Name</div>
          <div>Name here </div>
          <div className="heading">Mobile Number</div>
          <div>numbere here </div>
          <div className="heading" >Email id </div>
          <div>xxxxx@gmail.com</div>
        </div>
        <div className="invoiceInfo">
          <div className="heading">Invoice no.</div>
          <div> in number here</div>
          <div className="heading">Issue Date</div>
          <div>dd/mm/yy</div>
          <div className="heading">Due Date</div>
          <div>dd/mm/yy</div>
        </div>
      </div>
    </Main>
  )
}

const Main = styled.div`
& .custmerInfo{
  padding:1%;
  border-bottom:2px solid grey;
   height:20vh;
   display:flex;
   justify-content:space-between;
 }
 & .personalInfoCustomer{
     padding-bottom:2%;
     width:30%;
     height:20vh;
     display:flex;
   flex-direction:column;
   justify-content:space-evenly;
     
 }

 & .invoiceInfo{
  padding-bottom:2%;
   width:30%;
   height:20vh;
   text-align:end;
   display:flex;
   flex-direction:column;
   justify-content:space-evenly;
 }

 & .heading{
   font-weight:bolder;
 }

`

export default CustomerInfo