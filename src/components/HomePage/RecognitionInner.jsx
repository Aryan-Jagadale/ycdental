import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RecognitionInner = ({ img, title }) => {
  return (
    <div className="main-card mt-20 font-fam lg:mt-2">
      <LazyLoadImage
        className="main-card-img"
        src={img}
        alt={title}
        effect="opacity"
      />
      <h2 className="text-lg">{title}</h2>
    </div>
  );
};

export default RecognitionInner;
