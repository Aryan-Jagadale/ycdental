import React from 'react'
import "../../style/HomePage/recognition.css"
import mainDivFirstImg from './../../assets/images/recognition/mainDivFirstImg.svg'
import mainDivSecondImg from './../../assets/images/recognition/mainDivSecondImg.svg'
import mainDivThirdImg from './../../assets/images/recognition/mainDivThirdImg.svg'


function Recognition() {
    return (
        <div className='flex flex-column my-5'>
            <div className='row-one mb-2 lg:mb-20'>
                <div className="text-neutral-200 lable-container border-[2.5px] drop-shadow-lg border-[#00205B] flex items-center justify-center ">
                    <h3 className="text-2xl px-4 py-2 font-bold flex items-center justify-center uppercase tracking-wide text-[#262626]">RECOGNITION</h3>
                </div>
            </div>
            <div className='flex flex-column justify-center border-cyan-900 lg:mx-20 '>
                <div className="flex w-full flex-col lg:flex-row justify-center items-center lg:justify-around  ">
                    <div className="main-card mt-20 lg:mt-2">
                        <img className='main-card-img' src={mainDivFirstImg} alt="" srcset="" />
                        <h2>Affiliated to Maharashtra University of Health Sciences (MUHS)</h2>
                    </div>
                    <div className="main-card mt-20 lg:mt-2">
                        <img className='main-card-img' src={mainDivSecondImg} alt="" srcset="" />
                        <h2>
                            Recognized by Dental Council of India
                        </h2>
                    </div>
                    <div className="main-card mt-20 lg:mt-2">
                        <img className='main-card-img' src={mainDivThirdImg} alt="" srcset="" />
                        <h2>College is certified with ISO 9001:2015</h2>
                    </div>
                </div>
                <div className="flex w-full flex-col lg:flex-row justify-center items-center lg:justify-around ">
                    <div className="sub-card-red">
                        <p>First of its kind CBCT machine for diagnosis and treatment planning</p>
                    </div>
                    <div className="sub-card-blue">
                        <p>Over 400+ research papers and books published by Faculty and Students .</p>
                    </div>
                    <div className="sub-card-red">
                        <p>Recognized as Innovation and Incubation Centre (IIC) by Govt. of India</p>
                    </div>
                </div>
                <div className="flex w-full flex-col lg:flex-row justify-center items-center lg:justify-around ">
                    <div className="sub-card-blue">
                        <p>Our students are prize winners at multiple extracurricular state level competitions</p>
                    </div>
                    <div className="sub-card-red">
                        <p>Registered as Local Chapter for SWAYAM by Govt. of India & College is aspirant for NAAC certification</p>
                    </div>
                    <div className="sub-card-blue">
                        <p>Smart board equipped classrooms with Wi-Fi connectivity for high tech learning experience
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Recognition