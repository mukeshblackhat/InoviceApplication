import React from "react";
import Styled from "styled-components";
import signUpImg from "./assests/Receipt.gif";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [type, setType] = useState("none");
  console.log(type);
  const navigate = useNavigate();

  const sellerHandler = () => {
    setType("seller");
  };

  const buyerHandler = () => {
    setType("buyer");
  };

  let choose = (
    <>
      {" "}
      <div className="twoButtons">
        <button onClick={sellerHandler} className="sellerButton">
          Seller
        </button>
        <button onClick={buyerHandler} className="buyerButton">
          Buyer
        </button>
      </div>
      <div
        onClick={() => {
          navigate("/login");
        }}
        className="already highLogin"
      >
        already have account LogIn
      </div>{" "}
    </>
  );

  let seller = (
    <div className="sellerForm">
      <form>
        <div className="companyName input">
          <label>Company Name</label>
          <input type="text" placeholder="company name" />
        </div>
        <div className="gstinNumber input">
          <label>GSTIN Number</label>
          <input type="text" placeholder="GSTIN No." />
        </div>
        <div className="emailId input ">
          <label>Email Id</label>
          <input type="text" placeholder="company@gmail.com" />
        </div>
        <div className="contactNumber input ">
          <label>Contact Number</label>
          <input type="text" placeholder="+919XXXXXXX" />
        </div>
        <div className="adderess input">
          <label>Company Adderess</label>
          <input type="text" placeholder="company adderess" />
        </div>
        <div className="input">
          <Link to="/home">
            <input type="submit" />
          </Link>
        </div>
      </form>
    </div>
  );

  let buyer = (
    <div className="sellerForm">
      <form>
        <div className="companyName input">
          <label>Name</label>
          <input type="text" placeholder="name" />
        </div>
        <div className="emailId input ">
          <label>Email Id</label>
          <input type="text" placeholder="your@gmail.com" />
        </div>
        <div className="contactNumber input ">
          <label>Contact Number</label>
          <input type="text" placeholder="+919XXXXXXX" />
        </div>
        <div className="adderess input  ">
          <label>Your Adderess</label>
          <input type="text" placeholder="your adderess" />
        </div>
        <div className="input">
          <Link to="/home">
            <input type="submit" />
          </Link>
        </div>
      </form>
    </div>
  );

  return (
    <Main>
      <div className="mainContainer">
        <div className="leftContainer">
          <div className="heading">Create Account</div>
          <div className="appSlogan">No more Paper No More Worries</div>
          {type === "seller" ? seller : type === "buyer" ? buyer : choose}
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
.highLogin:hover {
  font-weight:bolder;
}
/* left container here */
.leftContainer{
    
    width:40%;
    height:80%;
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
    height:5rem;
}

.appSlogan{
    font-size:2rem;
    padding:1rem;
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
    font-size:1.5rem;
    width:100%;

}
form{
  width:100%;
  font-size:1rem;
  
}
.input{
    display:flex;
    flex-direction:column;
    margin:1rem;
    font-size:1.5rem;
    width:100%;
}
label{
    margin-bottom:.5rem;
    width:100%;
    font-size:1rem;
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
Link{
  
  background:grey;
}




`;

export default SignUp;
