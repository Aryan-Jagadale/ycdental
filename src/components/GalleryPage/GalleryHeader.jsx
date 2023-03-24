import React from "react";
import "../../style/GalleryPage/galleryHeader.css";
import { Col, Row } from "react-bootstrap";
import toothbrush from "../../assets/images/toothbrush.png";
import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";
import gallery3 from "../../assets/images/gallery3.png";

function GalleryHeader() {
  return (
    <div className="GalleryHeader">
      <Row>
        <Col lg={4}><img src={toothbrush} alt="img" /></Col>
        <Col lg={8} className="galleryRight">
          <img className="galleryImgs" src={gallery1} alt="img" />
          <img className="galleryImgs" src={gallery2} alt="img" />
          <img className="galleryImgs" src={gallery3} alt="img" />
        </Col>
      </Row>
    </div>
  );
}

export default GalleryHeader;
