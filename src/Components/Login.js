import React, {useState} from "react"
// import { useFormik } from "formik";
import axios from "axios"
import './Login.css'


const Login = () => {
const [emailAddress, setEmailAddress] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = () => {
    axios.post('http://localhost:3000/login', {
        emailAddress: emailAddress,
        password: password
    })
}
return(
    <>
    <h2>Login</h2>
<form className="loginForm">
      <input
        type="text"
        name="emailAddress"
        placeholder="Email Address"
        onChange={(e)=>{setEmailAddress(e.target.value)}}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e)=>{setPassword(e.target.value)}}
      />
      <button type="submit" onSubmit={handleSubmit}>Login</button>
    </form>
    </>
    )
}

export default Login


// <form onSubmit={handleSubmit(mySubmit)}>