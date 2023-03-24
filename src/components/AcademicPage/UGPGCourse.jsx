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
        <section className="w-full md:w-1/2 p-5 border-b-2 ">
          <div className="bgTrans">
            <section className="h-[40vh] hidden md:block imgugCourse ">
              {/*<img
                className="h-full w-full object-cover"
                src={
                  "https://plus.unsplash.com/premium_photo-1661963922072-b32afe6248d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
                alt=""
              />*/}
              
            </section>

            <h2 className="block md:hidden tracking-wider text-center font-fam m-3 flex-wrap bg-white p-3  text-2xl capatilize text-[#00205B] font-bold">
                <strong className="uppercase text-4xl">U</strong>nder.
                <strong className="uppercase text-4xl">G</strong>raduate
                Course
                <br />
                {/*<strong className="uppercase" >C</strong>ourse*/}
              </h2>

            <section className="p-3 border-b-4 border-[#00205B]">
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

              <div className="my-1 font-fam">
                {ugContent.map((item, index) => (
                  <UgPgContentWrapper item={item} index={index} />
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="w-full md:w-1/2 p-5 ">
          <div className="bgTrans">
            <section className="h-[40vh] hidden md:block  imgpgCourse">
              {/*<img
                className="h-full w-full object-cover"
                src={
                  "https://plus.unsplash.com/premium_photo-1661963922072-b32afe6248d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
                alt=""
              />*/}
            </section>
            <h2 className="block md:hidden tracking-wider text-center font-fam m-3 flex-wrap bg-white p-3  text-2xl capatilize text-[#00205B] font-bold">
                <strong className="uppercase text-4xl">P</strong>ost.
                <strong className="uppercase text-4xl">G</strong>raduate
                Course
                <br />
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
