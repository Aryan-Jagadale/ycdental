import React from "react";
import loadable from "@loadable/component";
import AboutCommitte from "../components/AboutPage/AboutCommitte";

const AboutCarousel = loadable(() =>
  import("../components/AboutPage/AboutCarousel")
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

      <VisionMission />
      <AboutComp />
      <AboutDetails />
      <AboutCommitte />
    </>
  );
};

export default About;
