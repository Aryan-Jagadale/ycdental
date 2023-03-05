import { Carousel } from "flowbite-react";
import React from "react";
import InnerCaroComp from "./InnerCaroComp";

const CarosuelComp = () => {
  return (
    <div>
      <div className="lg:h-[120vh] lg:py-2 bg-[#800000] flex items-center justify-center py-0">
        <div className="h-[90%] w-[100%] md:w-[90%] bg-[#800000] shadow-2xl flex justify-center items-center border-1 border-red-100">

        <section className="">
        <Carousel slide={false}>
            <InnerCaroComp />

            <InnerCaroComp />

            <InnerCaroComp />
          </Carousel>
        
        </section>
          


        </div>
      </div>
    </div>
  );
};

export default CarosuelComp;
