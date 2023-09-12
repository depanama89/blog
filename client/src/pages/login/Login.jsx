import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import newRequest from '../../util/NewRequest'
import { AuthContext } from '../../context/authContext'

const Login = () => {
  const [inputs,setInputs]=useState({
    username:"",
    password:""
  })
  const [err,setErr]=useState()
  const handleChange=(e)=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    console.log(inputs)
  }
  const navigate=useNavigate()
  const {currentUser,login} = useContext(AuthContext)
 
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
     
      await login(inputs)
     navigate("/")

    }catch(err){
      setErr(err.response.data)
    }
  }
  return (
    <div className='login'>
        <h1>Login</h1>
        <form action="">
            <input type="text" placeholder='username' name='username'  onChange={handleChange}/>
            <input type="password" placeholder='password' name='password'  onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
           {err && <p>{err}</p>}
            <span>Don't have an  account? <Link to="/register">Register</Link> </span>
        </form>
    </div>
  )
}

export default Login