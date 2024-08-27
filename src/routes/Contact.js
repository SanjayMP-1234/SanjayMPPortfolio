import React from 'react'
import Navbar from '../Components/Navbar'
import Hero1 from '../Components/Hero1'
import Footer from '../Components/Footer'
import Form from '../Components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero1 heading="Contact" text="How are you developer" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact