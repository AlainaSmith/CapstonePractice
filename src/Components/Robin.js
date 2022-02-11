import React, {useState} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import './Robin.css'

const Robin = () => {
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
        <h3 className="robinHeader">Dr. Robin Wall Kimmerer</h3>
        <h2>Dr. Kimmerer founder and director of the Center for Native Peoples and the Environment, whose mission is to create programs which draw on the wisdom of both  indigenous and scientific knowledge for our shared goals of sustainability.</h2>
        </div>
        


    <h3>Subscribe to stay updated!</h3>    
    <form>
    <input className="robininput"
        type="text"
        name="First Name"
        placeholder="First Name"
        onChange={(e)=>{setFirstName(e.target.value)}}
      />
      <input className="robininput"
        type="text"
        name="Last Name"
        placeholder="Last Name"
        onChange={(e)=>{setLastName(e.target.value)}}
      />
      <input className="robininput"
      type="text"
      name="emailAddress"
      placeholder="Email Address"
      onChange={(e)=>{setEmailAddress(e.target.value)}}
      />
    
    <button className="robinButton" type="submit" onSubmit={handleSubmit}>Subscribe</button>
    </form>
        
    </>
    )
}

export default Robin