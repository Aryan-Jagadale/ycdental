import React from "react";
import { Navbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <>
      <Navbar className="main-navbar" fluid={true} rounded={true}>
        <Navbar.Toggle className="toggle-btn" />
        <Navbar.Collapse>
           <Link className="nav-title" to="/about">
            About
          </Link> 

          {/*<Dropdown arrowIcon={true} inline={true} label={"About"}>
            <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
            <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
            <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
        </Dropdown>*/}

          <Dropdown arrowIcon={true} inline={true} label={"Admission"}>
             <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
            <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
            <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
          </Dropdown>

          <Dropdown arrowIcon={true} inline={true} label={"Academics"}>
             <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
            <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
            <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
          </Dropdown>

          <Dropdown arrowIcon={true} inline={true} label={"Student"}>
             <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
            <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
            <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
          </Dropdown>

          <Dropdown arrowIcon={true} inline={true} label={"More"}>
             <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
            <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
            <Link to={"#"}><Dropdown.Item className="nav-title">Dashboard</Dropdown.Item></Link>
          </Dropdown>

        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MainNavbar;
