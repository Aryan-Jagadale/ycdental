import React from 'react'
import "../../style/NAAC/naac.css"


function NaacSSR() {
    return (

        <div className='main-body px-4 max-w-screen-xl mx-auto'>
            <h1 className='text-start font-fam font-bold text-xl text-[#00205B] border-b-2 border-[#00205B] py-3' >
                NAAC SSR
            </h1>
            <div className='app-body-sub flex flex-row gap-3 md:flex-col'>
                <div className='flex flex-col w-full md:flex-col'>
                    <a href={"/nacc/Criteria1"} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center'>
                        <p className='box-one font-fam text-lg py-2.5 whitespace-normal'>Criteria I </p>
                    </a>
                    <a href={"/nacc/Criteria2"} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criteria II </p>
                    </a>
                    <a href={"/nacc/Criteria3"} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criteria III </p>
                    </a>
                    <a href={"/nacc/Criteria4"} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criteria IV </p>
                    </a>
                </div>
                <div className='flex flex-col w-full md:flex-col '>
                    <a href={"/nacc/Criteria5"} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criteria V </p>
                    </a>
                    <a href={"/nacc/Criteria6"} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criteria VI </p>
                    </a>
                    <a href={"/nacc/Criteria7"} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criteria VII </p>
                    </a>
                    <a href={"/nacc/Criteria8"} className='flex-col bg-[#D9D9D9] border-l-8 border-r-8 border-[#00205B] h-12 my-3 px-4 text-center'>
                        <p className='font-fam text-lg py-2.5 whitespace-normal'>Criteria VIII </p>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default NaacSSR

