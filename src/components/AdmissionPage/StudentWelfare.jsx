import React from "react";
import "../../style/AdmissionPage/studentWalefare.css";
import pdfImg from "../../assets/images/muhs/pdfImg.png";
import awards from "../../assets/images/academics/awards.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import pdf from "../../assets/pdf/studentWelfare/StudentWelfare.pdf";

function StudentWelfare() {
  return (
    <div id="studentWelfare">
      <div className="mainDiv md:m-8">
        <div>
          <LazyLoadImage
            src={awards}
            alt="Student welfare"
            className="object-none object-center mt-4 mb-3 h-16  w-full justify-center "
          />
          <h1 className="text-xl text-center tracking-wide font-fam px-1 md:px-20 py-3">
            The institute believes in the fundamental principle of
            acknowledging, appreciating and encouraging academic excellence and
            outstanding efforts of our students. Every year, an Academic
            Excellence Award of ₹11,000/- is endowed to the meritorious students
            for their academic accomplishments.
          </h1>
          <div className="studWalefare-Main bg-slate-50">
            <div className="flex items-center justify-center font-fam text-white px-2 py-4">
              <button className="bg-[#FFD900]  flex items-center justify-center p-2 md:p-3">
                <LazyLoadImage src={pdfImg} alt="PDF" className="mr-2" />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentWelfare;
