import React , {useState} from 'react'
import styled from 'styled-components'
import ReactModal  from 'react-modal'
import NewInvoice from '../../newInvoice/NewInvoice'



const Subnavbar = (props) => {
  const [modalState , setModalState]=useState({status:false , current:null})
 
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width:'50%',
      height:'98vh',
      padding:'0'
    },
    overlay: {
      "background": "rgba(0, 0, 0, 0.6)",
      "backdrop-filter": "blur(4px)",
    },
  };
  const overlayCloseBefore = () => {
    setModalState({...modalState, status: false});
  }
  const overlayCloseAfter = () => {
    setModalState({...modalState, current: null});
  }
  const createInvoice = ()=> {
    /** 
     @todo: Create Invoice
    **/
   console.warn("Create Invoice function")
  
  }

 

  return (
    <Main>

        <div className="subItem span">{props.currentValue}</div>
        <div className="subItem">
         
          {props.generater?
           <div onClick={ ()=>{setModalState({...modalState, status: true})}} className="button buttonDisplay">+NewInvoice</div>
          :<div></div>
        }
           {/* <div onClick={ ()=>{setModalState({...modalState, status: true})}} className="button buttonDisplay">+NewInvoice</div> */}
           

           <ReactModal 
           onRequestClose={overlayCloseBefore}
           onAfterClose={overlayCloseAfter}
           isOpen={modalState.status}
           contentLabel="Current Invoice"
           style={customStyles}
          >
          <NewInvoice/>
         
           </ReactModal>
            </div>
        
    </Main>
  )
}

const Main =styled.div`
min-width:80vw;

display:flex;
justify-content:space-between;
align-items:center;
& .button{
    background-color:#d4e3fa;
    border-radius:10%;
    color:#2f80fa;
    padding-left:1em;
    padding-right:1em;
    padding-top:.4em;
    padding-bottom: .4em;
    cursor: pointer;
    &:hover {
      background-color: #d4f0ff;
    } 
}
& .span{
    font-weight:bolder;
    font-size:2em;
    color:#474747;
}
& .subItem{
    padding: .4em 0;

}
 
`
export default Subnavbar