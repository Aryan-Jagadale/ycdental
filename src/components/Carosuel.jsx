import { Carousel } from "flowbite-react";
import React from "react";
import InnerCaroComp from "./InnerCaroComp";

const CarosuelComp = () => {
  return (
    <div>
      <div className="h-[120vh] py-2 bg-[#800000] flex items-center justify-center">
        <div className="h-[90%] w-[90%] bg-[#800000] shadow-2xl flex justify-center items-center border-1 border-red-100">
          <Carousel slide={false}>
            <InnerCaroComp />

            <InnerCaroComp />

            <InnerCaroComp />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarosuelComp;
