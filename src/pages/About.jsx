import React from 'react'
import AboutCarousel from '../components/AboutPage/AboutCarousel';
import AboutWelcome from '../components/AboutPage/AboutWelcome';
import AboutDetails from '../components/AboutPage/AboutDetails';
import VisionMission from '../components/AboutPage/VisionMission';
import AboutComp from '../components/HomePage/AboutComp';


const About = () => {
  return (
    <>
    <AboutCarousel/>
    <AboutWelcome/>
    <VisionMission />
    <AboutComp/>
  <AboutDetails/>
    </>
  )
}

export default About