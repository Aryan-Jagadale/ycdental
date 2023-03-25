import React from "react";
import "./../../style/AboutPage/aboutDetails.css";
import PolicyLeaderHistory from "./PolicyLeaderHistory";

function AboutDetails() {
  return (
    <div>
      < div className=" pt-4 pb-4 border-t-2 border-red-600" id="policy" >
        <div
          style={{ backgroundColor: "#D9D9D9" }}
          className="mt-4 flex lg:h-60 font-fam items-center justify-center flex-col lg:flex-row  "
        >
          <PolicyLeaderHistory name={"Policy / Governance"} link={"VIEW MORE"} />
          <PolicyLeaderHistory name={"History"} link={"VIEW MORE"} />
          <PolicyLeaderHistory name={"Leadership"} link={"VIEW MORE"} />
        </div>

      </div >
      <div className="" id="policy" >
        <div
          style={{ backgroundColor: "#D9D9D9" }}
          className="mt-4 flex lg:h-60 font-fam items-center justify-center flex-col lg:flex-row "
        >
          <PolicyLeaderHistory name={"Code of conduct"} link={"VIEW MORE"} />
          <PolicyLeaderHistory name={"History"} link={"VIEW MORE"} />
          <PolicyLeaderHistory name={"Leadership"} link={"VIEW MORE"} />
        </div>

      </div>
    </div >

  );
}

export default AboutDetails;
