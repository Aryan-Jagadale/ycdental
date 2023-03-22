import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../style/GalleryPage/gallerySection.css";
import img1 from "../../assets/images/galleryImg.png";
// import datas from "../../utils/GalleryData";


function GallerySection() {
  return (
    <div className="gallerySection">
        <div className="galleryContent">
        <h1 className="galleryTitel">Dentist Day</h1>
        <p className="galleryDiscription">
          Every year March 6th is observed as National Dentist Day, created to
          say thank you to all dentists celebrating for their contribution.
          There are various dental specialities and on this special occasion, it
          is better to know and recognise them. Dentists are often referred to
          as dental surgeons or family dentist. They are specialised in treating
          oral health; it is a comprehensive integrated approach in a field to
          overall health.
        </p>
      </div>

      <Row className="galleryImgs">
        <Col className="leftSide" lg={"3"}>
          6th
          <br /> March
          <br /> 2<br /> k<br /> 2<br /> 3
        </Col>
        <Col className="rightSide" lg={"9"}>
          <div className="imgbox">
            <img src={img1} alt="img1" />
          </div>
          <div className="imgbox">
            <img src={img1} alt="img1" />
          </div>
          <div className="imgbox">
            <img src={img1} alt="img1" />
          </div>
          <div className="imgbox">
            <img src={img1} alt="img1" />
          </div>
          <div className="imgbox">
            <img src={img1} alt="img1" />
          </div>
          <div className="imgbox">
            <img src={img1} alt="img1" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default GallerySection;
