import React from "react";
import CarosuelComp from "../components/HomePage/Carosuel";
import Welcome from "../components/HomePage/Welcome";
import News from "../components/HomePage/News";
import AboutComp from "../components/HomePage/AboutComp";
//import Loadable from "react-loadable";
//import Loader from "../components/Loader/index"

/*const loader = () => <Loader/>*/

/*const CarouselLazy = Loadable({
  loader: () => <CarosuelComp/>,
  loading: loader,
});


const WelComeLazy = Loadable({
  loader: () => <Welcome/>,
  loading: loader,
});

const AboutLazy = Loadable({
  loader: () => <AboutComp/>,
  loading: loader,
});

const NewsLazy = Loadable({
  loader: () => <News/>,
  loading: loader,
});*/

const Home = () => {
  return (
    <>
      <CarosuelComp/>
      <Welcome/>
      <AboutComp/>
      <News/>
    </>
  );
};

export default Home;
