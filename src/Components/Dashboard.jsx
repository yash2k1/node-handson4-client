import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [token,setToken]=useState(localStorage.getItem("token"));
    const [data,setData]=useState("");
    useEffect(()=>{
      
        const baseUrl="http://localhost:2023/Dashbord";
        axios.get(baseUrl,{
            headers:{
                "authorization":"bearer "+token
                       }
        })
        .then(res=>setData(res.data));
        console.log(data);
    },[])
    const handleClick=()=>{
      setToken( localStorage.removeItem("token"))
    }
  return (
    <div className='dashboard'>
      {
        token ?
        <div>
        <h2>Welcome to Dashboard</h2>
        <button onClick={handleClick}>LogOut</button>
        </div>
        
        :
        <h2 > 
          your are not authorized
          <Link to={"/Register"}> to to signUp</Link>

        </h2>

      }

      {/* {data.split(" ")[0]="welcome"&&
    //   <div>{data}</div>
      } */}
    </div>
  )
}

export default Dashboard
