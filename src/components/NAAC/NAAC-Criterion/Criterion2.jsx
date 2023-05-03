import React from 'react'
import { col1 } from "../../../utils/Criterion1";
import "../../../style/NAAC/naac.css";

function Criterion2() {
    return (
        <div className='main-body px-4 max-w-screen-xl mx-auto'>
            <h1 className='text-center font-fam font-bold text-xl text-[#00205B] border-b-2 border-[#00205B] py-3' >
                NAAC Criterion 2
            </h1>
            <div className='flex flex-col md:flex-col justify-center items-center'>
                {col1.map((pdf, i) => (<div key={i} className='app-body-sub-one flex justify-items-center flex-col md:flex-col'>
                    <a href={pdf.url} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[rgb(0,32,91)] h-12 my-3 px-4 text-center'>
                        <p className='box-one font-fam text-lg py-2.5 whitespace-normal'>{pdf.name} </p>
                    </a>

                </div>))}
            </div>
        </div>
    )
}

export default Criterion2;
