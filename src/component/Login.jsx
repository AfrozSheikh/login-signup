import React from 'react'
import { useState } from 'react';


export default function Login ()  {

  const [user, setUser] = useState({
  
    email:"" , 
    password:""  ,
    
  })
  const changeHandler=(e)=>{
  const {name,value} = e.target ;
  setUser({
  ...user,
  [name]:value ,
  })
  
  
  }
  return (
    <div>
      {console.log(user)
      }
        <h1>Login</h1>
        <input onChange={changeHandler} type="text" placeholder='Enter email' name="email" id="" />
        <input  onChange={changeHandler} type="password" name="password" id="" />
        {/* <button onClick={loginn}>Login</button> 
        <div onClick={register}> Register </div>
 */}

    </div>
  )
}
