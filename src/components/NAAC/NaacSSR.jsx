import React from "react";
import { Link } from "react-router-dom";
import "../../style/NAAC/naac.css";

function NaacSSR() {
  return (
    <div className="main-body px-4 max-w-screen-xl mx-auto">
      <h1 className="text-start font-fam font-bold text-xl text-[#00205B] border-b-2 border-[#00205B] py-3">
        NAAC SSR
      </h1>
      <div className="app-body-sub flex flex-row gap-3 md:flex-col">
        <div className="flex flex-col w-full md:flex-col">
          <Link
            to={"/nacc/Criteria1"}
            className="flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-13 my-3 px-4 text-center"
          >
            <p className="box-one font-fam text-lg py-2.5 whitespace-normal">
              1.Curricular Aspects{" "}
            </p>
          </Link>
          <Link
            to={"/nacc/Criteria2"}
            className="flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-13 my-3 px-4 text-center"
          >
            <p className="font-fam text-lg py-2.5 whitespace-normal">
              2.TeachingLearning and Evaluation{" "}
            </p>
          </Link>
          <Link
            to={"/nacc/Criteria3"}
            className="flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-13 my-3 px-4 text-center"
          >
            <p className="font-fam text-lg py-2.5 whitespace-normal">
              3. Research, Innovations and Extension{" "}
            </p>
          </Link>
          <Link
            to={"/nacc/Criteria4"}
            className="flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-13 my-3 px-4 text-center"
          >
            <p className="font-fam text-lg py-2.5 whitespace-normal">
              4.Infrastructure and Learning Resources{" "}
            </p>
          </Link>
        </div>
        <div className="flex flex-col w-full md:flex-col ">
          <Link
            to={"/nacc/Criteria5"}
            className="flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-13 my-3 px-4 text-center"
          >
            <p className="font-fam text-lg py-2.5 whitespace-normal">
              5. Student Support and Progression{" "}
            </p>
          </Link>
          <Link
            to={"/nacc/Criteria6"}
            className="flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-13 my-3 px-4 text-center"
          >
            <p className="font-fam text-lg py-2.5 whitespace-normal">
              6.Governance, Leadership and Management{" "}
            </p>
          </Link>
          <Link
            to={"/nacc/Criteria7"}
            className="flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-13 my-3 px-4 text-center"
          >
            <p className="font-fam text-lg py-2.5 whitespace-normal">
              7.Institutional Values and Best Practices{" "}
            </p>
          </Link>
          <Link
            to={"/nacc/Criteria8"}
            className="flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-13 my-3 px-4 text-center"
          >
            <p className="font-fam text-lg py-2.5 whitespace-normal">
              Part-B-Health Science Disciplines -B2 Dental College{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NaacSSR;
