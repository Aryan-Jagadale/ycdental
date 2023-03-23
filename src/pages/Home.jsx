import React from "react";
import CarosuelComp from "../components/HomePage/Carosuel";
import Welcome from "../components/HomePage/Welcome";
import News from "../components/HomePage/News";
import Recognition from "../components/HomePage/Recognition";

const Home = () => {
  return (
    <>
      <CarosuelComp/>
      <Welcome/>
      <Recognition/>
      <News/>
    </>
  );
};

export default Home;
