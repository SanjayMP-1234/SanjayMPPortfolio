import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

import IntroImg from '../assets/intro.jpg';
import ProfileImg from '../assets/myiamge.jpeg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <img className="profile-img" src={ProfileImg} alt="Profile" />
        <h1>Sanjay MP</h1>
        <p>
          I'm a Computer Science Engineer with a strong foundation from Sahyadri College of Engineering and Management, Mangaluru, boasting a CGPA of 8.9. I specialize in crafting dynamic and responsive web pages using React.js, Express.js, MongoDB, and AWS.
        </p>
        <div className="btn-container">
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
