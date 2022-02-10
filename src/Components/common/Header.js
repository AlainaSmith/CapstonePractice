import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    const activeStyle = {color:'green'};
    return(
        <>
        <nav className='headerLinks'>
        <NavLink activeStyle={activeStyle} exact to='/FrontPage'>Home</NavLink>
        {" | "}
        <NavLink activeStyle={activeStyle} exact to='/people'>People</NavLink>
        {" | "}
        <NavLink activeStyle={activeStyle} exact to='/About'>About</NavLink>
        {" | "}
        </nav>
        </>
    )
}

export default Header