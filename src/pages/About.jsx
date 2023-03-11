import React from 'react'
import AboutCarousel from '../components/AboutPage/AboutCarousel';
import AboutWelcome from '../components/AboutPage/AboutWelcome';
import AboutDetails from '../components/AboutPage/AboutDetails';
import VisionMission from '../components/AboutPage/VisionMission';

const About = () => {
  return (
    <>
    <AboutCarousel/>
    <AboutWelcome/>
    <VisionMission />
    <AboutDetails/>
    </>
  )
}

export default About