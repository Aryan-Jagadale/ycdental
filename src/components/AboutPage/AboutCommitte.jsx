import React from 'react'
import "./../../style/AboutPage/aboutDetails.css";
import PolicyLeaderHistory from "./PolicyLeaderHistory";


const AboutCommitte = () => {
  return (
    <div className="marginCss" id="committees">
    <section className="p-4  mb-0 flex items-center flex-wrap gap-3 justify-around bg-[#800000]">
        <PolicyLeaderHistory name={"Anti Ragging Committee"} link={"/committee/anti-ragging-commitee"} />
        <PolicyLeaderHistory name={"Parents Teachers Association"} link={"/"} />
        <PolicyLeaderHistory name={"Committee against Sexual Harassment"} link={"/"} />
      </section>
      <section className="p-4  mt-0 mb-0 flex items-center flex-wrap gap-3 justify-around bg-[#800000]">
        <PolicyLeaderHistory name={"Library Committee"} link={"/"} />
        <PolicyLeaderHistory name={"Grievance Redressal"} link={"/"} />
        <PolicyLeaderHistory name={"Alumni Committee"} link={"/"} />
      </section>
      <section className="p-4  mt-0 flex items-center flex-wrap gap-3 justify-around bg-[#800000]">
        <PolicyLeaderHistory name={"Student Welfare Committee"} link={"/"} />
      </section>
    
    
    </div>
  )
}

export default AboutCommitte