import React from "react";
import { NavLink } from "react-router-dom";
import './About.css'
import {AiOutlineHeart} from 'react-icons/ai'
import {FcBookmark} from 'react-icons/fc'
import {animateScroll as Scroll} from 'react-scroll'

const About = () => {
    const activeStyle = {color:'green'};
    return (
        <>
         <nav className='headerLinks'>
        <NavLink activeStyle={activeStyle} exact to='/FrontPage'>Home</NavLink>
        {" | "}
        <a href="#educators">Educators</a>
        {" | "}
        <NavLink activeStyle={activeStyle} exact to='/About'>About</NavLink>
        </nav>



        <div className="textStuff">
        <h3 className="aboutHeader">The Synaptic Plasticity Project</h3>
        <h3>The goal of this web page is to encourage people and educate them about the strength of the human mind and body on a microscopic level.</h3>
        <h3>This will be a collaboration of resources that emphasize the capabilities of our ever evolving brain.</h3>
        <h3>
        These educational techniques will be demonstrated through podcasts, articles, books, and meditations from my personal favorite teachers/professors/doctors.
        </h3>
        </div>

        <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/ELpfYCZa87g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <h3>
          Subjects
      </h3>
        <main className="mainSubject">
        <form className="formSubject">
            <div>
                <h4>
                    The Science of Neuroplasticity
                </h4>
            </div>
        </form>
       <form className="formSubject">
           <div>
               <h4>
                   Mindfulness
               </h4>
           </div>
       </form>
       <form className="formSubject">
           <div>
               <h4>
                   Environmental Health
               </h4>
           </div>
       </form>
        </main>
       

       <h3 id="educators">Educators</h3>
        <main className="mainTeachers">
        <form className="formTeachers"id="andrewHuberman">
            <div>
            <NavLink exact to='/Huberman'>
            <img src = "https://i0.wp.com/hubermanlab.com/wp-content/uploads/2021/05/Huberman-Lab-Podcast-Intro-1920x1080-1.jpeg?resize=768%2C432&ssl=1" width="300" height="215"/>
            </NavLink>
                <h4>
                    Dr. Andrew Huberman
                </h4>
                <div id='icon'>
                    <AiOutlineHeart /></div>
                <FcBookmark />
            </div>
        </form>
       <form className="formTeachers" id="Robin">
           <div>
            <img src="https://i.guim.co.uk/img/media/4cbb396a030edbcfd2c9ba9236000fee2d696c8b/0_386_1744_1046/master/1744.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=27da09a796bb7a4909b94f501af885e6" width="300" height="215"/>
               <h4>
                   Dr. Robin Wall Kimmerer
               </h4>
           </div>
       </form>
       <form className="formTeachers" id="Sam">
           <div>
               <img src="https://i.guim.co.uk/img/media/ff7c7c7b51425a332c7a9fd517c81c74de09bf42/0_1259_4033_2418/master/4033.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=35b33e093213c69960dfbf5e6167f567" width="300" height="215"></img>
               <h4>
                   Sam Harris
               </h4>
           </div>
       </form>
        </main>



        <main className="mainTeachersTwo">
        <form className="formTeachersTwo" id="andrewHuberman">
            <div>
            <NavLink exact to='/Huberman'>
            <img src = "https://i0.wp.com/hubermanlab.com/wp-content/uploads/2021/05/Huberman-Lab-Podcast-Intro-1920x1080-1.jpeg?resize=768%2C432&ssl=1" width="300" height="215"/>
            </NavLink>
           
                <h4>
                    Dr. Andrew Huberman
                </h4>
            </div>
        </form>
       <form className="formTeachers" id="Robin">
           <div>
            <img src="https://i.guim.co.uk/img/media/4cbb396a030edbcfd2c9ba9236000fee2d696c8b/0_386_1744_1046/master/1744.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=27da09a796bb7a4909b94f501af885e6" width="300" height="215"/>
               <h4>
                   Dr. Robin Wall Kimmerer
               </h4>
           </div>
       </form>
       <form className="formTeachers" id="Sam">
           <div>
               <img src="https://i.guim.co.uk/img/media/ff7c7c7b51425a332c7a9fd517c81c74de09bf42/0_1259_4033_2418/master/4033.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=35b33e093213c69960dfbf5e6167f567" width="300" height="215"></img>
               <h4>
                   Sam Harris
               </h4>
           </div>
       </form>
       
        </main>



        </>
    )
}

export default About



// const Liked = ({onClick, course, size}) => {
//     if (typeof course === 'undefined' || typeof course.id === 'undefined') {
//       return (<span/>);
//     } else {
//       const Heart = (course.liked === false ? AiOutlineHeart : AiFillHeart);
//       return (
//         <span style={{color: '#E91E63'}} onClick={() => onClick(course)}>
//           <Heart size={size} style={{'cursor': 'pointer'}}/>
//       </span>
//       );
//     }
  
//   }

