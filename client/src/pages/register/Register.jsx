import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios    from "axios"
import newRequest from '../../util/NewRequest'
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [inputs,setInputs]= useState({
    username:"",
    email:"",
    password:""
  })
  const [err,setErr]=useState(null)

  const navigate =useNavigate("")

const handleChange=(e)=>{
    setInputs(prev =>({...prev, [e.target.name]:e.target.value}))
console.log(inputs)
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{ 
      const res=await newRequest.post("/auth/register",inputs)
      navigate("/login")
      
    }catch(err){
      setErr(err.response.data)

    }

   
  }
  return (
    <div className='register'>
        <h1>Register</h1>
        <form >
            <input required type="text" name='username'  placeholder='username'  onChange={handleChange}/>
            <input required type="text" name="email" placeholder='Email'  onChange={handleChange}/>
            <input required type="password"  name='password' placeholder='password'  onChange={handleChange} />
            <button   onClick={handleSubmit} >Register</button>
            { err &&  <p>{err}</p>}
            <span>do you have an  account? <Link to="/login">Login</Link> </span>
        </form>
    </div>
  )
}

export default Register