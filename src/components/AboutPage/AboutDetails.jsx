import React from "react";
import "./../../style/AboutPage/aboutDetails.css";
import PolicyLeaderHistory from "./PolicyLeaderHistory";
//import RePolicy from "../../assets/images/about/Policy.png"

function AboutDetails() {
  return (
    <div className="marginCss" id="policy">
      <section className="p-4 flex items-center flex-wrap gap-3 justify-around bg-[#800000]">
        <PolicyLeaderHistory name={"Anti Ragging Committee"} link={"/"} />
        <PolicyLeaderHistory name={"Parents Teachers Association"} link={"/"} />
        <PolicyLeaderHistory name={"Committee against Sexual Harassment"} link={"/"} />
      </section>
      <section className="p-4 flex items-center flex-wrap gap-3 justify-around bg-[#800000]">
        <PolicyLeaderHistory name={"Library Committee"} link={"/"} />
        <PolicyLeaderHistory name={"Grievance Redressal Committee"} link={"/"} />
        <PolicyLeaderHistory name={"Alumni Committee"} link={"/"} />
      </section>
      <section className="p-4 flex items-center flex-wrap gap-3 justify-around bg-[#800000]">
        <PolicyLeaderHistory name={"Student Welfare Committee"} link={"/"} />
      </section>
      <section className="p-4 flex items-center flex-wrap gap-3 justify-around bg-[#F2F2F2]">
        <PolicyLeaderHistory name={"Code of Conduct"} link={"/"} />
        <PolicyLeaderHistory name={"Research Policy"} link={"/"} />
        <PolicyLeaderHistory name={"Mentoring Policy"} link={"/"} />
      </section>
      <section className="p-4 flex items-center flex-wrap gap-3 justify-around bg-[#F2F2F2]">
        <PolicyLeaderHistory name={"PTA Policy"} link={"/"} />
        <PolicyLeaderHistory name={"Patient Safety"} link={"/"} />
        <PolicyLeaderHistory name={"E-governance"} link={"/"} />
      </section>
    </div>
  );
}

export default AboutDetails;
