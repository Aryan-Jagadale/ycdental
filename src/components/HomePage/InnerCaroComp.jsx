import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const InnerCaroComp = ({ left, right }) => {
  return (
    
      <div className="carosuel-bg bg-[url('https://res.cloudinary.com/ddaalka6i/image/upload/v1679145925/buil_1_afzg2u.jpg')]">
        <div className="h-[100%] w-[100%] md:h-[80%] md:w-2/3 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 border-4 border-[#800000] backdrop-blur-sm">
          <section className="p-4 h-full flex items-center justify-between relative">
            <div className="h-full w-full md:p-4">
              <LazyLoadImage
                className="h-full w-full collageImg1"
                src={left}
                alt="dentist1"
                effect="opacity"
              />
            </div>
           
            <div className="h-full w-full md:p-4">
              <LazyLoadImage
                className="h-full w-full collageImg3"
                src={right}
                alt="dentist2"
                effect="opacity"
              />
            </div>
          </section>
          
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
    

  
  );
};

export const InnerCaroComp1 = ({backImg }) => {
  return (
    <>
      <div className="carosuel-bg">
      <LazyLoadImage src={backImg} className="h-full w-full object-cover" alt="Banner" effect="opacity" />
        
      </div>
    </>

  
  );
};