import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import hod from "../../assets/images/NilimaDean.jpg";
import MDSAdmission from "./MDSAdmission";
import BDSAdmission from "./BDSAdmission";
import Prospectus from "./Prospectus";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DeanData } from "../../content/Admission/Deaninformation";

function HODSection() {
  const [isComponent1Visible, setIsComponent1Visible] = useState(true);

  const handleComponent1Click = () => {
    setIsComponent1Visible(true);
  };

  const handleComponent2Click = () => {
    setIsComponent1Visible(false);
  };

  return (
    <>
      <div id="deanDesk">
        <div className="p-6 md:p-14">
          <section className="flex items-center justify-center content-center flex-col lg:flex-row">
            <div>
              {DeanData.map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: "rgba(187, 186, 186, 0.48)",
                    border: "1px solid #00205B",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "10px 0px",
                    display: "block",
                    margin: "2rem",
                    maxWidth: "500px",
                    padding: "1%",
                    textAlign: "center",
                  }}
                >
                  <LazyLoadImage src={hod} alt="hod" effect="opacity" />
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
                  <h4>{item.name}</h4>
                </div>
              ))}
            </div>

            {DeanData.map((item) => (
              <div
                key={item.id}
                className="w-[100%] font-fam text-lg text-justify"
              >
                <p>{item.paragraph1}</p>
                <br />
                <p>{item.paragraph2}</p>
                <br />
              </div>
            ))}
          </section>

          {DeanData.map((item) => (
            <section>
              <p className="text-lg text-justify font-fam">
                {item.paragraph3}
                <br />
                <br />
                Thank you for your interest , and we look forward to welcoming
                you soon.
              </p>

              <p className="text-lg text-justify font-fam">
                Sincerely,
                <br />
                Dean
                <br />
                <strong>Dr Nilima Rajhans</strong>
                <br />
                {item.education}
              </p>
            </section>
          ))}
        </div>
      </div>
      <Prospectus />
      <div
        id="bdsAdmission"
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
              onClick={handleComponent1Click}
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
              onClick={handleComponent2Click}
            >
              BDS Admission
            </button>
          </Col>
        </Row>
      </div>
      {isComponent1Visible ? <MDSAdmission /> : <BDSAdmission />}
    </>
  );
}

export default HODSection;
