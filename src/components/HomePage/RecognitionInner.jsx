import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import pdfImg from "../../assets/images/muhs/pdfImg.png";

const RecognitionInner = ({ img, title,pdf }) => {
  return (
    <>
      <div className="main-card mt-20  font-fam lg:mt-2">
        <LazyLoadImage
          className="main-card-img"
          src={img}
          alt={title}
          effect="opacity"
        />
        <h2 className="text-lg">{title}</h2>
        <button className="bg-[#FFD900]  flex items-center justify-center p-2 md:p-3">
          <img src={pdfImg} alt="PDF" className="mr-2" />
          <span className="tracking-wide text-blue-500">
            <a href={pdf} target="_blank" rel="noreferrer" className="text-base">
              Download PDF
            </a>
          </span>
        </button>
      </div>
    </>
  );
};

export default RecognitionInner;
