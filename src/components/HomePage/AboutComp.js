import React from "react";
import "../../style/HomePage/about.css";
import { Row, Col } from "react-bootstrap";
import blab from "../../assets/images/blab.png";
import clab from "../../assets/images/clab.png";
import plab from "../../assets/images/plab.png";
import it from "../../assets/images/it.png";
import campus from "../../assets/icons/campusicon.png";
import hostel from "../../assets/icons/hostelicon.png";
import library from "../../assets/icons/libraryicon.png";

function AboutComp() {
  return (
    <div className="about-section">
      <h1 className="about-headline text-2xl">YCDC Ahmednagar BDS & MDS</h1>
      <div className="labs">
        <Row>
          <Col>
            <div className="about-box">
              <img className="about-img" src={blab} alt="img" />
              <br />
              <h1 className="about-headline2 text-xl">Biochemistry Lab</h1>
            </div>
          </Col>
          <Col>
            <div className="about-box">
              <img className="about-img" src={plab} alt="img" />
              <h1 className="about-headline2 text-xl">Pharmacology Lab</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="about-box">
              <img className="about-img" src={it} alt="img" />
              <h1 className="about-headline2 text-xl">Internet Terminal</h1>
            </div>
          </Col>
          <Col>
            <div className="about-box">
              <img className="about-img" src={clab} alt="img" />
              <h1 className="about-headline2 text-xl">Pre-clinical Laboratory Lab</h1>
            </div>
          </Col>
        </Row>
      </div>
      <div className="cards">
        <Row>
          <Col sm>
            <div id="card1" className="card">
              <img className="about-icon" src={campus} alt="icon" />
              <br />
              <h1 className="about-card-title text-2xl font-bold">CAMPUS</h1>
            </div>
            <div className="infocard">
              The Campus is built over 5 acres land and is a safe haven of lush
              greenery, pollution free, with plenty of fresh air, conducive to a
              student life.
            </div>
          </Col>
          <Col sm>
            <div id="card2" className="card">
              <img className="about-icon" src={hostel} alt="icon" />
              <br />
              <h1 className="about-card-title text-2xl font-bold">HOSTEL</h1>
            </div>
            <div className="infocard">
              The college takes pride in its separate Hostel facilities for
              girls and boys within the college campus.
            </div>
          </Col>
          <Col sm>
            <div id="card3" className="card">
              <img className="about-icon" src={library} alt="icon" />
              <br />
              <h1 className="about-card-title text-2xl font-bold">LIBRARY</h1>
            </div>
            <div className="infocard">
              The Central library is housed in a well-furnished, illuminated and
              da reading room with a seating capacity of more than 100 Students.
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutComp;
