import React from "react";
import loadable from "@loadable/component";
//import AboutCarousel from '../components/AboutPage/AboutCarousel';
/*import AboutWelcome from '../components/AboutPage/AboutWelcome';
import AboutDetails from '../components/AboutPage/AboutDetails';
import VisionMission from '../components/AboutPage/VisionMission';
import AboutComp from '../components/HomePage/AboutComp';*/

const AboutCarousel = loadable(() =>
  import("../components/AboutPage/AboutCarousel")
);
const AboutWelcome = loadable(() =>
  import("../components/AboutPage/AboutWelcome")
);
const VisionMission = loadable(() =>
  import("../components/AboutPage/VisionMission")
);
const AboutComp = loadable(() => import("../components/HomePage/AboutComp"));
const AboutDetails = loadable(() =>
  import("../components/AboutPage/AboutDetails")
);

const About = () => {
  return (
    <>
      <AboutCarousel />
     {/*  <AboutWelcome />  */}
      <VisionMission />
      <AboutComp />
      <AboutDetails />
    </>
  );
};

export default About;
