import React from "react"
import People from "./people"
import brain from './brain.png';
// import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";
import './App.css';
const FrontPage = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={brain} className="App-logo" alt="logo" />
          <p>
            Click&nbsp;
            <a
            className="Here-link"
            href="./PeopleComponents/people.js"
            target="_blank"
          >
            {/* <Link to='/PeopleComponents/people'>Here</Link> */}
            Here&nbsp;
          </a>to enter 
          </p>
        </header>
       
        {/* <Route path='/' component={People}/> */}

      </div>
    );
  }
  
    export default FrontPage

 {/* <NavLink to='/People' activeClassName='active'>Teachers</NavLink>
             */}
//     // <p>
//     //       Click&nbsp;
//     //       <a
//     //       className="Here-link"
//     //       href="./PeopleComponents/people.js"
//     //       target="_blank"
//     //     >
//           {/* <Link to='/PeopleComponents/people'>Here</Link> */}
//           {/* Here&nbsp;
//         </a>to enter your mind
//         </p> */}