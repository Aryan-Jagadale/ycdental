import React from "react";
//import aboutCarousel from "../../assets/images/aboutCarousel.png";

const AboutInnerCarosel = ({carImg}) => {
  return (
    <div>
      <div
        className=" w-[100%] p-4 md:p-[2.5rem] border-[#FFD900] border-r-4"
        style={{
          background: "rgba(0, 32, 91, 0.35)",
          backdropFilter: "blur(5px)",
        }}
      >
        <img
          src={carImg}
          alt={"niko"}
          className="max-h-[35vh] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutInnerCarosel;
