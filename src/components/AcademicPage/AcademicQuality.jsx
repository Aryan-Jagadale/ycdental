import React from "react";
import "../../style/AcdemicPage/academicQuality.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { data1, data2 } from "../../content/Academics/academicQuality";



function AcademicQuality() {
  return (
    <div className="p-0 m-0" id="academicQuality">
      <div className="w-full h-16 bg-[#800000] border-[2.5px]">
        <h3 className="text-center font-bold flex items-center justify-center text-neutral-200 text-2xl pt-3 font-fam">
          {" "}
          Academic Quality{" "}
        </h3>
      </div>
      <div className="bgImg flex flex-col justify-center items-center flex-wrap border-[4px]">
        <div className="flex flex-row justify-around w-full flex-wrap my-6 gap-5 md:gap-0">
          {data1.map((student, i) => (
            <div
              key={i}
              className="cardOne flex flex-col items-start font-fam font-bold px-2.5 py-2 w-60 "
            >
                <LazyLoadImage
                  effect="opacity"
                  src={student.studentProfile}
                  alt={student.studenName}
                  className="rounded-sm border-2 border-yellow-300 w-full h-full object-contain"
                />

              <div className="text-center justify-center font-fam text-neutral-200 px-2 py-2">
                <h1 className="studName">{student.studenName}</h1>
                <p className="studContent text-xs"> {student.studentTitle} ,</p>
                <p className="text-xs px-4">
                  {student.studentBatch}
                  {student.studentRank} Rank in University
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row w-full justify-around flex-wrap my-6 gap-5 md:gap-0">
          {data2.map((student, i) => (
            <div
            key={i}
            className="cardOne flex flex-col items-start font-fam font-bold px-2.5 py-2 w-60 "
          >
              <LazyLoadImage
                effect="opacity"
                src={student.studentProfile}
                alt={student.studenName}
                className="rounded-sm border-2 border-yellow-300 w-full h-full object-contain"
              />

            <div className="text-center justify-center font-fam text-neutral-200 px-2 py-2">
              <h1 className="studName">{student.studenName}</h1>
              <p className="studContent text-xs"> {student.studentTitle} ,</p>
              <p className="text-xs px-4">
                {student.studentBatch}
                {student.studentRank} Rank in University
              </p>
            </div>
          </div>
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default AcademicQuality;
