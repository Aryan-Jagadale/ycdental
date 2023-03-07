import React from "react";
import "../../style/HomePage/about.css";
import { Row, Col } from "react-bootstrap";
import blab from "../../assets/images/blab.png";
import clab from "../../assets/images/clab.png";
import plab from "../../assets/images/plab.png";
import it from "../../assets/images/it.png";

function AboutComp() {
  return (
    <div className="about-section">
      <h1 className="about-headline">YCDC Ahmednagar BDS & MDS</h1>
      <Row>
        <Col>
          <div className="about-box">
            <img className="about-img" src={blab} alt="img" /><br />
            <h1 className="about-headline2">Biochemistry Lab</h1>
          </div>
        </Col>
        <Col>
          <div className="about-box">
            <img className="about-img" src={plab} alt="img" />
            <h1 className="about-headline2">Pharmacology Lab</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="about-box">
            <img className="about-img" src={it} alt="img" />
            <h1 className="about-headline2">Internet Terminal</h1>
          </div>
        </Col>
        <Col>
          <div className="about-box">
            <img className="about-img" src={clab} alt="img" />
            <h1 className="about-headline2">Pre-clinical Laboratory Lab</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AboutComp;
