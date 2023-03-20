import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/footerlogo.svg";
import "../style/HomePage/footer.css";
import { footerLink } from "../utils/footerLink";

const FooterComp = () => {
  return (
    <footer className="bg-[#00205B] text-center text-white dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <img src={Logo} alt="footer logo" />
            </h6>
            <p className="text-left">
              We are commited to providing comprehensive primary and specialized
              oral health care to people, especially marginalized group and
              disseminating knowledge of disease prevention to the public, and
              continuing dental education to professionals.
            </p>
          </div>
          <div className="text-center">
            <h6 className="mb-4 flex justify-center font-semibold">Quick Links</h6>
            {footerLink.map((item) => (
              <p className="mb-4" key={item.name}>
                <Link to={item.urll} className="text-white dark:text-neutral-200">
                  {item.name}
                </Link>
              </p>
            ))}
          </div>
          <div className="text-center">
            <h6 className="mb-4 flex justify-center font-semibold ">Contact Us</h6>
            <p className="mb-4 tracking-wide">166/1, Vedgaon Gupta</p>
            <p className="mb-4">Opp. M.I.D.C Ahmednager 414003</p>
            <p className="mb-4">0241-2779111, 2777070</p>
            <p className="mb-4">
              <a href="/" className="text-white dark:text-neutral-200">
                yash_dental@rediffmail.com
              </a>
            </p>
            <p className="mb-4">Public Relation Officer: 7720013317</p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold ">Location</h6>

            <p className="mb-4 flex items-center justify-center md:justify-start bg-white h-[35vh] w-full">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d783.3265430486535!2d74.72828573869714!3d19.18104299131588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb0880b94485d%3A0x5c08ed1b9978a8fd!2sShri.%20Yashwantrao%20Chavan%20Memorial%20Medical%20%26%20Rural%20Development%20Foundation&#39;s%20Dental%20College%20%26%20Hospital!5e0!3m2!1sen!2sin!4v1679300737744!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0,
                height:"100%",
                width:"100%"
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
