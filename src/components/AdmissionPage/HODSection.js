import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import hod from "../../assets/images/hod.png";


function HODSection() {

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          backgroundColor: "rgba(187, 186, 186, 0.48)",
          border: "1px solid #00205B",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(20px)",
          borderRadius: "10px 0px",
          display: "block",
          margin: "auto",
          maxWidth: "max-content",
          padding: "1%",
          marginTop: "3%",
        }}
      >
        <img src={hod} alt="hod" />
        <h3
          style={{
            marginTop: "5%",
            fontFamily: "Domine",
            fontWeight: "700",
            fontStyle: "normal",
          }}
        >
          DEAN
        </h3>
        <h4>Dr. Gorde Sangam, M.D.S</h4>
      </div>
      <p
        style={{
          textAlign: "start",
          fontFamily: "Domine",
          fontWeight: "400",
          fontStyle: "normal",
          padding: "3%",
        }}
      >
        The Department of Oral Medicine & Radiology Department was established
        in 2008 with intake of 60 students. The department has good
        infrastructure with well-established laboratories. The department has
        experienced and dedicated faculties who give personal attention to each
        and every individual student. The department emphasizes on effective
        teaching learning process including project based learning using modern
        tools and technologies. Department is working hard to improve upon the
        quality of education and the students overall performance in the era of
        rapidly changing technology. Department of Oral Medicine and Radiology
        is unique in that it combines Oral Medicine and Radiology.{" "}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          backgroundColor: "#FFD900",
          padding: "1%",
        }}
      >
        <Row>
          <Col>
            <button
              style={{
                width: "max-content",
                float: "right",
                padding: "1%",
                background: "#800000",
                color: "white",
                border: "1px solid rgba(128, 0, 0, 0.5)",
                backdropFilter: "blur(7.5px)",
                fontFamily: "Domine",
                fontWeight: "400",
                fontStyle: "normal",
              }}

              
            >
              MDS Admission
            </button>
          </Col>
          <Col>
            <button
              style={{
                width: "max-content",
                float: "left",
                padding: "1%",
                background: "#800000",
                color: "white",
                border: "1px solid rgba(128, 0, 0, 0.5)",
                backdropFilter: "blur(7.5px)",
                fontFamily: "Domine",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              BDS Admission
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HODSection;
