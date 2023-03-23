import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImgLazyLoad = ({ image }) => {
  return (
    <LazyLoadImage
      alt={"Lazy Load"}
      height={""}
      src={image} // use normal <img> attributes as props
      width={""}
      effect="blur"
    />
  );
};

export default ImgLazyLoad;
