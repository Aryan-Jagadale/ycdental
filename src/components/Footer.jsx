import React from "react";
import "../style/HomePage/footer.css";

const FooterComp = () => {
  return (
    <footer className="footer-component" style={{ fontFamily: "Domine" }}>
      <div className="mx-20 py-10 text-start md:text-left flex-1 items-end">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="" style={{ paddingBotton: 30, width: 300 }}>
            <div className="mx-10 mb-4">
              {/* <img alt="" src={Logo} style={{width:"40rem", paddingLeft:20}}/> */}
              <h1 style={{ fontSize: "1.5rem", textAlign: "start" }}>
                YCDC,Ahmednager{" "}
              </h1>
            </div>
            <div className="ml-12">
              <h6 className="mb-2">
                {" "}
                We are commited to providing comprehensive primary and specialized
                oral health care to people, especially marginalized group and disseminating
                knowledge of disease prevention to the public, and continuing dental education
                to professionals{" "}
              </h6>{" "}
            </div>
          </div>
          <div className="mx-10" style={{ width: 250, paddingTop: 20 }}>
            <h6 className="mx-10 mb-4 font-semibold uppercase md:justify-start">
              Quick Links
            </h6>
            <p className="mx-10 mb-4">
              <a href="#!" className="text-neutral-200 dark:text-neutral-200">
                MDS Admission
              </a>
            </p>

            <p className="mx-10 mb-4">
              <a href="#!" className="text-neutral-200 dark:text-neutral-200">
                BDS Admission
              </a>
            </p>

            <p className="mx-10 mb-4">
              <a href="#!" className="text-neutral-200 dark:text-neutral-200">
                Prospectus
              </a>
            </p>

            <p className="mx-10 mb-4">
              <a href="#!" className="text-neutral-200 dark:text-neutral-200">
                Social Media
              </a>
            </p>

            <p className="mx-10 mb-4">
              <a href="#!" className="text-neutral-200 dark:text-neutral-200">
                Work with Us 
              </a>
            </p>
          </div>
          <div className="mx-10" style={{ paddingTop: 20, paddingBotton: 30 }}>
            <h6 className="mb-4 font-semibold uppercase md:justify-start">
              Our Departments
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-200 dark:text-neutral-200">
                Conservative Dentistry
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-200 dark:text-neutral-200">
                Oral Pathology
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-200 dark:text-neutral-200">
                Orthodontics
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-200 dark:text-neutral-200">
                Pedo
              </a>
            </p>
          </div>
          <div className="mx-0" style={{ paddingBotton: 30, paddingTop: 20 }}>
          <h6 className="mb-4 font-semibold uppercase md:justify-start">
              Contact Us
            </h6>
            <p className="mx-0 mb-4">
              166/1, Vedgaon Gupta,<br/>
              Opp. M.I.D.C Ahmednager 414003<br/>
              0241-2779111, 2777070<br/>
              <a href="#!" className="text-neutral-200 dark:text-neutral-200">
                yash_dental@rediffmail.com
              </a><br/>
              Public Relation Officer: 7720013317
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
