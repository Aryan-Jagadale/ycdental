import React from "react";
import "../../style/AboutPage/VisionMission.css";
import { Row, Col } from "react-bootstrap";
import img1 from "../../assets/images/visionMission.png";
import monitoring from "../../assets/images/monitoring.png";
import leadership from "../../assets/images/leadership.png";

function VisionMission() {
  return (
    <div className="VisionMission" id="visionMission">
      <Row>
        <Col className="VisionMission-imgs" sm xs={12} lg={3}>
          <img src={img1} alt="img" />
          <div className="circle-img">
            <img src={monitoring} alt="monitoring" />
          </div>
          <div className="circle-img">
            <img src={leadership} alt="leadership" />
          </div>
        </Col>
        <Col sm className="VisionMissionContent">
          <h1 className="vision-title">VISION</h1>

          <span className="vision-discription">
            &#8226; To provide high quality dental education program at
            undergraduate and postgraduate level.
          </span>
          <br />
          <br />
          <span className="vision-discription">
            &#8226; To facilitate the students to acquire knowledge in basic
            behavioural and clinical sciences for general practice of dentistry,
            dental specialties, research and teaching.
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
        </Col>
      </Row>
    </div>
  );
}

export default VisionMission;
