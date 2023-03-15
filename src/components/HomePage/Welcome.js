import React from "react";
import mainProfile from "./../../assets/images/profileMain.svg";
import subProfile from "./../../assets/images/subProfilePhoto.svg";
import "../../style/HomePage/welcomeComp.css";
import { Row, Col } from "react-bootstrap";

function Welcome() {
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
          To provide comprehensive primary and specialized oral health care to
          people, especially marginalized groups and
        </p>
        <p className="text-base">
          disseminate knowledge of disease prevention to the public, and
          continuing dental education to professionals.
        </p>
      </div>
      <div className="shape">
        <h1 className="shape-title py-7 text-white text-2xl underline underline-offset-8">
          MANAGING COMMITTEE
        </h1>
      </div>
      <img src={mainProfile} alt="" className="welcome-img1" />
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
        <Col sm>
          <div className="subProfile flex flex-col justify-start content-center items-center px-10 py-2">
            <img
              src={subProfile}
              className="subProfile-img w-40"
              alt=""
              srcset=""
            />
            <div className="welcome-subProfile-title">
              <h3
                style={{ fontFamily: "Domine", color: "#800000", lineHeight: "2rem" }}
                className="text-sm"
              >
                Organising <br />President
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Shri.Prashant Gadakh
              </p>
            </div>
          </div>
        </Col>
        <Col sm>
          <div className="subProfile flex flex-col justify-start content-center items-center px-10 py-2">
            <img
              src={subProfile}
              className="subProfile-img w-40"
              alt=""
              srcset=""
            />
            <div className="welcome-subProfile-title">
              <h3
                style={{ fontFamily: "Domine", color: "#800000", lineHeight: "2rem" }}
                className="text-sm"
              >
                Vice President
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Ms Nehal Gadakh
              </p>
            </div>
          </div>
        </Col>
        <Col sm>
          <div className="subProfile flex flex-col justify-start content-center items-center px-10 py-2">
            <img
              src={subProfile}
              className="subProfile-img w-40"
              alt=""
              srcset=""
            />
            <div className="welcome-subProfile-title">
              <h3
                style={{ fontFamily: "Domine", color: "#800000", lineHeight: "2rem" }}
                className="text-sm"
              >
                Managing <br /> Director
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Dr Subhash Devdhe Patil
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="flex flex-row w-screen justify-evenly py-10 px-5">
        <Col sm>
          <div className="subProfile flex flex-col justify-start content-center items-center px-10 py-2">
            <img
              src={subProfile}
              className="subProfile-img w-40"
              alt=""
              srcset=""
            />
            <div className="welcome-subProfile-title">
              <h3
                style={{ fontFamily: "Domine", color: "#800000", lineHeight: "2rem" }}
                className="text-sm"
              >
                Managing <br /> Trustee
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Dr Sharad Samb
              </p>
            </div>
          </div>
        </Col>
        <Col sm>
          <div className="subProfile flex flex-col justify-start content-center items-center px-10 py-2">
            <img
              src={subProfile}
              className="subProfile-img w-40"
              alt=""
              srcset=""
            />
            <div className="welcome-subProfile-title">
              <h3
                style={{ fontFamily: "Domine", color: "#800000", lineHeight: "2rem" }}
                className="text-sm"
              >
                Administrative <br /> Officer
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Dr Shripad Rajhans
              </p>
            </div>
          </div>
        </Col>
        <Col sm>
          <div className="subProfile flex flex-col justify-start content-center items-center px-10 py-2">
            <img
              src={subProfile}
              className="subProfile-img w-40"
              alt=""
              srcset=""
            />
            <div className="welcome-subProfile-title" >
              <h3
                style={{ fontFamily: "Domine", color: "#800000", lineHeight: "2rem" }}
                className="text-sm"
              >
                Dean
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Dr Nilima Rajhans
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <div className="text-neutral-200 FACILITIES  border-[2.5px] drop-shadow-lg border-[#00205B] w-[50%] flex items-center justify-center p-2 md:w-[15vw]">
        <h3 className="text-2xl font-bold uppercase tracking-wide text-[#262626]">
          FACILITIES
        </h3>
      </div>
    </div>
  );
}

export default Welcome;
