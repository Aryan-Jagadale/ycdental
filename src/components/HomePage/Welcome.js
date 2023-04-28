import React, { useState } from "react";
import mainProfile from "./../../assets/images/profileMain.svg";

import {
  managingCommittee1,
  managingCommittee2,
} from "../../content/Home/ManagingCommittee";
import {
  welcomeContent,
  welcomeContent1,
} from "../../content/Home/welcomeText";
// import managingDirector from "./../../assets/images/managingCommittee/subhashDevdhe.webp";
// import managingTrustee from "./../../assets/images/managingCommittee/sharadSamab.webp";
// import vicePrecident from "./../../assets/images/managingCommittee/nehaGdak.webp";
// import organisingPresident from "./../../assets/images/managingCommittee/Organising-President.webp";

import "../../style/HomePage/welcomeComp.css";
import { Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Welcome() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="welcome-section">
      <div
        style={{ fontFamily: "Domine", color: "#032F6E" }}
        className="flex-1 justify-center content-center text-center my-3 py-3 mx-5"
      >
        <h1 className="text-3xl font-bold mb-2">
          Welcome to Dental College, Ahmednagar
        </h1>
        <p className="text-base mb-1">
          Welcome to Shri. Yashwantrao Chavan Memorial Medical and Rural
          Development Foundation 's Dental College
        </p>
        {welcomeContent.map((items, i) => (
          <p className="text-base">
            key={i},{items.paragraph}
            <br />
            <br />
          </p>
        ))}

        <br />
        <p
          className="text-base cursor-pointer underline font-semibold"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read Less" : "Read More"}
        </p>

        {showMore ? (
          <>
            {welcomeContent1.map((items) => (
              <p className="text-base">
                {items.paragraph1}
                <br />
                <br />
              </p>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
      <div className="shape">
        <h1 className="shape-title py-7 text-white text-2xl underline underline-offset-8">
          MANAGING COMMITTEE
        </h1>
      </div>
      <LazyLoadImage
        effect="opacity"
        src={mainProfile}
        alt="President Hon. Yashwantrao Gadakh"
        className="welcome-img1"
      />
      <div className="welcome-img1-title">
        <h1
          style={{ fontFamily: "Domine", color: "#800000" }}
          className="text-2xl"
        >
          President
        </h1>
        <p
          style={{ fontFamily: "Domine", color: "#00205B" }}
          className="text-base"
        >
          Hon. Yashwantrao Gadakh
        </p>
      </div>

      <Row className="flex flex-row w-screen justify-evenly py-10 px-5">
        <Row sm>
          {managingCommittee1.map((item) => (
            <div className="subProfile flex flex-row justify-start content-center items-center px-10 py-2">
              <LazyLoadImage
                src={item.img}
                className="subProfile-img w-40 border-4 border-white rounded-full"
                alt="Shri.Prashant Gadakh"
                effect="opacity"
              />
              <div className="welcome-subProfile-title">
                <h3
                  style={{
                    fontFamily: "Domine",
                    color: "#800000",
                    lineHeight: "2rem",
                  }}
                  className="text-sm"
                >
                  {item.position} <br /> {item.position1}
                </h3>
                <p
                  style={{ fontFamily: "Domine", color: "#00205B" }}
                  className="text-xs"
                >
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </Row>
      </Row>

      <Row className="flex flex-row w-screen justify-evenly py-10 px-5">
        <Row sm>
          {managingCommittee2.map((items) => (
            <div className="subProfile flex flex-col justify-start content-center items-center px-10 py-2">
              <LazyLoadImage
                src={items.img}
                className="subProfile-img w-40 border-4 border-white rounded-full "
                alt="Dr Sharad Samb"
                effect="opacity"
              />
              <div className="welcome-subProfile-title">
                <h3
                  style={{
                    fontFamily: "Domine",
                    color: "#800000",
                    lineHeight: "2rem",
                  }}
                  className="text-sm"
                >
                  {items.position} <br /> {items.position1}
                </h3>
                <p
                  style={{ fontFamily: "Domine", color: "#00205B" }}
                  className="text-xs"
                >
                  {items.name}
                </p>
              </div>
            </div>
          ))}
        </Row>
      </Row>
    </div>
  );
}

export default Welcome;
