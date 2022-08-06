import React from 'react'
import styled from 'styled-components'
import CompanyInfo from './invoiceComponents/CompanyInfo'
import CustomerInfo from './invoiceComponents/CustomerInfo'
import ItemsList from './invoiceComponents/ItemsList'
import TaxAndTotal from './invoiceComponents/TaxAndTotal'

const NewInvoice = () => {
  return (
    <Main>
       <div className="container">
         
          <CompanyInfo/>
          <CustomerInfo/>
          <ItemsList/>
          <TaxAndTotal/>
        
       </div> 
    </Main>
  )
}
 const Main =styled.div`

 /* width:100%;
 height:100%;
  */
 
 & .container{
  
   /* background-color:red; */
 }


 & .itemList{
  height:40vh;
 }

 & .taxAndTotal{
  height:20%;
 }



 `

 
export default NewInvoice