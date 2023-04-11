import React from 'react'
import "../../style/NAAC/naac.css"
import pdf from "../../assets/pdf/Naac/6.IQAC COMMITTEE.pdf"

function NaacSSR() {
    return (

        <div className='main-body px-4 max-w-screen-xl mx-auto'>
            <h1 className='text-start font-fam font-bold text-xl text-[#00205B] border-b-2 border-[#00205B] py-3' >
                NAAC SSR
            </h1>
            <div className='app-body-sub flex flex-row md:flex-col'>
                <div className='flex flex-col w-full md:flex-col'>
                    <a href={pdf} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center'>
                        <p className='box-one font-fam text-lg py-2.5 whitespace-normal'>Criterion I </p>
                    </a>
                    <a href={pdf} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criterion II </p>
                    </a>
                    <a href={pdf} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criterion III </p>
                    </a>
                    <a href={pdf} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criterion IV </p>
                    </a>
                </div>
                <div className='flex flex-col w-full md:flex-col'>
                    <a href={pdf} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 mx-2 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criterion V </p>
                    </a>
                    <a href={pdf} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 mx-2 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criterion VI </p>
                    </a>
                    <a href={pdf} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 mx-2 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criterion VII </p>
                    </a>
                    <a href={pdf} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 mx-2 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criterion VIII </p>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default NaacSSR

