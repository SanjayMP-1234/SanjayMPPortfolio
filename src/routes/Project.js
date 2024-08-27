import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero1 from '../Components/Hero1';
import Work1 from '../Components/Work1';

const Project = () => {
  console.log('Project component rendered');
  return (
    <div>
      <Navbar />
      <Hero1 heading="Projects" text="Some of my work"/>
      <Work1 />
      <Footer />
    </div>
  );
};

export default Project;
