import React from "react";
import "../../style/GalleryPage/galleryHeader.css";
//import { Col, Row } from "react-bootstrap";
//import toothbrush from "../../assets/images/toothbrush.png";
import Video from "../../assets/videos/Video.mp4";

function GalleryHeader() {
  return (
    <div className="GalleryHeader">
      <video autoPlay muted loop className="w-full h-full">
        <source src={Video} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
}

export default GalleryHeader;
