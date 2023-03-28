import React from 'react'
import "../../style/AdmissionPage/studentWalefare.css"
import scholarship from "../../assets/images/academics/scholarships.png"
import awards from "../../assets/images/academics/awards.png"
import dentist1 from "../../assets/images/academics/dentist1.png"
// import dentist1 from "../../assets/images/academics/dentist1.png"

function StudentWelfare() {
    return (
        <div>

            <img src={scholarship} alt="" className='object-none object-center mb-4 h-16  w-full justify-center mt-6 ml-4 mr-4' />
            <div className='studWalefare-Main pt-6 pb-6 m-8'>

                <div className='scholarships flex flex-row items-center flex-wrap justify-around content-around p-4 m-4' >

                    <div className='dentistOne flex flex-col rounded border items-start font-fam font-bold px-2.5 py-2 h-48 bg-slate-300 '>
                        <img src={dentist1} alt="" className='rounded-sm  w-full' />
                        <div className='text-center justify-center font-fam text-slate-600 px-2 py-2'>
                            <h1 className='dentistName'> Student Name</h1>
                            <p>Scholarship Details</p>
                        </div>

                    </div>
                    <div className='dentistOne flex flex-col rounded border items-start font-fam font-bold px-2.5 py-2 w-60 h-48 bg-slate-300 '>
                        <img src={dentist1} alt="" className='rounded-sm  w-full' />
                        <div className='text-center justify-center font-fam text-slate-600 px-2 py-2'>
                            <h1 className='dentistName'> Student Name</h1>
                            <p>Scholarship Details</p>
                        </div>

                    </div>
                    <div className='dentistOne flex flex-col rounded border items-start font-fam font-bold px-2.5 py-2 w-60 h-48 bg-slate-300 '>
                        <img src={dentist1} alt="" className='rounded-sm  w-full' />
                        <div className='text-center justify-center font-fam text-slate-600 px-2 py-2'>
                            <h1 className='dentistName'> Student Name</h1>
                            <p>Scholarship Details</p>
                        </div>

                    </div>
                </div>
            </div>


            <div className='mainDiv m-8'>
                <div>
                    <img src={awards} alt="" className='object-none object-center mt-4 mb-3 h-16  w-full justify-center ' />
                    <h1 className='text-xl text-center font-fam px-20 py-3'>
                        The Institute believes in acknowledging and encouraging academic <br />as well as
                        extra curricular excellence. The awards given are
                    </h1>
                    <div className='studWalefare-Main pt-6 bg-slate-300'>
                        <h1 className='text-xl text-center justify-center font-fam text-white px-2 py-4'>
                            1. Academic Excellence Award–boys and girls </h1>
                        <div className='scholarships flex flex-row items-center flex-wrap justify-around content-around p-4' >

                            <div className='dentistOne flex flex-col rounded border border-slate-600 items-start font-fam font-bold px-2.5 py-2 w-60 h-48 bg-slate-300'>
                                <img src={dentist1} alt="" className='rounded-sm  w-full h-full' />
                                <div className='text-center justify-center font-fam text-slate-600 px-2 py-2'>
                                    <h1 className='dentistName'> Student Name</h1>
                                    <p>Achivement Details</p>
                                </div>

                            </div>
                            <div className='dentistOne flex flex-col rounded border items-start font-fam font-bold px-2.5 py-2 w-60 h-48 bg-slate-300'>
                                <img src={dentist1} alt="" className='rounded-sm  w-full' />
                                <div className='text-center justify-center font-fam text-slate-600 px-2 py-2'>
                                    <h1 className='dentistName'> Student Name</h1>
                                    <p>Achivement Details</p>
                                </div>

                            </div>
                            <div className='dentistOne flex flex-col rounded border items-start font-fam font-bold px-2.5 py-2 w-60 h-48 bg-slate-300 '>
                                <img src={dentist1} alt="" className='rounded-sm  w-full' />
                                <div className='text-center justify-center font-fam text-slate-600 px-2 py-2'>
                                    <h1 className='dentistName'> Student Name</h1>
                                    <p>Achivement Details</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='studWalefare-Main pb-6 bg-slate-300'>
                    <h1 className='text-xl text-center justify-center font-fam text-white px-2 py-4'>
                        2. Sports Excellence Award–boys and girls
                    </h1>
                    <div className='scholarships flex flex-row items-center flex-wrap justify-around content-around p-4 pb-6' >

                        <div className='dentistOne flex flex-col rounded border border-slate-600 items-start font-fam font-bold px-2.5 py-2 w-60 h-48 bg-slate-300'>
                            <img src={dentist1} alt="" className='rounded-sm  w-full h-full' />
                            <div className='text-center justify-center font-fam text-slate-600 px-2 py-2'>
                                <h1 className='dentistName'> Student Name</h1>
                                <p>Achivement Details</p>
                            </div>

                        </div>
                        <div className='dentistOne flex flex-col rounded border items-start font-fam font-bold px-2.5 py-2  bg-slate-300'>
                            <img src={dentist1} alt="" className='rounded-sm  w-full' />
                            <div className='text-center justify-center font-fam text-slate-600 px-2 py-2'>
                                <h1 className='dentistName'> Student Name</h1>
                                <p>Achivement Details</p>
                            </div>

                        </div>
                        <div className='dentistOne flex flex-col rounded border items-start font-fam font-bold px-2.5 py-2 w-60 h-48 bg-slate-300 '>
                            <img src={dentist1} alt="" className='rounded-sm  w-full' />
                            <div className='text-center justify-center font-fam text-slate-600 px-2 py-2'>
                                <h1 className='dentistName'> Student Name</h1>
                                <p>Achivement Details</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default StudentWelfare