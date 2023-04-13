import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import pdfImg from "../../assets/images/muhs/pdfImg.png";

const PolicyLeaderHistory = ({ name, link, pdf }) => {
  return (
    <div
      className={`
      ${name === "Anti Ragging Committee" ? "bgAntiRag" : ""}
      ${name === "Parents Teachers Association" ? "bgParentsAss" : ""}
      ${name === "Committee against Sexual Harassment" ? "bgHar" : ""}

      ${name === "Grievance Redressal" ? "bgPolicy" : ""}
      ${name === "Library Committee" ? "bgPTA" : ""}
      ${name === "Alumni Committee" ? "bgPS" : ""}

      ${name === "Student Welfare Committee" ? "bgCoc" : ""}

      ${name === "Patient Safety" ? "bgPS" : ""} 
      ${name === "PTA Policy" ? "bgPTA" : ""} 
      ${name === "E-governance" ? "bgEgov" : ""} 
      ${name === "Mentoring Policy" ? "bgMentor" : ""}
      ${name === "Code of Conduct" ? "bgCoc" : ""}
      ${name === "Research Policy" ? "bgPolicy" : ""}
      
      relative w-3/4 md:w-1/4 shadow-2xl block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat h-[40vh]`}
    >
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
        <div className="sm:pt-18 pt-12 text-white lg:pt-24">
          <h3 className="text-xl font-bold sm:text-2xl tracking-wide font-fam">
            {name}
          </h3>

          {pdf ? (
            <button className="bg-[#FFD900]  flex items-center justify-center p-2 mt-3 md:p-3">
              <LazyLoadImage
                effect="opacity"
                src={pdfImg}
                alt="PDF"
                className="mr-2"
              />
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
          ) : (
            <button className="tracking tracking-wide border border-[#FFD900] uppercase font-fam flex items-center justify-center p-2 rounded ">
              <Link
                to={link}
                className="text-[#FFD900] hover:font-bold hover:text-[#e2c834] "
              >
                View more
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PolicyLeaderHistory;
