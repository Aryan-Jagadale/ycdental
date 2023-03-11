import React from "react";
import CarosuelComp from "../components/HomePage/Carosuel";
import WelcomeComp from "../components/HomePage/WelcomeComp";
import News from "../components/HomePage/News";
import AboutComp from "../components/HomePage/AboutComp";

const Home = () => {
  return (
    <>
      <CarosuelComp/>
      <WelcomeComp/>
      <AboutComp />
      <News />
    </>
  );
};

export default Home;
