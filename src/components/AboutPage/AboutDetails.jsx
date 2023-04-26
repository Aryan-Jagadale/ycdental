import React from "react";
import "./../../style/AboutPage/aboutDetails.css";
import PolicyLeaderHistory from "./PolicyLeaderHistory";
import { policy } from "../../content/About/Policy";

function AboutDetails() {
  return (
    <div className="marginCss" id="policy">
      <section className=" py-4 md:p-4 flex items-center flex-wrap gap-3 justify-around bg-[#F2F2F2]">
        {policy.map((item, i) => (
          <PolicyLeaderHistory name={item.name} pdf={item.pdf} key={i}/>
        ))}
      </section>
    </div>
  );
}

export default AboutDetails;
