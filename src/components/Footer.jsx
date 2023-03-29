import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/footerLogo.png";
import "../style/HomePage/footer.css";
import { footerLink } from "../utils/footerLink";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const FooterComp = () => {
  return (
    <footer className="bg-[#00205B] text-center  text-white dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid gap-5  md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center  md:h-[10vh] w-full md:w-[25vw] justify-center font-semibold uppercase md:justify-start">
              <Link to={"/"}>
                {/*<img src={Logo} alt="footer logo" className="h-full w-full" />*/}
                <LazyLoadImage
                  src={Logo}
                  alt="footer logo"
                  className="h-full w-full"
                  effect="opacity"
                />
              </Link>
            </h6>
            <p className="text-left font-fam text-base tracking-wide font-normal">
              We are commited to providing comprehensive primary and specialized
              oral health care to people, especially marginalized group and
              disseminating knowledge of disease prevention to the public, and
              continuing dental education to professionals.
            </p>
            <div>
              <h6 className=" font-bold text-xl text-left">Follow Us</h6>
              <div className="bottom-row-title flex flex-row item-center justify-around">

                <BsFacebook />
                <BsInstagram />
                <BsTwitter />
                <BsYoutube />

              </div>
            </div>

          </div>


          <div className="mt-5 md:text-left md:mx-10 font-fam">
            <h6 className="mb-4 flex font-bold justify-center md:justify-start text-xl ">
              Quick Links
            </h6>
            {footerLink.map((item) => (
              <p className="mb-3" key={item.name}>
                {item.name === "Prospectus" ? (
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-base tracking-wide dark:text-neutral-200"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.urll}
                    className="text-white text-base tracking-wide dark:text-neutral-200"
                  >
                    {item.name}
                  </Link>
                )}
              </p>
            ))}
            <p className="mb-3">
              <a
                href={"https://www.facebook.com/ycdcahmednagar?mibextid=ZbWKwL"}
                target="_blank"
                rel="noreferrer"
                className="text-white text-base tracking-wide dark:text-neutral-200"
              >
                Social Media
              </a>
            </p>

            <p className="mb-3">
              <a
                href="mailto:yash_dental@rediffmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-white text-base tracking-wide dark:text-neutral-200"
              >
                Work with us
              </a>
            </p>
          </div>

          <div className="mt-5 md:text-left font-fam">
            <h6 className="mb-4 flex justify-center md:justify-start  font-bold text-xl ">
              Contact Us
            </h6>
            <p className="mb-3 text-base tracking-wide">166/1, Vadgaon Gupta</p>
            <p className="mb-3 text-base tracking-wide">
              Opp. M.I.D.C Ahmednager 414003
            </p>
            <p className="mb-3 text-base tracking-wide">
              0241-2779111, 2777070
            </p>
            <p className="mb-3 text-base tracking-wide">
              <a
                href="mailto:yash_dental@rediffmail.com"
                target={"_blank"}
                className="text-white dark:text-neutral-200"
                rel="noreferrer"
              >
                yash_dental@rediffmail.com
              </a>
            </p>
            <p className="mb-4">Public Relation Officer: 7720013317</p>
          </div>

          <div className="mt-5">
            <h6 className="mb-4 flex font-fam text-xl justify-center md:justify-start  font-bold ">
              Location
            </h6>

            <p className="mb-4 flex items-center justify-center md:justify-start bg-white h-[35vh] w-full">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d783.3265430486535!2d74.72828573869714!3d19.18104299131588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb0880b94485d%3A0x5c08ed1b9978a8fd!2sShri.%20Yashwantrao%20Chavan%20Memorial%20Medical%20%26%20Rural%20Development%20Foundation&#39;s%20Dental%20College%20%26%20Hospital!5e0!3m2!1sen!2sin!4v1679300737744!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0, height: "100%", width: "100%" }}
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
