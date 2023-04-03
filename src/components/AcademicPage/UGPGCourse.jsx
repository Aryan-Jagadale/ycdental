import React from "react";
import "../../style/AcdemicPage/academic.css";
import {
  pgContent,
  ugContent,
  ugContentEligiBilty,
} from "../../utils/ugPgCourse";
import { UgEglibility, UgPgContentWrapper } from "./AcdemicContentWrapper";

const UGPGCourse = () => {
  return (
    <div id="ugCourse">
      <div className="w-full flex flex-col md:flex-row">


        <section className="w-full md:w-1/2 flex-grow paddingUGPG">
          <div className="bgTrans">
            <h2 className="tracking-wider text-center font-fam   flex-wrap bg-[#00205B] p-3 text-white  text-2xl capatilize h-[30vh] flex items-center justify-center flex-col font-bold">
              <strong className="text-3xl">Under Graduate</strong>
              BDS
              {/*<strong className="uppercase" >C</strong>ourse*/}
            </h2>

            <section className="p-3 border-b-4 border-[#00205B] ">
              <p className="font-fam mb-4">
                BDS (Bachelor of Dental Surgery) is a 5-years undergraduate
                program and the only approved professional dental course in
                India. The Bachelor of Dental Surgery (BDS) degree is conferred
                upon successful completion of the four-year academic curriculum
                and the one-year mandatory internship program in dental
                education. You can start working asa dentist after earning your
                degree
              </p>

              <div className="bg-[#E3E7ED] font-fam border-2 rounded border-[#FFD900] ">
                <h5 className=" mx-4 my-4 text-[#800000] font-bold">
                  Eligibility Criteria for BDS Admission in India are as
                  follows:
                </h5>

                {ugContentEligiBilty.map((item, index) => (
                  <UgEglibility item={item} index={index} />
                ))}
              </div>

              <div className="mt-1 mb-16 font-fam">
                {ugContent.map((item, index) => (
                  <UgPgContentWrapper item={item} index={index} />
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="w-full md:w-1/2 flex-grow paddingUGPG">
          <div className="bgTrans">
            <h2 className="tracking-wider text-center font-fam  flex-wrap bg-[#00205B] p-3 text-white  text-2xl capatilize h-[30vh] flex items-center justify-center flex-col font-bold">
              <strong className="text-3xl">Post Graduate</strong>
              MDS
              {/*<strong className="uppercase" >C</strong>ourse*/}
            </h2>

            <section className="border-b-4 border-[#00205B]">
              <div className="my-2 font-fam">
                {pgContent.map((item, index) => (
                  <UgPgContentWrapper item={item} index={index} />
                ))}
              </div>
            </section>
          </div>
        </section>



      </div>
    </div>
  );
};

export default UGPGCourse;
