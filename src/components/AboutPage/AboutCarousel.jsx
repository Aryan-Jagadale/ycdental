import React from "react";
import "../../style/AboutPage/aboutCarousel.css";

const AboutCarousel = () => {
  

  return (
    <div style={{height: "100%", marginBottom: "-1.5rem"}}>
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

            
            <br />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default AboutCarousel;
