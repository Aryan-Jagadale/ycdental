import React from "react";
import "../style/HomePage/header.css";
import Logo from "../assets/images/logo.png";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Row className="align-items-center">
        <Col>
          <img src={Logo} alt="logo" className="header-img" />
        </Col>
        <Col xs={6}>
        <input className="header-search" placeholder="Search" />
        <button className="header-btn">Search</button>
        </Col>
        <Col>
        <button className="header-btn2">MUHS Update</button>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
