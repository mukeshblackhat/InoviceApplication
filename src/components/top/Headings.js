import styled from 'styled-components'

const Headings = ({setCurrentTab}) => {

  const changeTab = (e) => {
    setCurrentTab(+e.target.id);
    Array.from(e.target.parentNode.children).forEach(element => {
      element.classList.remove("bottom")
    });
    e.target.classList.add("bottom")
  }

  return (
    <Main>
        <div className="allSubHooks">
          <div className="bottom sub_items" id="0" onClick= {changeTab}>All Invoices</div>
          <div className="sub_items" id="1" onClick= {changeTab}>Drafts</div>
          <div className="sub_items" id="2" onClick= {changeTab}>Outstandings</div>
          <div className="sub_items" id="3" onClick= {changeTab}>Past Due</div>
          <div className="sub_items" id="4" onClick= {changeTab}>Paid</div>
        </div>
        <div>
         <div className="sub_items timeButton">period:  <span className="span">May2020</span></div>
        </div>
    </Main>
  )
}

const Main = styled.div`
width:80vw;
display:flex;
justify-content:space-between;

& .allSubHooks{
    display:flex;
}
& .sub_items{
  
  padding-left:1em;
    padding-right:1em;
    padding-top:.4em;
    padding-bottom: .4em;

}
& .bottom{
    border-bottom:2px solid black;
    font-weight:bold;
}
& .timeButton{
    background-color:#f7fafa;
    border:1px solid #909191;
    border-radius:10px;;
}
& .span{
     font-weight:bold;
     
}


`

export default Headings