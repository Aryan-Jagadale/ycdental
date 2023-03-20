import React from "react";
import "../../style/HomePage/recognition.css";
import { recognitionContent } from "../../utils/recognition";
import RecognitionInner from "./RecognitionInner";

function Recognition() {

  return (
    <div className="flex flex-column my-5">
      <div className="row-one lg:mb-20 sm:mb-2">
        <div className="text-neutral-200 lable-container border-[2.5px] drop-shadow-lg border-[#00205B] flex items-center justify-center ">
          <h3 className="text-2xl px-4 py-2 font-bold flex items-center justify-center uppercase tracking-wide text-[#262626] font-fam">
            RECOGNITION
          </h3>
        </div>
      </div>
      <div className="flex flex-column justify-center border-cyan-900 lg:mx-20 ">
        <div className="flex w-full flex-col lg:flex-row justify-center items-center lg:justify-around  ">


          {
            recognitionContent.map((item) => (
              <RecognitionInner key={item.title} img={item.imG} title={item.title} />
            ))
          }
        </div>
        <div className="flex w-full flex-col lg:flex-row justify-center items-center font-fam font-bold lg:justify-around mt-4">
          <div className="sub-card-red">
            <p>
              First of its kind CBCT machine for diagnosis and treatment
              planning
            </p>
          </div>
          <div className="sub-card-blue">
            <p>
              Over 400+ research papers and books published by Faculty and
              Students .
            </p>
          </div>
          <div className="sub-card-red">
            <p>
              Recognized as Innovation and Incubation Centre (IIC) by Govt. of
              India
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col lg:flex-row justify-center font-fam font-bold items-center lg:justify-around ">
          <div className="sub-card-blue">
            <p>
              Our students are prize winners at multiple extracurricular state
              level competitions
            </p>
          </div>
          <div className="sub-card-red">
            <p>
              Registered as Local Chapter for SWAYAM by Govt. of India & College
              is aspirant for NAAC certification
            </p>
          </div>
          <div className="sub-card-blue">
            <p>
              Smart board equipped classrooms with Wi-Fi connectivity for high
              tech learning experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recognition;
