import React from "react";
import "./Footer.css";
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Mysore Krishnarajanagara</p>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              6363997569
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              sanjaympmysore@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Contect Me</h4>
          <p>
  Explore my GitHub for a deeper dive into my projects and coding expertise. Let's connect on LinkedIn to discuss new opportunities and innovative ideas.
</p>

          <div className="social">
            <a href="https://www.linkedin.com/in/sanjay-mp-11131a299/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/SanjayMP-1234" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
