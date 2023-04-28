import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import pdfImg from "../../assets/images/muhs/pdfImg.png";

const RecognitionInner = ({ img, title, pdf }) => {
  const openMultiPDF = (pdf) => {
    window.open(pdf[0]);
    window.open(pdf[1]);
    window.open(pdf[2]);
    window.open(pdf[3]);
  };

  if (title === "Recognized by Dental Council of India") {
    return (
      <div className="main-card mt-20  font-fam lg:mt-2">
        <LazyLoadImage
          className="main-card-img"
          src={img}
          alt={title}
          effect="opacity"
        />
        <h2 className="text-lg">{title}</h2>
        <button className="bg-[#FFD900]  flex items-center justify-center p-2 md:p-3">
          <img src={'https://files.yashdental.org/wp-content/uploads/2023/04/pdfImg.png'} alt="PDF" className="mr-2" />
          <span className="tracking-wide text-blue-500">
            <div className="text-base" onClick={() => openMultiPDF(pdf)}>
              View PDF
            </div>
          </span>
        </button>
      </div>
    );
  }
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
          <img src={'https://files.yashdental.org/wp-content/uploads/2023/04/pdfImg.png'} alt="PDF" className="mr-2" />
          <span className="tracking-wide text-blue-500">
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="text-base"
            >
              View PDF
            </a>
          </span>
        </button>
      </div>
    </>
  );
};

export default RecognitionInner;
