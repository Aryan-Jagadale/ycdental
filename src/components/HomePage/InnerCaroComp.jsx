import React from "react";

const InnerCaroComp = ({ left, right,backImg }) => {
  return (
    <>
      <div className="carosuel-bg" style={{
        backgroundImage:backImg
      }}>
        <div className="h-[100%] w-[100%] md:h-[80%] md:w-2/3 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 border-4 border-[#800000] backdrop-blur-sm">
          <section className="p-4 h-full flex items-center justify-between relative">
            <div className="h-full w-full md:p-4">
              <img
                className="h-full w-full collageImg1"
                src={left}
                alt="dentist1"
              />
            </div>
           
            <div className="h-full w-full md:p-4">
              <img
                className="h-full w-full collageImg3"
                src={right}
                alt="dentist2"
              />
            </div>
          </section>
          {/*Strip */}
          <section
            className="bg-[#800000] h-[20%] w-full absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 flex items-center justify-center"
            style={{
              background: "rgba(128, 0, 0, 0.68)",
              backdropFilter: "blur(5px)",
            }}
          >
            <span className="text-[#FFD900] font-bold font-2xl font-fam uppercase tracking-wide">
              More than Dentistry
            </span>
          </section>
        </div>
      </div>
    </>

  
  );
};

export default InnerCaroComp;
