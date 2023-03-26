import React from 'react'
import "../../style/AcdemicPage/academicQuality.css"
//import student1 from '../../assets/images/academics/academicquality/student1.png'
import student2 from '../../assets/images/academics/academicquality/Mr.Nagar-Saurabh-Rajesh.png'
import student3 from '../../assets/images/academics/academicquality/Miss.Rajput-Raksha.png'
import student4 from '../../assets/images/academics/academicquality/Miss.Jaggi-Bhagyashree.png'
import student5 from '../../assets/images/academics/academicquality/Miss. Bhatia-Darshana.png'
import student6 from '../../assets/images/academics/academicquality/Miss. Doiphode-Avani.png'
import student7 from '../../assets/images/academics/academicquality/Miss.DSouza-Senorita.png'
import student8 from '../../assets/images/academics/academicquality/Miss. Akade-Tanmayee.png'
// import cardCup from '../../assets/images/academics/cupIcon.svg'

const data1 = [
    {
        studentProfile: student2,
        studenName: 'Nagar Saurabh Rajesh',
        studentTitle: 'Gold Medal Winner',
        studentBatch: '3rd Year BDS (2010-11)',
        studentRank: '1st'
    },
    {
        studentProfile: student3,
        studenName: 'Miss.Rajput Raksha',
        studentTitle: 'Merit certificate Winner',
        studentBatch: '1st Year B.D.S.(2010-11)',
        studentRank: '2nd '
    },
    {
        studentProfile: student4,
        studenName: 'Miss.Jaggi Bhagyashree',
        studentTitle: 'Merit Certificate Winner',
        studentBatch: '1st Year B.D.S. (2010-11) ',
        studentRank: '5th'
    },
    {
        studentProfile: student5,
        studenName: 'Miss. Bhatia Darshana',
        studentTitle: 'Merit Certificate Winner',
        studentBatch: '3rd Year B.D.S. (2012-13),',
        studentRank: '1st'
    },
];

const data2 = [{
    studentProfile: student6,
    studenName: 'Miss. Doiphode Avani',
    studentTitle: 'Merit Certificate Winner',
    studentBatch: '4th Year B.D.S. (2016-17)',
    studentRank: '4th'
},
{
    studentProfile: student7,
    studenName: 'Miss.DSouza Senorita',
    studentTitle: 'Gold Medal Winner,',
    studentBatch: '3rd Year BDS (2010-11)',
    studentRank: '1st'
},
{
    studentProfile: student8,
    studenName: 'Miss. Akade Tanmayee',
    studentTitle: 'Gold Medal Winner',
    studentBatch: '1st Year B.D.S. (2018-19)',
    studentRank: '1st'
},
/*{
    studentProfile: student1,
    studenName: 'Nagar Saurabh Rajesh',
    studentTitle: 'Gold Medal Winner',
    studentBatch: '3rd Year BDS (2010-11)',
    studentRank: '1st'
}*/
]



function AcademicQuality() {
    return (
        <div className='p-0 m-0' id='academicQuality' >
            <div className='w-full h-16 bg-[#800000] border-[2.5px]'>
                <h3 className='text-center font-bold flex items-center justify-center text-neutral-200 text-2xl pt-3 font-fam'>  Academic Quality </h3>
            </div>
            <div className='bgImg flex flex-col justify-center items-center flex-wrap border-[4px]'>
                <div className='flex flex-row justify-around w-full flex-wrap my-6 gap-5 md:gap-0'>
                    {data1.map((student, i) => (
                        <div key={i} className='cardOne flex flex-col items-start font-fam font-bold px-2.5 py-2 w-60 h-48'>
                            <img src={student.studentProfile} alt="" className='rounded-sm border-2 border-yellow-300 w-full' />
                            <div className='text-center justify-center font-fam text-neutral-200 px-2 py-2'>
                                <h1 className='studName'>Mr. {student.studenName}</h1>
                                <p className='studContent text-xs'> {student.studentTitle} ,</p>
                                <p className='text-xs px-4'>
                                    {student.studentBatch}
                                    {student.studentRank} Rank in University
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row w-full justify-around flex-wrap my-6 gap-5 md:gap-0">
                    {data2.map((student, i) => (
                        <div key={i} className='cardOne flex flex-col justify-center items-start font-fam font-bold  px-2.5 py-2 w-60 h-48'>
                            <img src={student.studentProfile} alt="" className='rounded-sm border-2 border-yellow-300 w-full' />
                            <div className='text-center justify-center font-fam text-neutral-200 px-2 py-2'>
                                <h1 className='studName'>Mr. {student.studenName}</h1>
                                <p className='studContent text-xs'> {student.studentTitle} ,</p>
                                <p className='text-xs px-4'>
                                    {student.studentBatch}
                                    {student.studentRank} Rank in University
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                </div>
            </div>
        </div>
    )
}

export default AcademicQuality