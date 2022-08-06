import React from 'react'


const Invoicesort = ({invoice, setModalState})=> {
  const clickHandler = (invoice) => {
    
    setModalState({status: true, current: invoice});
  }
  return (
    <tr onClick={()=>clickHandler(invoice)}>
            <td>{invoice.name}</td>
            <td>{invoice.billNo}</td>
            <td>{invoice.netAmount}</td>
            <td>MonthYear</td>
            <td>when</td>
            <td>billDate</td>
            <td>{invoice.status}</td>
    </tr>
  )
}



export default Invoicesort