import React from 'react'
import Personal from './Personal'
import Qualification from './Qualification';
import Experience from './Experience';
import PersonalDetails from './PersonalDetails';




const About = () => {
  return (
    <div>
      <Personal />
      <Experience />
      <Qualification />
      <PersonalDetails />
    </div>
  )
}

export default About;
