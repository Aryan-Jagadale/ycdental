import React from "react";
import "../../style/AboutPage/VisionMission.css";
import { Row, Col } from "react-bootstrap";
import img1 from "../../assets/images/img1.jpeg";
//import { LazyLoadComponent } from "react-lazy-load-image-component";
import { LazyLoadImage } from "react-lazy-load-image-component";

function VisionMission() {
  return (
    <div className="VisionMission" id="visionMission">
      <Row>
        <Col className="VisionMission-imgs" sm xs={18} lg={3}>
        
  {/*<img src={img1} alt="img" className="VisionMission-img"/>*/}
          <LazyLoadImage  src={img1} alt="vision-pic" effect="opacity" className="VisionMission-img"  />  

        </Col>
        <Col sm className="VisionMissionContent">
          <h1 className="vision-title">VISION</h1>

          <span className="vision-discription">
            &#8226; To provide high quality dental education program at
            undergraduate and postgraduate level.
          </span>
          <br />
          <br />
          <span className="vision-discription track">
            &#8226; To facilitate students in acquiring knowledge of basic
            behavioural and clinical sciences for general practice of dentistry,
            dental specialties, research and teaching.
          </span>
          <br />
          <br />
          <span className="vision-discription">
            &#8226; To provide comprehensive primary and specialized oral health
            care to people, especially marginalized groups and disseminate
            knowledge of disease prevention to the public, and continuing dental
            education to professionals.
          </span>

          <h1 className="mission-title">MISSION</h1>

          <span className="vision-discription">
            &#8226; To build and provide world class infrastructure and
            facilities with quality teachers and to conduct valid academic
            programs of practical and real world knowledge of dentistry.
          </span>
          <br />
          <br />
          <span className="vision-discription">
            &#8226; Develop holistic competence with global vision, local
            interface, societal orientation, industrial applicability and
            patriotic passions.
          </span>
          <br />
          <br />
          <span className="vision-discription">
            &#8226; To transfer scientific knowledge to achieve professional
            skill and personal qualities of international standard.
          </span>
          <br />
          <br />
          <span className="vision-discription">
            &#8226; To create infrastructure and hospital facilities to serve
            the public including free service to the poor and needy.
          </span>
          <br />
          <br />
          <span className="vision-discription">
            &#8226; Provide regular value based education to the students.
          </span>
        </Col>
      </Row>
    </div>
  );
}

export default VisionMission;
