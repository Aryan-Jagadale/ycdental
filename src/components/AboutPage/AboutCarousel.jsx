import React from "react";
import Slider from "react-slick";
import "../../style/AboutPage/aboutCarousel.css";
import { aboutCarousel } from "../../utils/Carousel";
import AboutInnerCarosel from "./AboutInnerCarosel";

const AboutCarousel = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1193,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className="h-[100%] min-[1193px]:h-[100vh] bg-[#00205B] p-3 md:p-9">
        <div id="backImage" className="h-full w-full">
          <div className="carousel_wrapper">
            <br />
            <br />
            <br />

            <div className="" id="about_title">
              <h2 className="text-[#FFD900] font-bold text-2xl tracking-wider flex items-center justify-center h-[10vh] uppercase font-fam" >
                About us
              </h2>
            </div>
            <br />

            <div className="slider_wrapper px-10 mt-[5vh] lg:mt-[11vh]">
              <Slider {...settings}>
                {
                  aboutCarousel.map((item) => (
                    <AboutInnerCarosel carImg={item.carImg} />

                  ))
                }

              </Slider>
            </div>
            <br />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default AboutCarousel;
