import React from 'react'
import pdfImg from "../../assets/images/muhs/pdfImg.png";
import "../../style/AcdemicPage/academic.css";

function CourseOutcomes() {
  return (
    <div className="marginPub border-2 border-black p-4" id='publications'>
        <section className="font-fam flex items-center justify-center gap-3 flex-col">
          <h2 className="text-3xl tracking-wide font-bold ">Course & Program Outcomes</h2>
          <button className="bg-[#FFD900]  flex items-center justify-center p-2 md:p-3">
            <img src={pdfImg} alt="PDF" className="mr-2" />
            <span className="tracking-wide text-blue-500">
              <a href={'https://res.cloudinary.com/dbdni9n4i/image/upload/v1681289431/YCDENTAL/pdf/Academic/CourseOutcomes1_pvz1h6.pdf'} target="_blank" rel="noreferrer">
                Download PDF
              </a>
            </span>
          </button>
        </section>
      </div>
  )
}

export default CourseOutcomes