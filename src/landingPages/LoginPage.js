import React from "react";
import Styled from "styled-components";
import signUpImg from "./assests/Receipt.gif";
// import { useState ,useNavigate} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate();
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
          <Link to="/Defaulthome">
          <button >Login</button>
          </Link>
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
    color:rgb(39, 38, 38) !important;
    


}
/* left container here */
.leftContainer{
    
    width:40%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    margin:1rem;
  
    
}

.heading{
    font-size:4rem;
    font-weight:bolder;
    margin:1rem;
    margin-top:0;
     
}

.appSlogan{
    font-size:2rem;
    padding:20px;
    height:3rem;
    margin-bottom:20px;
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
    width:75%;
    margin:1rem;
}
label{
    margin-bottom:.5rem;
    min-width:100px;
    display:flex;
    align-items:center; 
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
input{
  padding:10px;
  border-radius:5px;
  border:1px solid grey;
  width:100%;
}

button{
  border:none;
  width:100%;
  background:grey;
  padding:10px 40px ;
}
 
@media (max-width:600px){
  .heading{
    font-size:3rem;
  }
  .leftContainer{
    width:100%;
    display:flex;
  }
  .rightContainer{
    display:none;
  }
  .appSlogan{
    font-size:1.5rem;
    padding:1rem;
    /* height:3rem; */
    margin-bottom:20px;
}
}
@media (max-width:1024px){
  .appSlogan{
    height:auto;
  }
}



`;

export default SignUp;
