import React from 'react'
import "../../style/NAAC/naac.css"
// import pdfImg from "../../assets/images/NAAC/pdfImg.png"
// import logo from "../../assets/images/NAAC/download logo.png"
import {
    pdfRow,

} from "../../utils/NAAC"

function NaccSection() {
    return (
        <div className='naccSection mt-2 mb-2 flex flex-row'>
            {
                pdfRow.map((pdf, i) => (
                    <a key={i} href={pdf.url} className='font-bold pdf-main-card' >
                        <p className='pdfnametag'>NAAC Achievement</p>
                    </a>
                ))

            }



        </div>
    )
}

export default NaccSection