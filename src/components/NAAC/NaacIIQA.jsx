import React from 'react'
import "../../style/NAAC/naac.css"
// import pdfImg from "../../assets/images/NAAC/pdfImg.png"
// import logo from "../../assets/images/NAAC/download logo.png"
import {
    pdfRowIIQA,

} from "../../utils/NAAC"
function NaacIIQA() {
  return (
    <div className='naccSection mx-3 my-5 w-[90%] flex-wrap flex items-center justify-center flex-row gap-5'>
            {
                pdfRowIIQA.map((pdf, i) => (
                    <a key={i} href={pdf.url} target={"_blank"} rel='noreferrer' className='font-bold pdf-main-card' >
                        <p className='pdfnametag'>RTI Declaration</p>
                    </a>
                ))

            }



        </div>
  )
}

export default NaacIIQA