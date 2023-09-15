import React, { useEffect, useState } from 'react'
import img from "../assets/img.jpg"
import './Registration.css'
import { Link } from 'react-router-dom'
import axios from "axios"
const Register = () => {
    const [formData,setFromData]=useState({
        name:"",
        phoneNo:"",
        email:"",
        password:""
    });
    const [submit,setSubmit]=useState(false);
    const [response,setResponse]=useState("");
    useEffect(()=>{
        const baseUrl="http://localhost:2023/Register"
        axios.post(baseUrl,formData).then((res)=>{
         setResponse(res.data);
         console.log(res.data)
        })
        setFromData({
            name:"",
            phoneNo:"",
            email:"",
            password:""
        });
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
  return (
    <div className='registration'>
   <div className="registerContainer">
    <img src={img} alt="not found" />
    <form className='register'>
    <h1>Registration Page</h1>
        <fieldset>
        <legend>Name</legend>
            {/* Name, Phone, Email and Password */}
            <input type="text" name="name" value={formData.name}  onChange={handleChange} placeholder='Enter your Name' required/>
            </fieldset>
        <fieldset>
        <legend>Phone number</legend>
            {/* Name, Phone, Email and Password */}
            <input type="text" name="phoneNo" value={formData.phoneNo}  onChange={handleChange} placeholder='Enter your Phone number' required/>
            </fieldset>
        <fieldset>
        <legend>Email</legend>
            {/* Name, Phone, Email and Password */}
            <input type="email" name="email" value={formData.email}  onChange={handleChange} placeholder='Enter your Email' required />
            </fieldset>
        <fieldset>
        <legend>Password</legend>
            {/* Name, Phone, Email and Password */}
            <input type="password" name="password" value={formData.password}  onChange={handleChange} placeholder='Enter your Password' required/>
            </fieldset>
            {/* <div className="message">Your are already registered</div> */}
            <div className="message">{response && response.message}</div>
            <button onClick={handleClick}>Submit</button>
            <div>go to <Link to={"/Login"}>Login page</Link></div>
    </form>
   </div>
   </div>

  )
}

export default Register
