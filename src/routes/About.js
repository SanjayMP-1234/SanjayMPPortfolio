import React from 'react'
import Navbar from '../Components/Navbar'
import Hero1 from '../Components/Hero1'
import Footer from '../Components/Footer'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero1 heading="ABOUT" text="I am web developer" />
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default About