import React from "react";
import "../../style/AboutPage/VisionMission.css";
import { Row, Col } from "react-bootstrap";

import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  vissionmissionimage,
  vision,
  mission,
  objectives,
} from "../../content/About/visionMissionjson";

function VisionMission() {
  return (
    <div className="VisionMission" id="visionMission">
      <Row>
        <Col className="VisionMission-imgs" sm xs={18} lg={3}>
          {/*<img src={img1} alt="img" className="VisionMission-img"/>*/}
          {vissionmissionimage.map((item, i) => (
            <LazyLoadImage
              key={i}
              src={item.image}
              alt="vision-pic"
              effect="opacity"
              className="VisionMission-img"
            />
          ))}
        </Col>
        <Col sm className="VisionMissionContent">
          <h1 className="vision-title">VISION</h1>

          {vision.map((items, i) => (
            <span className="vision-discription" key={i}>
              &#8226;  
              {items.visiontext}
              <br />
            </span>
          ))}

          {/* <br />
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
          </span> */}

          <h1 className="mission-title">MISSION</h1>

          {mission.map((items, i) => (
            <span className="vision-discription" key={i}>
              &#8226; {items.missionText}
              <br />
              <br />
            </span>
          ))}

          {/* <span className="vision-discription">
            &#8226; To provide research-oriented quality education, Innovation &
            Entrepreneurship in disciplines of dentistry by inculcating research
            culture amongst all stakeholders.
          </span>
          <br />
          <br />
          <span className="vision-discription">
            &#8226; To provide comprehensive primary and specialized oral
            healthcare to people, especially marginalized groups and disseminate
            knowledge of disease prevention to the public, and continuing dental
            education to professionals.
          </span>
          <br />
          <br />
          <span className="vision-discription">
            &#8226; To build and provide world class infrastructure and
            facilities with quality teachers and to conduct valid academic
            programs of practical and real-world knowledge of dentistry.
          </span>
          <br />
          <br />
          <span className="vision-discription">
            &#8226; To develop holistic competency with global vision, local
            interface, societal orientation, industrial applicability and
            patriotic passions. Effective implementation of quality management
            system with continuous quality checks mechanism through regular
            audits and inspections.
          </span>
          <br /> */}

          <h1 className="mission-title">
            INSTITUTIONAL OBJECTIVES FOR ACADEMIC EXCELLENCE{" "}
          </h1>
          {objectives.map((items, i) => (
            <span className="vision-discription track" key={i}>
              &#8226; {items.objectiveText}
              <br />
              <br />
            </span>
          ))}

          {/* <span className="vision-discription">
            &#8226; To bring out holistic development among the student by
            curricular enrichment and enhancing extension activities.
          </span>
          <br />
          <br />
          <span className="vision-discription">
            &#8226; To prioritize the research and innovation by engaging the
            alumni and staff through incubation center.
          </span> */}
        </Col>
      </Row>
    </div>
  );
}

export default VisionMission;
