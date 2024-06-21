import React from 'react';
import "./Home.css";
import Button from 'react-bootstrap/Button';
import Typewriter from "typewriter-effect";
import Sharuk from "./Sharuk.jpeg";

const Home = () => {
  return (
    <>
      <div className='container home_container'>
        <div className="home_innerdiv">
          <div className="left_div main_text_animation">
            <h2>Hii👋 myself, <span className='typewriter-container'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Sharu Khan")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </span></h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}> I am Competitive Programmer and I've been doing Algorithmic Problem solving since last 3 years. I am also interested in MERN Stack development and have made couple of projects in the same tech stack. I've a strong grasp on Data Structures & Algorithms and have a good command over Mathematics & Geometry.</p>
            <div className='btn_div mt-4'>
              <Button variant="primary" style={{ letterSpacing: "1px" }} className='btn' href='https://drive.google.com/file/d/1BMk1zbzIJE63iwAqUAgi3a42auTq3dNk/view?usp=sharing' target='_blank'>Resume</Button>
            </div>
          </div>
          <div className="right_div">
          <img src={Sharuk} /> 
          </div>
        </div>
      </div>
    </>
  ) 
}

export default Home;
