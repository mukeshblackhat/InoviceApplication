import React from 'react'
import styled from 'styled-components'
import ItemList from '../../Products.json'
import { useState } from 'react'
import Item from '../../Invoices/Items'

const ItemsList = () => {
  const [items , setItems]=useState([]);
  // let total=
  // console.log(total)

  const onChange=(e)=>{
   
    setItems([...items,ItemList.filter((item)=>e.target.value===item.productName)]);
    
  }
  console.log(items)
  return (
    <Main className="itemList">
        <table className="itemListAdded">
            <thead>
              <tr>
                <td className="toAll">ITEMS</td>
                <td className="toAll">DESCRIPTION</td>
                <td className="toAll">QUANTITY</td>
                <td className="toAll">PRICE</td>
                <td className="toAll">TAX</td>
                <td className="toAll">AMOUNT</td>
              </tr>
            </thead>
            
            <tbody>
              {items.map((item,index)=><Item key={index} lineItem={item[0]}/>)}
              <select onChange={onChange} id="dropdown">
                   {ItemList.map((item,index)=><option key={index} value={item.productName}>{item.productName}</option>)}
              </select>
            
            </tbody>
          </table>
          <table className="lastList">
               
               <thead>
                   <tr>
                       <td>Gross Amount</td>
                       <td>GST Amount</td>
                       <td>Net Amount</td>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>total</td>
                       <td>
                           gstAmount
                       </td>
                       <td>NetAmount </td>
                   </tr>
               </tbody>
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


& .itemList{
  
   height:50vh;
   position: relative;
 }
& .lastList{
  /* margin-bottom:0; */
  position:absolute;
  bottom:0;
  //stick it to bottom
}

`

export default ItemsList