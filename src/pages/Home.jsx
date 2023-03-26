import React from "react";
import loadable from '@loadable/component'
import CarosuelComp from "../components/HomePage/Carosuel";
//import Welcome from "../components/HomePage/Welcome";
//import News from "../components/HomePage/News";
//import Recognition from "../components/HomePage/Recognition";

const Welcome = loadable(() => import('../components/HomePage/Welcome'))
const Recognition = loadable(() => import('../components/HomePage/Recognition'))
const News = loadable(() => import('../components/HomePage/News'))


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
