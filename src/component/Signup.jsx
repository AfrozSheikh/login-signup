import React, { useState } from 'react'
import axios from "axios"
export default function Signup() {
    const [user, setUser] = useState({
        name :"" , 
        email:"" , 
        password:""  ,
        confirmPassword:""
    })
    const changeHandler=(e)=>{
     const {name,value} = e.target ;
    setUser({
      ...user,
      [name]:value ,
    })    
    }

    const register = ()=>{
      const{name,  email, password, confirmPassword} = user ;
      axios.post("http://localhost:4000/register",user).then((r)=>{console.log(r);
      })

    }
  return (
    <div>
      {console.log(user)   }
        
    <input onChange={changeHandler} value={user.email} type="text" name="email" placeholder="enter mail" />

    <input onChange={changeHandler} value={user.name} type="text" name="name"placeholder='enter name' />
    <input onChange={changeHandler} type="password" value={user.password} name='password'/>
    <input onChange={changeHandler} type="password" name='confirmPassword' value={user.confirmPassword} placeholder='confirm password'/>
  
    <p>or</p>
 <button onClick={register}> Register </button>
  {/*<button onClick={loginn}>Login</button>  */}
    </div>
   
  )
}
