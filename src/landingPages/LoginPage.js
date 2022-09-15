import React from "react";
import Styled from "styled-components";
import signUpImg from "./assests/Receipt.gif";
// import { useState ,useNavigate} from "react";
import {Link }from 'react-router-dom'

const SignUp = () => {
  



  return (
    <Main>
      <div className="mainContainer">
        <div className="leftContainer">
      
        <div className="appSlogan">No more Paper No More Worries</div>
        <div className="emailId input ">
          <label>Email Id</label>
          <input type="text" placeholder="your@gmail.com" />
        </div>
        <div className="emailId input ">
          <label>Password</label>
          <input type="password" placeholder="your password" />
        </div>
        <div className="input">
         
            <button  >Login</button>
        </div>
       
        </div>

        <div className="rightContainer">
          <div className="imgA">
            <img src={signUpImg} alt="sign up" />
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = Styled.div`

.mainContainer{
    
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    


}
/* left container here */
.leftContainer{
    
    width:40%;
    height:80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:1rem;
    overflow:hidden;
    
}

.heading{
    font-size:4rem;
  font-weight:bolder;
    margin:1rem;
    margin-top:0;
    height:5rem;
}

.appSlogan{
    font-size:2rem;
    padding:2rem;
    padding-top:0;
    height:3rem;
}
.twoButtons{
    height:5rem;
}
.sellerButton{
  font-size:1.5rem;
  font-weight:bold;
  color:white;
  margin:1rem;
  padding:0.4rem 1.8rem 0.4rem 1.8rem;

  border-radius:1rem;
  background:#7B7878;
  border:none;


}
.sellerButton:hover{
    box-shadow: 0 .8rem 6px -6px black;
}
.buyerButton{
  font-size:1.5rem;
  font-weight:bold;
  background:#7B7878;
  color:white;
  margin:1rem;
  padding:0.4rem 1.8rem 0.4rem 1.8rem;
  border-radius:1rem;
  border:none;

  
}
.buyerButton:hover{
    box-shadow: 0 .8rem 6px -6px black;
}
.already{
    height:3rem;
    padding-top:2rem;
  
 
}
.sellerForm{
    display:flex;
    justify-content:center;
    font-size:1.5rem;
    font-weight:bold;

}
.input{
    display:flex;
    flex-direction:column;
    margin:1rem;
}
label{
    margin-bottom:.5rem;
}

/* right container here  */
.rightContainer{
    width:40%;
    height:80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:1rem;
    overflow:hidden;
    position:relative;
}

 img{
    aspect-ratio:1;
    height:100%;
    width:100%;
}



`;

export default SignUp;
