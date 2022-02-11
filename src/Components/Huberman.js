import React, {useState} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import './Huberman.css'

const AndrewHuberman = () => {
    const activeStyle = {color:'green'};
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email_address, setEmailAddress] = useState('')

    axios.post('http://localstorage:3000', {
        firstName: firstName, 
        lastName: lastName,
        email_address: email_address
    })
    .then((res) =>{
        console.log(res)
    })
    

const handleSubmit = () => {

}

    return(
        <>
        <nav className='headerLinks'>
        <NavLink activeStyle={activeStyle} exact to='/FrontPage'>Home</NavLink>
        {" | "}
        <NavLink activeStyle={activeStyle} exact to='/About'>About</NavLink>
        </nav>
        

        <div className="textStuff">
        <h3 className="hubermanHeader">Dr. Andrew Huberman</h3>
        <h2>Dr. Huberman will discuss neuroscience: how our brain and its connections with the organs of our body controls our perceptions, our behaviors, and our health. He will also discuss tools for measuring and changing how our nervous system works.</h2>
        </div>
        


    <h3>Subscribe to stay updated!</h3>    
    <form>
    <input className="hubermaninput"
        type="text"
        name="First Name"
        placeholder="First Name"
        onChange={(e)=>{setFirstName(e.target.value)}}
      />
      <input className="hubermaninput"
        type="text"
        name="Last Name"
        placeholder="Last Name"
        onChange={(e)=>{setLastName(e.target.value)}}
      />
      <input className="hubermaninput"
      type="text"
      name="emailAddress"
      placeholder="Email Address"
      onChange={(e)=>{setEmailAddress(e.target.value)}}
      />
    
    <button className="hubermanButton" type="submit" onSubmit={handleSubmit}>Subscribe</button>
    </form>
        
    </>
    )
}

export default AndrewHuberman