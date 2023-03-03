import { Footer } from "flowbite-react";
import React from "react";
import Logo from "../assets/images/logo.png";
import "../style/HomePage/footer.css";

    
const FooterComp = () => {
  return (
    <Footer
      container={true}
      className="footer-component bg-[#00205B]"
      //style={{ backgroundColor: "#00205B !important" }}
    >
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand href="#" src={Logo} alt="Logo" />
            <div>
              <Footer.Link href="#">
                166/1, Vadgaon Gupta, Opp. M.I.D.C. Ahmednagar - 414003
              </Footer.Link>
              <Footer.Link href="#">0241-2779111, 2777070</Footer.Link>
              <Footer.Link href="#">0241-2779111</Footer.Link>
              <Footer.Link href="#">yash_dental@rediffmail.com</Footer.Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Important Links" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">MDS Admission</Footer.Link>
                <Footer.Link href="#">BDS Admission</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Our Departments" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Conservative Dentistry</Footer.Link>
                <Footer.Link href="#">Oral Medicine & Radiology</Footer.Link>
                <Footer.Link href="#">Oral Pathology</Footer.Link>
                <Footer.Link href="#">Orthodontics</Footer.Link>
                <Footer.Link href="#">Pedo</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title=" " />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Periodontics</Footer.Link>
                <Footer.Link href="#">Prosthodontics</Footer.Link>
                <Footer.Link href="#">Public Health Dentistry</Footer.Link>
                <Footer.Link href="#">Oral Surgery</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
