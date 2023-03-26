import React from "react";
import "../../style/DepartmentsPage/department.css";
import { departCompImageLabel } from "../../utils/deptComp";
import LabelDepartComp from "./Department/LabelDepartComp";
import PublicationList from "../../assets/pdf/Publication-list.pdf";
import pdfImg from "../../assets/images/muhs/pdfImg.png";

const Department = () => {
  return (
    <div id="deptarments">
      <h2 className="tracking-wide font-fam text-center font-bold text-3xl">Departments</h2>
      <section className="bgDepartMent flex items-center justify-around flex-wrap flex-col  md:flex-row  gap-10 ">
        {departCompImageLabel.map((item) => (
          <LabelDepartComp item={item} key={item.name} />
        ))}
      </section>
      <div className="m-5 border-2 border-black p-4">
        <section className="font-fam flex items-center justify-center gap-3 flex-col">
          <h2 className="text-3xl tracking-wide font-bold ">Publication</h2>
          <button className="bg-[#FFD900]  flex items-center justify-center p-2 md:p-3">
            <img src={pdfImg} alt="PDF" className="mr-2" />
            <span className="tracking-wide text-blue-500">
              <a href={PublicationList} target="_blank" rel="noreferrer">
                Download PDF
              </a>
            </span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Department;
