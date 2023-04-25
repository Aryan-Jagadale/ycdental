import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../style/AcdemicPage/academic.css";
import { Lightbox } from "react-modal-image";

export const GridLab4 = ({ item }) => {
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

export const GridLab3 = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        id="container"
        className="h-[25vh] text-center md:h-[35vh] w-[80%] md:w-[50vw] border relative  border-gray-500 shadow-xl hover:shadow-2xl rounded-xl divSpan "
      >
        <LazyLoadImage
          src={item.imG}
          alt={item.label}
          effect="opacity"
          className="h-full w-full object-cover rounded-lg  transform transition duration-500 hover:scale-110"
        />

        {open && (
          <Lightbox
            medium={item.imG}
            large={item.imG}
            alt={item.label}
            onClose={() => setOpen(false)}
            className="h-full w-full object-cover rounded-lg"
          />
        )}

        <div className="middle cursor-pointer">
          <h4
            className="text font-fam font-bold tracking-wide"
            onClick={() => setOpen(true)}
          >
            {item.label}
          </h4>
        </div>
      </div>
    </>
  );
};
