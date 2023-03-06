import React from "react";
import aboutCarousel from "../../assets/images/aboutCarousel.png";

const AboutInnerCarosel = () => {
  return (
    <div>
      <div
        className=" w-[100%] min-[1193px]:w-[29.2vw] p-2 md:p-8 mr-2 border-[#FFD900] border-r-4"
        style={{
          background: "rgba(0, 32, 91, 0.35)",
          backdropFilter: "blur(5px)",


          
        }}
      >
        <img
          src={aboutCarousel}
          alt={"niko"}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutInnerCarosel;
