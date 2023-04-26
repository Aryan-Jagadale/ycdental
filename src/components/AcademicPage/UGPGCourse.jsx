import React from "react";
import "../../style/AcdemicPage/academic.css";
import { UgEglibility, UgPgContentWrapper } from "./AcdemicContentWrapper";
import { mdstext,bdstext } from "../../content/Academics/bdsmdstext";


const UGPGCourse = () => {
  return (
    <div id="ugCourse">
      <div className="w-full flex flex-col md:flex-row">

{/*BDS */}
        <section className="w-full md:w-1/2 flex-grow paddingUGPG">
          <div className="bgTrans">
            <h2 className="tracking-wider text-center font-fam   flex-wrap bg-[#00205B] p-3 text-white  text-2xl capatilize h-[30vh] flex items-center justify-center flex-col font-bold">
              <strong className="text-3xl">{bdstext[0].title}</strong>
              {bdstext[0].subTitle}
            </h2>

            <section className="p-3 border-b-4 border-[#00205B] ">
              <p className="font-fam mb-4">
              {bdstext[0].para}
               
              </p>

              <div className="bg-[#E3E7ED] font-fam border-2 rounded border-[#FFD900] ">
                <h5 className=" mx-4 my-4 text-[#800000] font-bold">
              {bdstext[0].eligibilityCriteria}
                </h5>

                {bdstext[0].ugContentEligiBilty.map((item, index) => (
                  <UgEglibility item={item} index={index} />
                ))}
              </div>

              <div className="mt-1 mb-16 font-fam">
                {bdstext[0].ugContent.map((item, index) => (
                  <UgPgContentWrapper item={item} index={index} />
                ))}
              </div>
            </section>
          </div>
        </section>

        {/*MDS */}
        <section className="w-full md:w-1/2 flex-grow paddingUGPG">
          <div className="bgTrans">
            <h2 className="tracking-wider text-center font-fam  flex-wrap bg-[#00205B] p-3 text-white  text-2xl capatilize h-[30vh] flex items-center justify-center flex-col font-bold">
              <strong className="text-3xl">{mdstext[0].title}</strong>
              {mdstext[0].subTitle}
             
            </h2>

            <section className="border-b-4 border-[#00205B]">
              <div className="my-2 font-fam">
                {mdstext[0].pgContent.map((item, index) => (
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
