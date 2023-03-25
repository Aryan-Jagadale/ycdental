import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../style/AcdemicPage/academic.css";

export const GridLab4 = ({item}) => {
  return (
    <div className="h-[25vh] md:h-[35vh] w-[80%] md:w-[50vw] border border-gray-500 shadow-xl hover:shadow-2xl rounded-xl divSpan">
      <LazyLoadImage
        src={item.imG}
        alt={item.label}
        effect="opacity"
        className="h-full w-full object-cover rounded-lg  transform transition duration-500 hover:scale-110"
      />
      
    </div>
  );
};


export const GridLab3 = ({item}) => {
    return (
      <div className="h-[25vh] md:h-[35vh] w-[80%] md:w-[50vw] border   border-gray-500 shadow-xl hover:shadow-2xl rounded-xl divSpan">
        <LazyLoadImage
          src={item.imG}
          alt={item.label}
          effect={"opacity"}
          className="h-full w-full object-cover rounded-lg transform transition duration-500 hover:scale-110"
        />
      </div>
    );
  };


