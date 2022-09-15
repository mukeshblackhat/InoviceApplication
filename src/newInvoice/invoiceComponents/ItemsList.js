import React from 'react'
import styled from 'styled-components'

const ItemsList = () => {
  const onClick=()=>{
    // to make the add item list here 
  }
  return (
    <Main className="itemList">
        <table>
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
             <button onClick={onClick}>+</button>
              {/* {invoice.lineItem.map((lineItem)=>(<Item key={lineItem._id} lineItem={lineItem}/>))} */}
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
  
   height:40%;
 }

`

export default ItemsList