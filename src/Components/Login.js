import React, {useState} from "react"

import axios from "axios"
import './Login.css'


const Login = () => {
const [emailAddress, setEmailAddress] = useState('')
const [password, setPassword] = useState('')
const [loginStatus, setLoginStatus] = useState('')


const handleSubmit = (e) => {
  e.preventDefault()
    axios.post('http://localhost:3500/login', {
        emailAddress: emailAddress,
        password: password
    })
    .then((res)=>{console.log(res.data)})
  }
console.log(emailAddress)
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
      <button type="button" onClick={handleSubmit}>Login</button>
    </form>
    <h1>{loginStatus}</h1>
    </>
    )
}

export default Login


