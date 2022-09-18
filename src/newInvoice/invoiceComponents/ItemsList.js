import React from 'react'
import styled from 'styled-components'
import ItemList from '../../Products.json'
import { useState } from 'react'
import Item from '../../Invoices/Items'

const ItemsList = () => {
  const [items , setItems]=useState([]);

  let totalAmount=0;
  let total = items.map((item)=>totalAmount + (+item[0].price));
  
  const sum =(totalAmount,num)=>{ return totalAmount=totalAmount+num;}

  console.log(totalAmount)

  const onChange=(e)=>{
   
    setItems([...items,ItemList.filter((item)=>e.target.value===item.productName)]);
      
  }
  
  return (
    <Main className="itemList">
        <table className="itemListAdded">
            <thead>
              <tr>
                <td className="toAll head">ITEMS</td>
                <td className="toAll head">DESCRIPTION</td>
                <td className="toAll head">QUANTITY</td>
                <td className="toAll head">PRICE</td>
                {/* <td className="toAll head">TAX</td> */}
                <td className="toAll head">AMOUNT</td>
              </tr>
            </thead>
            
            <tbody>
              {items.map((item,index)=><Item key={index} lineItem={item[0]}/>)}
              <select onChange={onChange} id="dropdown">
                   {ItemList.map((item,index)=><option key={index} value={item.productName}>{item.productName}</option>)}
              </select>
            
            </tbody>
          </table>
          <table className="lastListTable">
               
               <thead>
                   <tr>
                       <td className="toAll head" >GROSS AMOUNT</td>
                       <td className="toAll head">GST AMOUNT</td>
                       <td className="toAll head">NET AMOUNT</td>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td className="toAll">{total.reduce(sum ,0)}</td>
                       <td className="toAll">
                           gstAmount
                       </td>
                       <td className="toAll">NetAmount </td>
                   </tr>
               </tbody>
               <tfoot><button className=" payButton">PAY </button></tfoot>
           </table>
           

    </Main>
  )
}
 
const Main = styled.div`

 height: 100%;
 
 display: flex;
 flex-direction: column;
 padding: 10px;

 & .toAll{
     padding:.2em;

 }
 & .head{
  font-weight:bolder;
 }


& .itemList{
  
   height:50vh;
   position: relative;
 }
& .lastListTable{
  /* margin-bottom:0; */
  position:absolute;
  bottom:1em;
  right:0;
  padding:2rem;
  text-align:center;
  //stick it to bottom
}
& .payButton{
  left:0;
  /* position:absolute; */
  padding:.5rem;
  text-align:center;
}

`

export default ItemsList