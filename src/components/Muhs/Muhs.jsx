import React, { useState } from "react";
import "../../style/AdmissionPage/headerSection.css";
import Setting from "../../assets/images/muhs/Setting.png";
import FileDown from "../../assets/images/muhs/FileDown.png";
import CloudDown from "../../assets/images/muhs/CloudDown.png";
import pdfImg from "../../assets/images/muhs/pdfImg.png";
import { muhs } from "../../utils/MUHS";

function Muhs() {
  const [first, setfirst] = useState(true);

  //console.log(first);

  return (
    <div className="">
      <section className="bg-[#800000] w-full relative">
        <div className="flex items-center justify-center w-full p-5">
          <div className="w-full md:w-1/2 m-3 md:m-5">
            <div className="w-full border-l-2 border-[#FFD900]">
              <section className="mb-4 mx-6">
                <img src={Setting} alt="Setting pic" />
              </section>

              <section className="mx-6 flex items-center gap-3 mb-4">
                <h1 className="text-5xl font-bold font-fam text-white tracking-wide ml-12">
                  MUHS
                  <br />
                  Update ....
                </h1>
                <div className="ml-6">
                  <img src={FileDown} alt="FileDownload Pic" />
                </div>
              </section>
              <section className="mx-6 mb-4">
                <img src={CloudDown} alt="Setting pic" />
              </section>
            </div>
          </div>

          <div className="md:w-1/2  hidden md:block gradinetStyle">
  {/*<img src={softwareApplication} alt="MUHS banner" />*/}
          </div>
        </div>
      </section>

      <section className="absolute border-white border-2 rounded-full bottom-[3%]  left-8 drop-shadow-lg flex items-center justify-between bg-gray-100  w-[90%] md:w-[30%]">
        <div
          className={`px-5 p-2 md:px-10 rounded-l-full md:p-6 hover:bg-[#FFD900]  cursor-pointer w-[50%] ${
            first ? "bg-[#FFD900]" : `bg-white`
          } `}
          onClick={() => setfirst(!first)}
        >
          <h3 className="font-fam font-bold tracking-wide">2022-2023</h3>
        </div>
        <div
          className={`px-5 p-2 md:px-10 rounded-r-full md:p-6 hover:bg-[#FFD900] cursor-pointer w-[50%] ${
            !first ? "bg-[white]" : ``
          }`}
          onClick={() => setfirst(!first)}
        >
          <h3 className="font-fam font-bold tracking-wide">2023-2024</h3>
        </div>
      </section>

      <section
        className="flex items-center justify-center w-full"
        style={{
          marginTop: "4.25rem",
          marginBottom: "4.25rem",
        }}
      >
        <section className="bg-[#D9DEE6] w-full md:w-[90%]">
          {first &&
            muhs[0].sub.map((item) => (
              <div
                className="bg-white m-2 md:m-4 px-4 flex items-center justify-between rounded"
                key={item.name}
              >
                <h5 className="font-bold font-fam  md:text-lg w-[60%] my-3 border-r-2  border-black">
                  {item.name}
                </h5>
                <div className="w-[60%] md:w-[40%] flex items-center justify-center">
                  <button className="bg-[#FFD900]  flex items-center justify-center p-2 md:p-3">
                    <img src={pdfImg} alt="PDF" className="mr-2" />
                    <span className="tracking-wide text-blue-500">
                      <a href={item.pdf} target="_blank" rel="noreferrer">
                        Download PDF
                      </a>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          {!first &&
            muhs[1].sub.map((item) => (
              <div
                className="bg-white m-2 md:m-4 px-4 flex items-center justify-between rounded"
                key={item.name}
              >
                <h5 className="font-bold font-fam  md:text-lg w-[60%] my-3 border-r-2  border-black">
                  {item.name}
                </h5>
                <div className="w-[60%] md:w-[40%] flex items-center justify-center">
                  <button className="bg-[#FFD900]  flex items-center justify-center p-2 md:p-3">
                    <img src={pdfImg} alt="PDF" className="mr-2" />
                    <span className="tracking-wide text-blue-500">
                      <a href={item.pdf} target="_blank" rel="noreferrer">
                        Download PDF
                      </a>
                    </span>
                  </button>
                </div>
              </div>
            ))}
        </section>
      </section>
    </div>
  );
}

export default Muhs;
