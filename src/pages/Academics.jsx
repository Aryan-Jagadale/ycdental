import React from 'react'
import Academic from '../components/AcademicPage/Academic'
import AcademicQuality from '../components/AcademicPage/AcademicQuality'
import Labrotiers from '../components/AcademicPage/Labrotiers'
import UGPGCourse from '../components/AcademicPage/UGPGCourse'

const Academics = () => {
    return (
        <>
            <Academic />
            <UGPGCourse/>
            <AcademicQuality />
            <Labrotiers/>
        </>
    )
}

export default Academics
