import React, { useEffect, useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate=useNavigate();
  const [formData, setFromData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const [response, setResponse] = useState("");
  useEffect(() => {
    const baseUrl="https://handson4-server.onrender.com/Register"
    // const baseUrl="http://localhost:2023/Register"
    axios.post(baseUrl, formData).then((res) => {
      setResponse(res.data);
      console.log(res.data);
    });
    setFromData({
      name: "",
      phoneNo: "",
      email: "",
      password: "",
    });
  }, [submit]);
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (
      formData.name != 0 &&
      formData.email != 0 &&
      formData.password != 0 &&
      formData.phoneNo != 0
    ) {
      setSubmit(!submit);
    } else {
      setResponse({ message: "fill the form" });
    }
  };
  const tostNotify=()=> toast("Registration successfull");
  
  response.token&&(function goToDashboard  (){
    tostNotify();
    setTimeout(()=>{
      console.log("settimeout")
      navigate("/Login");
    },2000) 
  }
  )();
  return (
    <>
    
    <div className="registration">
      <div className="registerContainer">
      <img className="registerImg" src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-blogging_516790-1481.jpg?w=2000" alt="not found" />
        
        <form className="register">
          <h1 className="registerHeading">Registration Page</h1>
          <fieldset>
            <legend>Name</legend>
            {/* Name, Phone, Email and Password */}
            {/* <PersonIcon/> */}
            <PersonOutlineOutlinedIcon/>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              required
            />
          </fieldset>
          <fieldset>
            <legend>Phone number</legend>
            {/* Name, Phone, Email and Password */}
            {/* <LocalPhoneIcon/> */}
            <LocalPhoneOutlinedIcon/>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Enter your Phone number"
              required
            />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            {/* Name, Phone, Email and Password */}
            {/* <EmailIcon/> */}
            <EmailOutlinedIcon/>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              required
              />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            {/* Name, Phone, Email and Password */}
            {/* <LockIcon/> */}
            <LockOutlinedIcon/>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              required
            />
          </fieldset>
          {/* <div className="message">Your are already registered</div> */}
          <div className="message">{response && response.message}</div>
          <button className="registerButton" onClick={handleClick}>
            Submit
          </button>
          <div className="goto" >
            go to <Link className="link" to={"/Login"}>Login page</Link>
          </div>
        </form>
      </div>
    </div>
        
    <ToastContainer 
    position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" />
             
              </>

  );
};

export default Register;
