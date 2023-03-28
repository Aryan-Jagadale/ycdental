import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import hod from "../../assets/images/hod.png";
import MDSAdmission from "./MDSAdmission";
import BDSAdmission from "./BDSAdmission";
import Prospectus from "./Prospectus";
//import { LazyLoadImage } from "react-lazy-load-image-component";

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
        <div
          className=""
          style={{
            padding: "3.5rem",
          }}
        >
          <section className="flex items-center justify-center flex-col lg:flex-row">
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
                textAlign: "center",
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
              <h4>Dr. Nilima Rajhans</h4>
            </div>

            <div className="w-[100%] lg:w-[60%] font-fam text-lg">
              <p>
                I am delighted to welcome you to the wonderful world of
                Dentistry at Late Shri. Yashwantrao Chavan Memorial Medical and
                Rural Development Foundation 's Dental College ,
                Ahmednagar.Making th e choice to pursue a career in D entistry
                requires significant intellectual capacity and emotional
                dedication. We are extremely proud that our college is a
                pioneering institution striving to work with the motto of
                providing dental healthcare facilities for masses, in particular
                the rural and depraved population of Maharashtra.
              </p>

              <br />

              <p>
                Founded in 2007 and running under the guidance of Hon.
                Yashwantrao Gadakh and Shri. Prashant Gadakh ; this prestigious
                institute welcomes students who are passionate about Dentistry
                as an art and science while being dedicated to promoting oral
                health with empathy . W e respect and value a commitment to
                quality dental care while being cognizant of our social
                responsibilities. We assis t our students in acquiring the
                information and abilities required for research that improves
                dental practi c e. To mould students into advocates for dental
                health, our curriculum incorporates innovative learning
                methodologies. Each student is a diamond in t he making, and we
                bring out their unique brilliance by honing talents through a
                variety of conferences, professional development courses, and
                multidisciplinary resources.
              </p>

              <br />
            </div>
          </section>

          <section>
            <p className="text-lg text-justify font-fam">
              At YCDC, we acknowledge that dental health is essential to overall
              health . Hence, we are zealous about inclusive and comprehensive
              dentistry through our cutting - edge educational programmes;
              practical research, first - rate patient care, and unique
              community outreach initiatives. Moreover , we are committed to our
              core values of skill - based t raining, holistic development, and
              enrichment of students, a s well as contributing to community
              development in our quest for excellence. Whether you are a
              prospective student with an interest in building your future or a
              potential faculty who wants to make a difference by working with
              us ; I am confident that you will discover why YCDC is the right
              place to be.
              <br />
              <br />
              Thank you for your interest , and we look forward to welcoming you
              soon.
            </p>

            <p className="text-lg text-justify font-fam">
              Sincerely,
              <br />
              Dean
              <br />
              <strong>Dr Nilima Rajhans</strong>
              <br />
              BDS, MDS, PhD
            </p>
          </section>
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
