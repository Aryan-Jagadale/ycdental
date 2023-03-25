import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../style/AcdemicPage/academic.css";

export const GridLab4 = ({item}) => {
  return (
    <div className="h-[25vh] md:h-[35vh] w-[80%] md:w-[50vw] border-2 border-[#800000] rounded-lg divSpan">
      <LazyLoadImage
        src={item.imG}
        alt={item.label}
        effect="opacity"
        className="h-full w-full object-cover rounded-lg"
      />
      
    </div>
  );
};


export const GridLab3 = ({item}) => {
    return (
      <div className="h-[25vh] md:h-[35vh] w-[80%] md:w-[50vw] border-2 border-[#800000] rounded-lg divSpan">
        <LazyLoadImage
          src={item.imG}
          alt={item.label}
          effect={"opacity"}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    );
  };


