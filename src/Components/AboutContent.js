import React from 'react';
import './AboutContent.css';
import { Link } from 'react-router-dom';
import React1 from '../assets/imagemern.jpg';
import Pro2 from '../assets/AWS.jpeg'


const AboutContent = () => {
  return (
    <div className='about'>
      <div className="left">
        <h1>My Technical skills</h1>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>AWS</li>
        </ul>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className='img' alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={Pro2} className='img' alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
