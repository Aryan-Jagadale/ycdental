import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../style/AdmissionPage/admission.css";

function MDSAdmission() {
  return (
    <div className="admissionSection">
      <div className="short-info-box">
        <h1 className="admission-hedline">Master of Dental Surgery (MDS)</h1>
        <p className="admissionPera">
          Master of Dental Surgery (MDS) course at Late Shri Yashwantrao Chavan
          Memorial Medical & Rural Development Foundation’s Dental College,
          Ahmednagar is recognised by Dental Council of India and is affiliated
          to Maharashtra University of Health Sciences, Nashik. Hence the Rules
          & Regulations of the Maharashtra University of Health Sciences, Nashik
          in regard to the syllabi and conduct of examination shall apply.
        </p>
        <Row>
          <Col sm className="admission-col-1">
            <h1 className="admission-hedline-2">
              No. Of Seats: 16 <br />
              Eligibility criteria:
            </h1>
            <p className="admissionPera">
              To be eligible for this course, the candidate has to be a Bachelor
              of Dental Science graduate from a recognised Dental College in
              India with a minimum of 50%.
            </p>
            <br />
            <h1 className="admission-hedline-2">Admission Process:</h1>
            <p className="admissionPera">
              Admission to MDS Course at Yashwantrao Chavan Dental College is
              completed through a single Common Entrance test conducted by NEET
              (National Eligibity cum Entrance Test).
            </p>
          </Col>
          <Col sm className="admission-col-2">
            <h1 className="admission-hedline-2">Merit List</h1>
            
            <h1 className="admission-hedline-2">Fee Structure</h1>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MDSAdmission;
