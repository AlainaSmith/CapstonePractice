import React, {useState} from "react"
import axios from "axios"
import './Register.css'

const Register = () => {

// const mySubmit = data => console.log(data);
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email_address, setEmailAddress] = useState('')
const [password, setPassword] = useState('')


const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
    axios.post('http://localhost:3500/register', {
    firstName: firstName, 
    lastName: lastName,
    email_address: email_address,
    password: password
})
.then((res) =>{
    console.log(res)
})
 }


const validate = (values) => {
    const errors = {}
        if(!values.firstName) {
            errors.firstName = "First Name Required"
        }
        if(!values.lastName) {
            errors.lastName = "Last Name Required"
        }
        if(!values.email_address) {
            errors.email_address = "Email Address Required"
        }
        if(!values.confirmPassword) {
            errors.confirmPassword = "Confirm Password"
        } else if(values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords Must Match"
        }
        return errors
}


return(
    <>
    <h2>Register</h2>
    <form className="registerForm">
    <input 
        type="text"
        name="First Name"
        placeholder="First Name"
        onChange={(e)=>{setFirstName(e.target.value)}}
      />
      <input
        type="text"
        name="Last Name"
        placeholder="Last Name"
        onChange={(e)=>{setLastName(e.target.value)}}
      />
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
      <button type="button" onClick={handleSubmit}>Register</button>
    </form>
    </>
    )
}

export default Register




{/* <form onSubmit={handleSubmit(mySubmit)}> */}
    {/* <input {...register("First Name", {required:"Must input First Name"})} />
    <input {...register("Last Name", {required:"Must input Last Name"} )} />
    <input {...register("Email", {required:"Must input valid email address"} )} /> */}



// const handleSubmit = () => {
//     axios.post('http://localhost:3500/register', values)
//     .then((res) => {
//         console.log(res.data)
//         localStorage.setItem('firstName', res.data[0][0].firstName)
//         localStorage.setItem('lastName', res.data[0][0].lastName)
//         localStorage.setItem('email_address', res.data[0][0].email_address)
//         localStorage.setItem('password', res.data[0][0].password)
//         localStorage.setItem('id', res.data[0][0].id) //not sure about this
//     })
//     .catch((err) => console.log(err.response.data))
// }