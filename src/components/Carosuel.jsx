import { Carousel } from "flowbite-react";
import React from "react";
import Banner1 from "../images/banner1.png";
import Banner2 from "../images/banner2.png";
import Dent1 from "../images/dent1.png";
import Dent2 from "../images/dent2.png";

const CarosuelComp = () => {
  return (
    <div>
      <div className="h-[120vh] py-2 bg-[#800000] flex items-center justify-center">
        <Carousel slide={false}>

          <div className="h-[90%] w-[90%] bg-[#800000] shadow-2xl flex justify-center items-center border-1 border-red-100">
            {/*Two image wrapper */}

            <div>
              <div className="p-2 relative">
                <section className="h-1/2 w-[100%] ">
                  <img src={Banner1} className="h-full w-full" alt="banner1" />
                </section>
                <section className="h-1/2 w-[100%] ">
                  <img src={Banner2} className="h-full w-full" alt="banner2" />
                </section>
              </div>
              <div className="h-2/3 w-2/3 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 border-4 border-[#800000] backdrop-blur-sm hidden md:block">
                <section className="p-4 h-full flex items-center justify-between relative">
                  <div className="h-full w-full p-4">
                    <img className="h-full w-full" src={Dent1} alt="dentist1" />
                  </div>
                  <div className="h-full w-full p-4">
                    <img className="h-full w-full" src={Dent2} alt="dentist2" />
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
                  <span className="text-[#FFD900] font-bold uppercase tracking-wide">
                    More than Dentistry
                  </span>
                </section>
              </div>
            </div>

          </div>

          <div className="h-[90%] w-[90%] bg-[#800000] shadow-2xl flex justify-center items-center border-1 border-red-100">
            {/*Two image wrapper */}

            <div>
              <div className="p-2 relative">
                <section className="h-1/2 w-[100%] ">
                  <img src={Banner1} className="h-full w-full" alt="banner1" />
                </section>
                <section className="h-1/2 w-[100%] ">
                  <img src={Banner2} className="h-full w-full" alt="banner2" />
                </section>
              </div>
              <div className="h-2/3 w-2/3 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 border-4 border-[#800000] backdrop-blur-sm hidden md:block">
                <section className="p-4 h-full flex items-center justify-between relative">
                  <div className="h-full w-full p-4">
                    <img className="h-full w-full" src={Dent1} alt="dentist1" />
                  </div>
                  <div className="h-full w-full p-4">
                    <img className="h-full w-full" src={Dent2} alt="dentist2" />
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
                  <span className="text-[#FFD900] font-bold uppercase tracking-wide">
                    More than Dentistry
                  </span>
                </section>
              </div>
            </div>

          </div>



        

       


          {/*<div className="h-[90%] w-[90%] drop-shadow-2xl bg-[#800000]">
          

          <div>
            <div className="p-2 relative">
              <section className="h-1/2 w-[100%] ">
                <img src={Banner1} className="h-full w-full" alt="banner1" />
              </section>
              <section className="h-1/2 w-[100%] ">
                <img src={Banner2} className="h-full w-full" alt="banner2" />
              </section>
            </div>
            <div className="h-2/3 w-2/3 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 border-4 border-[#800000] backdrop-blur-sm">
              <section className="p-4 h-full flex items-center justify-between relative">
                <div className="h-full w-full p-4">
                  <img className="h-full w-full" src={Dent1} alt="dentist1" />
                </div>
                <div className="h-full w-full p-4">
                  <img className="h-full w-full" src={Dent2} alt="dentist2" />
                </div>
              </section>
              
              <section
                className="bg-[#800000] h-[20%] w-full absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 flex items-center justify-center"
                style={{
                  background: "rgba(128, 0, 0, 0.68)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <span className="text-[#FFD900] font-bold uppercase tracking-wide">
                  More than Dentistry
                </span>
              </section>
            </div>
          </div>
            </div>*/}
        </Carousel>
      </div>
    </div>
  );
};

export default CarosuelComp;
