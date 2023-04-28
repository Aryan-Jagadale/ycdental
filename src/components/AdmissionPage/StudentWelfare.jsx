import React from "react";
import "../../style/AdmissionPage/studentWalefare.css";
import pdfImg from "../../assets/images/muhs/pdfImg.png";
import awards from "../../assets/images/academics/awards.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Students_welfare } from "../../content/Admission/StudentWelfareInfo";

function StudentWelfare() {
  return (
    <div id="studentWelfare">
      <div className="mainDiv md:m-8">
        {Students_welfare.map((item) => (
          <div>
            <LazyLoadImage
              src={awards}
              alt="Student welfare"
              className="object-none object-center mt-4 mb-3 h-16  w-full justify-center "
            />
            <h1 className="text-xl text-center tracking-wide font-fam px-1 md:px-20 py-3">
              {item.content}
            </h1>
            <div className="studWalefare-Main bg-slate-50">
              <div className="flex items-center justify-center font-fam text-white px-2 py-4">
                <button className="bg-[#FFD900]  flex items-center justify-center p-2 md:p-3">
                  <LazyLoadImage src={pdfImg} alt="PDF" className="mr-2" />
                  <span className="tracking-wide text-blue-500">
                    <a
                      href={item.pdfLink}
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
        ))}
      </div>
    </div>
  );
}

export default StudentWelfare;
