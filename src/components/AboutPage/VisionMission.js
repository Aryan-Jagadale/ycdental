import React from "react";
import "../../style/AboutPage/VisionMission.css";
import { Row, Col } from "react-bootstrap";
import img1 from "../../assets/images/visionMission.png";
import monitoring from "../../assets/images/monitoring.png";
import leadership from "../../assets/images/leadership.png";

function VisionMission() {
  return (
    <div className="VisionMission">
      <Row>
        <Col sm xs={12} lg={3}>
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
        
            <span className="vision-discription">&#8226; To provide high quality dental education program at undergraduate and postgraduate level.</span><br />
            <span className="mission-discription">&#8226; To facilitate the students to acquire knowledge in basic behavioural and clinical sciences for general practice of dentistry, dental specialties, research and teaching.</span>
          

          <h1 className="vision-title">MISSION</h1>
        </Col>
      </Row>
    </div>
  );
}

export default VisionMission;
