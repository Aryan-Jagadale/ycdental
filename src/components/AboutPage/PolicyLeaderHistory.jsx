import React from "react";
import { Link } from "react-router-dom";

const PolicyLeaderHistory = ({ name, link }) => {
  return (
    <div
      className={`${name === "Patient Safety" ? "bgPS" : ""} ${
        name === "PTA Policy" ? "bgPTA" : ""
      } ${
        name === "E-governance" ? "bgEgov" : ""
      } 
      ${name==="Mentoring Policy"?"bgMentor":""}
      ${name==="Code of Conduct"?"bgCoc":""}
      ${name==="Research Policy"?"bgPolicy":""}


      
      
      relative w-3/4 md:w-1/4 shadow-2xl block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat`}
    >
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
        <div className="sm:pt-18 pt-12 text-white lg:pt-24">
          <h3 className="text-xl font-bold sm:text-2xl tracking-wide font-fam">
            {name}
          </h3>

          <button className="tracking tracking-wide border border-[#FFD900] uppercase font-fam flex items-center justify-center p-2 rounded ">
            <Link
              to={link}
              className="text-[#FFD900] hover:font-bold hover:text-[#e2c834] "
            >
              View more
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyLeaderHistory;
