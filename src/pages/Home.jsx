import React from 'react'
import Login from '../Components/Login'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
 
      <h1>Home</h1>
      <p>this is home page</p>
     <h2>DashBoard: <Link to={'/Dashboard'}>Go to Dashboard</Link> </h2>
     <h2>Login:<Link to={'/Dashboard'}>Go to Dashboard</Link> </h2> 
     <h2>SignUp:<Link to={'/Dashboard'}>Go to Dashboard</Link> </h2> 
    </div>
  )
}

export default Home
