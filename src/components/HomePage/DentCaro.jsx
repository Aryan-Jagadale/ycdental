import React from "react";
import Dent1 from "../../assets/images/dent1.png";
import Dent2 from "../../assets/images/dent2.png";

const DentCaro = () => {
  return (
    <>
      <section className="p-4 h-full flex items-center justify-between relative">
        <div className="h-full w-full p-4">
          <img className="h-full w-full" src={Dent1} alt="dentist1" />
        </div>
        <div className="h-full w-full p-4">
          <img className="h-full w-full" src={Dent2} alt="dentist2" />
        </div>
      </section>

      <section
        className="bg-[#800000] h-[20%] w-full absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 flex items-center justify-center"
        style={{
          background: "rgba(128, 0, 0, 0.68)",
          backdropFilter: "blur(5px)",
        }}
      >
        <span className="text-[#FFD900] font-bold uppercase tracking-wide">
          More than Dentistry
        </span>
      </section>
    </>
  );
};

export default DentCaro;
