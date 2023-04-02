import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";



export const InnerCaroComp1 = ({ backImg }) => {
  return (
    <>
      <div>
        <LazyLoadImage
          src={backImg}
          className="h-[90vh] w-full carosuel-bg"
          alt="Banner"
          effect="opacity"
        />
      </div>
    </>
  );
};
