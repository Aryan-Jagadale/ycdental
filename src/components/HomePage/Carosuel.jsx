import React from "react";
import { Carousel } from "flowbite-react";
import {InnerCaroComp,InnerCaroComp1 } from "./InnerCaroComp";
import "../../style/HomePage/carosuel.css";
import { carousel, carousel1 } from "../../utils/Carousel";

const CarosuelComp = () => {
  return (
    <>
      <div className="carosuel">
        <Carousel className="carosuel" slide={false}>
          {carousel.map((item) => (
            <InnerCaroComp left={item.left} right={item.right} />
          ))}
          {
            carousel1.map((item)=> (
              <InnerCaroComp1 backImg={item.backImg} key={item.backImg} />
            ))
          }

        </Carousel>
      </div>
    </>
  );
};

export default CarosuelComp;
