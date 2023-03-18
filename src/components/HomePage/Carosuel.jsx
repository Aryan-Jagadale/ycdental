import React from "react";
import { Carousel } from "flowbite-react";
import InnerCaroComp from "./InnerCaroComp";
import "../../style/HomePage/carosuel.css";
import { carousel } from "../../utils/Carousel";



const CarosuelComp = () => {






  return (
    <>
      <div className="carosuel">
      
          <Carousel className="carosuel" slide={false}>
          {
            carousel.map((item)=>(
              <InnerCaroComp key={item.backImg} left={item.left} right={item.right} />

            ))
          }

           
          </Carousel>
      </div>
    </>

    // <div>
    //   <div className="lg:h-[120vh] lg:py-2 bg-[#800000] flex items-center justify-center py-0 carosuel">
    //     <div className="h-[90%] w-[100%] md:w-[90%] bg-[#800000] shadow-2xl flex justify-center items-center border-1 border-red-100">

    //     <section className="">
    // <Carousel className="carosuel" slide={false}>
    //     <InnerCaroComp />

    //     <InnerCaroComp />

    //     <InnerCaroComp />
    //   </Carousel>

    //     </section>

    //     </div>
    //   </div>
    // </div>
  );
};

export default CarosuelComp;
