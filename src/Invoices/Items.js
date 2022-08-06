import React from 'react'
import Styled from 'styled-components'

const Items = ({lineItem}) => {
   

  return (
    
        
              <tr >
                <td className="toAll">{1}</td>
                <td className="toAll">{lineItem.productName}</td>
                <td className="toAll">{lineItem.quantity}</td>
                <td className="toAll">{lineItem.price}</td>
                <td className="toAll">{lineItem.gstRate}</td>
                <td className="toAll">{lineItem.amount}</td>
              </tr>
        
   
  )
}

const tr = Styled.div`
 & .toAll{
     padding:.2em;
 }

`


export default Items