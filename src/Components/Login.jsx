import React, { useEffect, useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import img from "../assets/img.jpg";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const [response, setResponse] = useState("");
  useEffect(() => {
  //  const baseUrl="http://localhost:2023/Login"
   const baseUrl="https://handson4-server.onrender.com/Login"
    
    axios.post(baseUrl, formData).then((res) => {
      setResponse(res.data);
      console.log(res.data);
    });
  }, [submit]);
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();

    if (
      formData.email != 0 &&
      formData.password != 0
    ) {
      setSubmit(!submit);
    
      // goToDashboard();
    } else {
      setResponse({ message: "fill the form" });
    }

  };
  const tostNotify=()=> toast("you are login in");
  
  response.token&&(function goToDashboard  (){
    tostNotify();
    setTimeout(()=>{
      setFromData({
        email: "",
        password: "",
      })
      localStorage.setItem("token", response.token);
      navigate("/Dashboard");
      
    },2000) 
  }
  )();
 
  return (
    <>
     
    <div className="registration">
     
        <div className="registerContainer loginContainer">
          <img className="registerImg" src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-blogging_516790-1481.jpg?w=2000" alt="not found" />
       

          <form className="register">
            <h1 className="registerHeading">Login Page</h1>
          
        
            <fieldset>
              <legend>Email</legend>
              {/* Email and Password */}
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
            <button className="registerButton " onClick={handleClick}>
              Login 
            </button>
            <div className="goto">
              go to <Link className="link" to={"/Register"}>Register page</Link>
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

export default Login;
