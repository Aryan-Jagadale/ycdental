import React from 'react'
import "../../style/NAAC/naac.css"
import {
    pdfRow,
} from "../../utils/NAAC"

function NaccSection() {
    return (
        <div className='naccSection mx-3 my-5 w-[90%] flex-wrap flex items-center justify-center flex-row gap-5'>
            {
                pdfRow.map((pdf, i) => (
                    <a key={i} href={pdf.url} target={"_blank"} rel='noreferrer' className='font-bold pdf-main-card' >
                        <p className='pdfnametag'>NAAC Achievement</p>
                    </a>
                ))

            }



        </div>
    )
}

export default NaccSection