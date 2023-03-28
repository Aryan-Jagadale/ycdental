import React from "react";
import "../../style/GalleryPage/galleryHeader.css";
//import { Col, Row } from "react-bootstrap";
//import toothbrush from "../../assets/images/toothbrush.png";
import Video from "../../assets/videos/Video.mp4";

function GalleryHeader() {
  return (
    <div className="GalleryHeader">
      <video src={Video} controls autoPlay loop className="h-full w-full" />
    </div>
  );
}



export default GalleryHeader
