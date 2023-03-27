import React from 'react'
import PublicationList from "../../assets/pdf/Publication/Publication-list.pdf";
import pdfImg from "../../assets/images/muhs/pdfImg.png";

const Publication = () => {
  return (
    <div className="m-5 border-2 border-black p-4" id='publications'>
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
  )
}

export default Publication