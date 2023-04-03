import React from 'react'
import "./../../style/AboutPage/aboutDetails.css";
import PolicyLeaderHistory from "./PolicyLeaderHistory";


const AboutCommitte = () => {
  return (
    <div className="marginCss" id="committees">
      <section className="py-4 md:p-4  mb-0 flex items-center flex-wrap gap-3 justify-around bg-[#800000]">
        <PolicyLeaderHistory name={"Anti Ragging Committee"} link={"/committee/anti-ragging-commitee"} />
        <PolicyLeaderHistory name={"Parents Teachers Association"} link={"/committee/parent-teacher-commitee"} />
        <PolicyLeaderHistory name={"Committee against Sexual Harassment"} link={"/committee/vishakha-commitee"} />
      </section>
      <section className="py-4 md:p-4  mt-0 mb-0 flex items-center flex-wrap gap-3 justify-around bg-[#800000]">
        <PolicyLeaderHistory name={"Library Committee"} link={"/committee/library-commitee"} />
        <PolicyLeaderHistory name={"Grievance Redressal"} link={"/committee/grievance-committee"} />
        <PolicyLeaderHistory name={"Alumni Committee"} link={"/committee/alumni-commitee"} />
      </section>
      <section className="py-4 md:p-4  mt-0 flex items-center flex-wrap gap-3 justify-around bg-[#800000]">
        <PolicyLeaderHistory name={"Student Welfare Committee"} link={"/committee/student-council-commitee"} />
      </section>


    </div>
  )
}

export default AboutCommitte