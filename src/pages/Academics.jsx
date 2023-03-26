import React from 'react'
import Academic from '../components/AcademicPage/Academic'
import AcademicQuality from '../components/AcademicPage/AcademicQuality'
import Labrotiers from '../components/AcademicPage/Labrotiers'
import Publication from '../components/AcademicPage/Publication'
import UGPGCourse from '../components/AcademicPage/UGPGCourse'
import Department from '../components/DepartmentPage/Department'

const Academics = () => {
    return (
        <>
            <Academic />
            <UGPGCourse/>
            <AcademicQuality />
            <Labrotiers/>
            <Department/>
            <Publication/>

        </>
    )
}

export default Academics
