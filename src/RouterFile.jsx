import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'

const RouterFile = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default RouterFile
