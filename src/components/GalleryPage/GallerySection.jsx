import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../style/GalleryPage/gallerySection.css";
import datas from "../../utils/GalleryData";

function GallerySection() {
  return (
    <div className="gallerySection">
      {datas.map((item) => (
        <div key={item.id}>
          <div className="galleryContent">
            <h1 className="galleryTitel">{item.days}</h1>
            <p className="galleryDiscription">{item.description}</p>
          </div>
          <Row className="galleryImgs">
            <Col className="leftSide" lg={"3"}>
              {item.date}
              <br /> {item.month}
              <span className="gallery2k"><br /> 2<br /> k<br /> 2<br /> 3 <br /></span>
              <span className="gallery2k23">2k23</span>
            </Col>
            <Col className="rightSide" lg={"9"}>
              <div className="imgbox">
                {item.image.map((image, index) => (
                  <img className="galleryImg" key={index} src={image} alt="img" />
                ))}
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default GallerySection;
