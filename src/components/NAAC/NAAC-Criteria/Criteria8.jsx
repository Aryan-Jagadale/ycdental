import React from "react";
import { Link } from "react-router-dom";
import "../../../style/NAAC/naac.css";

function Criteria8() {
  const data = [
    {
      link: "/nacc/Criteria8/8-1-1",
      label: "8.1.1",
    },
    {
      link: "/nacc/Criteria8/8-1-2",
      label: "8.1.2",
    },
    {
      link: "/nacc/Criteria8/8-1-3",
      label: "8.1.3",
    },{
      link: "/nacc/Criteria8/8-1-4",
      label: "8.1.4",
    },{
      link: "/nacc/Criteria8/8-1-5",
      label: "8.1.5",
    },
    {
      link: "/nacc/Criteria8/8-1-6",
      label: "8.1.6",
    },
    {
      link: "/nacc/Criteria8/8-1-7",
      label: "8.1.7",
    },
    {
      link: "/nacc/Criteria8/8-1-8",
      label: "8.1.8",
    },
    {
      link: "/nacc/Criteria8/8-1-9",
      label: "8.1.9",
    },{
      link: "/nacc/Criteria8/8-1-10",
      label: "8.1.10",
    },
    {
      link: "/nacc/Criteria8/8-1-11",
      label: "8.1.11",
    },
    {
      link: "/nacc/Criteria8/8-1-12",
      label: "8.1.12",
    },
  ];

  return (
    <div className="main-body px-4 max-w-screen-xl mx-auto">
      <h1 className="text-start font-fam font-bold text-xl text-[#00205B] border-b-2 border-[#00205B] py-3">
        NAAC SSR CRITERIA 8
      </h1>
      <div className="app-body-sub flex flex-row gap-3 md:flex-col">
        <div className="flex flex-col w-full md:flex-col">
        
          {data.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className="flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center"
            >
              <p className="box-one font-fam text-lg py-2.5 whitespace-normal">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Criteria8;
