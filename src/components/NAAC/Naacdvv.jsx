import React from 'react'
import "../../style/NAAC/naac.css"
import { DVV } from '../../content/NAAC/dvv'


const Naacdvv = () => {
  return (
    <div className='mx-3 my-5 w-[90%] flex-wrap flex items-center justify-center flex-row gap-5'>
            {
                DVV.map((pdf,i) => (
                    <a key={i} href={pdf.url} target={"_blank"} rel='noreferrer' className='font-bold excel-main-card' >
                        <p className='pdfnametag'>{pdf.name}</p>
                    </a>
                ))

            }
        </div>
  )
}

export default Naacdvv