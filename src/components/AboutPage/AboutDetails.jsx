import React from 'react'
import colors from 'tailwindcss/colors';
import './../../style/AboutPage/aboutDetails.css'

function AboutDetails() {
  return (
    <div className=' pt-4 pb-14 border-t-2 border-red-600'>
        <div style={{backgroundColor: '#D9D9D9'}} className="mt-4 flex h-60 ">
            
            <div className="bgImgOne m-4 flex flex-col w-screen justify-center content-center items-center text-center py-10 px-5">
                <h2 className='py-2 px-4 text-xl pb-4' style={{color: 'white'}}>Policy / Governance</h2>
                <button style={{border:"2px solid #FFD900"}} className="btn-one justify-center rounded bg-transparent hover:bg-yellow-300
                 text-yellow-300 font-semibold
                 hover:text-yellow-300 py-2 px-4">
                VIEW MORE
                </button>
            </div>
            <div className="bgImgTwo m-4 flex flex-col w-screen justify-center content-center items-center text-center  py-10 px-5">
            <h2 className='py-2 px-4 text-xl pb-4' style={{color: 'white'}}>History</h2>
            <button style={{border:"2px solid #FFD900"}} className="btn-one justify-center rounded bg-transparent hover:bg-yellow-300 text-yellow-300 font-semibold
                 hover:text-yellow-300 py-2 px-4">
                VIEW MORE
                </button>
            </div>
            <div className="bgImgThree m-4 flex flex-col  w-screen justify-center content-center items-center text-center  py-10 px-5">
            <h2 className='py-2 px-4 text-xl pb-4' style={{color: 'white'}}>Leadership </h2>
            <button style={{border:"2px solid #FFD900"}} className="btn-one justify-center rounded bg-transparent hover:bg-yellow-300 text-yellow-300 font-semibold
                 hover:text-yellow-300 py-2 px-4">
                VIEW MORE
                </button>
            </div>
        </div>
    </div>
  )
}

export default AboutDetails;