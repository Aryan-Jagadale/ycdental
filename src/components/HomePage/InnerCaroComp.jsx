import React from "react";
//import Banner1 from "../../assets/images/banner1.png";
//import Banner2 from "../../assets/images/banner2.png";
import Dent1 from "../../assets/images/dent1.png";
import Dent2 from "../../assets/images/dent2.png";

const InnerCaroComp = () => {
  return (
    <>
      <div className="carosuel-bg">
      <div className="h-2/3 w-2/3 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 border-4 border-[#800000] backdrop-blur-sm">
      <section className="p-4 h-full flex items-center justify-between relative">
        <div className="h-full w-full p-4">
          <img className="h-full w-full" src={Dent1} alt="dentist1" />
        </div>
        <div className="h-full w-full p-4">
          <img className="h-full w-full" src={Dent2} alt="dentist2" />
        </div>
      </section>
      {/*Strip */}
      <section
        className="bg-[#800000] h-[20%] w-full absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 flex items-center justify-center"
        style={{
          background: "rgba(128, 0, 0, 0.68)",
          backdropFilter: "blur(5px)",
        }}
      >
        <span className="text-[#FFD900] font-bold font-2xl font-fam uppercase tracking-wide">
          More than Dentistry
        </span>
      </section>
    </div>
      </div>

    </>
    
    // <div>
    // <div className="p-2 relative">
    //   <section className="h-1/2 w-[100%] ">
    //     <img src={Banner1} className="h-full w-full" alt="banner1" />
    //   </section>
    //   <section className="h-1/2 w-[100%] ">
    //     <img src={Banner2} className="h-full w-full" alt="banner2" />
    //   </section>
    // </div>
    // <div className="h-2/3 w-2/3 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 border-4 border-[#800000] backdrop-blur-sm">
    //   <section className="p-4 h-full flex items-center justify-between relative">
    //     <div className="h-full w-full p-4">
    //       <img className="h-full w-full" src={Dent1} alt="dentist1" />
    //     </div>
    //     <div className="h-full w-full p-4">
    //       <img className="h-full w-full" src={Dent2} alt="dentist2" />
    //     </div>
    //   </section>
    //   {/*Strip */}
    //   <section
    //     className="bg-[#800000] h-[20%] w-full absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 flex items-center justify-center"
    //     style={{
    //       background: "rgba(128, 0, 0, 0.68)",
    //       backdropFilter: "blur(5px)",
    //     }}
    //   >
    //     <span className="text-[#FFD900] font-bold uppercase tracking-wide">
    //       More than Dentistry
    //     </span>
    //   </section>
    // </div>
    // </div>
      


    
  );
};

export default InnerCaroComp;
