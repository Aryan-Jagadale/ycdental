import React from "react";
import mainProfile from "./../../assets/images/profileMain.svg";
import "../../style/HomePage/welcomeComp.css";
import subProfile from "./../../assets/images/subProfilePhoto.svg";

const WelcomeComp = () => {
  return (
    <div>
      <div
        style={{ fontFamily: "Domine", color: "#032F6E" }}
        className="flex-1 justify-center content-center text-center my-3 py-3 mx-5"
      >
        <h1 className="text-3xl font-bold mb-2">
          Welcome to Dental College, Ahmednagar
        </h1>
        <p className="text-base mb-1">
          To provide comprehensive primary and specialized oral health care to
          people, especially marginalized groups and
        </p>
        <p className="text-base">
          disseminate knowledge of disease prevention to the public, and
          continuing dental education to professionals.
        </p>
      </div>
      <div
        style={{ fontFamily: "Domine" }}
        className=" profileMain flex flex-col justify-center content-end items-center py-4 text-2xl tracking-wider font-bold"
      >
        <h1 className="py-3 text-white text-2xl underline underline-offset-8 ">
          MANAGING COMMITTEE{" "}
        </h1>
        <img src={mainProfile} alt="" className="w-80 mt-15" />
        <div className="flex flex-col justify-center text-center">
          <h1 style={{ color: "#800000" }} className="text-2xl">
            President
          </h1>
          <p style={{ color: "#00205B" }} className="text-base">
            Hon. Yashwantrao Gadakh
          </p>
        </div>
        <div className="flex flex-row w-screen justify-evenly py-10 px-5">
          <div className="subProfile w-80 flex flex-col justify-start content-center items-center px-10 py-2">
            <img src={subProfile} className=" w-40" alt="" srcset="" />
            <div className="flex flex-col justify-center text-center">
              <h3 style={{ color: "#800000" }} className="text-sm">
                President
              </h3>
              <p style={{ color: "#00205B" }} className="text-xs">
                Hon. Yashwantrao Gadakh
              </p>
            </div>
          </div>
          <div className="subProfile w-80 flex flex-col justify-start content-center items-center px-10 py-2">
            <img src={subProfile} className=" w-40" alt="" srcset="" />
            <div className="flex flex-col justify-center text-center">
              <h3 style={{ color: "#800000" }} className="text-sm">
                President
              </h3>
              <p style={{ color: "#00205B" }} className="text-xs">
                Hon. Yashwantrao Gadakh
              </p>
            </div>
          </div>
          <div className="subProfile w-80 flex flex-col justify-start content-center items-center px-10 py-2">
            <img src={subProfile} className=" w-40" alt="" srcset="" />
            <div className="flex flex-col justify-center text-center">
              <h3 style={{ color: "#800000" }} className="text-sm">
                President
              </h3>
              <p style={{ color: "#00205B" }} className="text-xs">
                Hon. Yashwantrao Gadakh
              </p>
            </div>
          </div>
        </div>

        <container className="py-8">
          <div className="text-neutral-200  border-[2.5px] drop-shadow-lg border-[#00205B] w-[50%] flex items-center justify-center p-2 md:w-[15vw]">
            <h3 className="text-2xl font-bold uppercase tracking-wide text-[#262626]">
              FACILITIES
            </h3>
          </div>
        </container>
      </div>
    </div>
  );
};

export default WelcomeComp;
