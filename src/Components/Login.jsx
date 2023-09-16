import React, { useEffect, useState } from "react";
import img from "../assets/img.jpg";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate=useNavigate();
  const [formData,setFromData]=useState({
    name:"",
    phoneNo:"",
    email:"",
    password:""
});
const [submit,setSubmit]=useState(false);
const [response,setResponse]=useState("");
useEffect(()=>{
    // const baseUrl="http://localhost:2023/Login"
    const baseUrl="https://handson4-server.onrender.com/Login"
    axios.post(baseUrl,formData).then((res)=>{
     setResponse(res.data);
     console.log(res.data)
    })

},[submit])
const handleChange=(e)=>{
    setFromData({...formData,[e.target.name]:e.target.value})
}
const handleClick=(e)=>{
    e.preventDefault();
    
    if(formData.name!=0 && formData.email!=0 &&formData.password!=0&&formData.phoneNo!=0){
      setSubmit(!submit);
  }else{
      setResponse({"message":"fill the form"})
  }
}
const goToDashboard=()=>{
  console.log(response.token)
  localStorage.setItem("token",response.token);  
  navigate("/Dashboard");
}

  return (
 
    <div className='registration'>

   {  response.token?
    goToDashboard():
     <div className="registerContainer loginContainer">
        <img src={img} alt="not found" />
        <form className="register">
          <h1>Login Page</h1>
          <fieldset>
            <legend>Name</legend>
            {/* Name, Phone, Email and Password */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your Name'
              required
            />
          </fieldset>
          <fieldset>
            <legend>Phone number</legend>
            {/* Name, Phone, Email and Password */}
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder='Enter your Phone number'
              required
            />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            {/* Name, Phone, Email and Password */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your Email'
              required
            />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            {/* Name, Phone, Email and Password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter your Password'
              required
            />
          </fieldset>
          {/* <div className="message">Your are already registered</div> */}
          <div className="message">{response&& response.message}</div>
          <button onClick={handleClick}>Submit</button>
          <div>
            go to <Link to={"/Register"}>Register page</Link>
          </div>
        </form>
      </div>}
      </div>
  );
};

export default Login;
