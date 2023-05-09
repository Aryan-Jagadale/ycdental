import React from 'react'
import { Link } from "react-router-dom";
//import { cr4_1 } from "../../../../content/NAAC/Criterias/Criteria4"

function Criteria3_1() {
  return (<div className="main-body px-4 max-w-screen-xl mx-auto">
    <h1 className="text-start font-fam font-bold text-xl text-[#00205B] border-b-2 border-[#00205B] py-3">
      CRITERIA 3.1
    </h1>
    <div className="app-body-sub flex flex-row gap-3 md:flex-col">
      <div className="flex flex-col w-full md:flex-col">
        <Link
          to={"/nacc/Criteria3/3-1-1"}
          className="flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center"
        >
          <p className="box-one font-fam text-lg py-2.5 whitespace-normal">
            3.1.1
          </p>
        </Link>
        <Link
          to={"/nacc/Criteria3/3-1-2"}
          className="flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center"
        >
          <p className="font-fam text-lg py-2.5 whitespace-normal">
            3.1.2
          </p>
        </Link>
        <Link
          to={"/nacc/Criteria3/3-1-3"}
          className="flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center"
        >
          <p className="font-fam text-lg py-2.5 whitespace-normal">
            3.1.3
          </p>
        </Link>
       
      </div>
    </div>
  </div>
   
  );
}

export default Criteria3_1;
