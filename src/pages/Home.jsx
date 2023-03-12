import React from "react";
import CarosuelComp from "../components/HomePage/Carosuel";
import Welcome from "../components/HomePage/Welcome";
import News from "../components/HomePage/News";
import AboutComp from "../components/HomePage/AboutComp";

const Home = () => {
  return (
    <>
      <CarosuelComp/>
      
      <Welcome/>
      <AboutComp />
      <News />
    </>
  );
};

export default Home;
