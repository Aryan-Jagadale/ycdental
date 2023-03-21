import React from "react";
import "../../style/AcdemicPage/academic.css";


const Academic = () => {
  return (
    <div>
      <section className="acdemicsBg" id="">
        <div className="flex items-center justify-center w-full p-0">
          <div className="w-full md:w-[30%] m-3 md:m-5">
            <div className=" hidden md:block w-full border-l-2 border-[#FFD900]">
              <section className="px-6 flex items-center gap-3 mb-4">
                <h1 className=" text-lg md:text-5xl   font-bold font-fam text-white tracking-wide pl-12">
                  Our
                  <br />
                  Academics
                </h1>
              </section>
            </div>

            <div className="flex items-center justify-center h-[30vh] md:hidden">
              <h1 className=" text-3xl  font-bold font-fam text-white tracking-wide pl-12">
                Our Academics
              </h1>
            </div>
          </div>

          <div className="md:w-[70%]  hidden md:block academicStyle">
            {/*<img src={softwareApplication} alt="MUHS banner" />*/}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Academic;
