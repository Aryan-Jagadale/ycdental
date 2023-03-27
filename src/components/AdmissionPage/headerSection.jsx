import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../style/AdmissionPage/headerSection.css";
// import doctor from "../../assets/images/attractive-female-doctor.png";

function headerSection() {
  return (
    <div className="headerSection">
      <Row>
        <Col sm md="auto" lg="6" className="inner-box">
          <h1 className="admission-titles">
            2023 <br /> <span className="admission-title">ADMISSION</span>{" "}
            <br /> OPEN NOW
            <br /> <span className="for-bds">For BDS & MDS</span>
          </h1>
          <p className="admission-discription">
            Dental College & Hospital, Ahmednagar . We strongly believe in the
            philosophy of education that has an emphasis on all aspects of
            teaching and learning.
          </p>
        </Col>
        <Col sm md="auto" lg="6" className="inner-box2">
          {/* <img src={doctor} alt="doctor" /> */}
        </Col>
      </Row>
    </div>
  );
}

export default headerSection;
