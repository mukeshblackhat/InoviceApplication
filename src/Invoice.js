import React from "react";
import Styled from "styled-components";
import Item from './Invoices/Items'

const Invoice = ({invoice}) => {
  return (
    <Main>
      <div className="header">
        <div className="toAll invoice">Invoice</div>
        <div className="toAll companyAddr">
          <div className="toAll">Taxadda</div>
          <div className="toAll">Dighi hills</div>
          <div className="toAll">Pune</div>
          <div className="toAll">India</div>
          <div className="toAll">411015</div>
        </div>
      </div>
      <div>
        <div className="toAll">BillTo: {invoice.name}</div>
        <div className="toAll">Invoice# :{invoice.billNo}</div>
        <div className="toAll">Date : {invoice.billDate}</div>
        <div className="toAll">Invoice Due Date:{invoice.dueDate}</div>
      </div>
        <div className="billItems">
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
             
              {invoice.lineItem.map((lineItem)=>(<Item key={lineItem._id} lineItem={lineItem}/>))}
            </tbody>
          </table>
            <div className="spacer"></div> 
            <div className="line"></div>
            <table>
               
                <thead>
                    <tr>
                        <td>Gross Amount</td>
                        <td>GST Amount</td>
                        <td>Net Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{invoice.grossAmount}</td>
                        <td>
                            {invoice.gstAmount}
                        </td>
                        <td>{invoice.netAmount} </td>
                    </tr>
                </tbody>
            </table>
        </div>
       
    </Main>
  );
};

const Main = Styled.div`
 height: 100%;
 
 display: flex;
 flex-direction: column;
 padding: 10px;

 & .toAll{
     padding:.2em;
 }

& .header{
    display:flex;

    & .invoice{
        width:50%;
        font-weight:bold;
        font-size:3rem;
        
    }
    & .companyAddr{
        width:50%;
        text-align:right;
    }
}


& .billItems{
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    &::before {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        width:100%;
        height:100%;
        border-top: 2px solid grey;
    }

    & .line{
        background-color:gray;
        height:2px;
    }
}
& table{
    width:100%;
   
    &thead{
        padding-top:.2em;
    }
    & tbody tr{
        align: baseline;
    }
}
& .spacer{
        flex: 1;
    }

   


`;
export default Invoice;
