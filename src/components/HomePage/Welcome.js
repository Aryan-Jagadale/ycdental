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
                style={{ fontFamily: "Domine", color: "#800000" }}
                className="text-sm"
              >
                President
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Hon. Yashwantrao Gadakh
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
                style={{ fontFamily: "Domine", color: "#800000" }}
                className="text-sm"
              >
                President
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Hon. Yashwantrao Gadakh
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
                style={{ fontFamily: "Domine", color: "#800000" }}
                className="text-sm"
              >
                President
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Hon. Yashwantrao Gadakh
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Welcome;
