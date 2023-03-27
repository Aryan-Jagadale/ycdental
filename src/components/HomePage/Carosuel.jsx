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
          {carousel.map((item) => (
            <InnerCaroComp
              key={item.backImg}
              left={item.left}
              midd={item.midd}
              right={item.right}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarosuelComp;
