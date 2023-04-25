import React from 'react'
import loadable from '@loadable/component'

const Academic = loadable(() => import('../components/AcademicPage/Academic'))
const AcademicQuality = loadable(() => import('../components/AcademicPage/AcademicQuality'))
const Labrotiers = loadable(() => import('../components/AcademicPage/Labrotiers'))
const Publication = loadable(() => import('../components/AcademicPage/Publication'))
const UGPGCourse = loadable(() => import('../components/AcademicPage/UGPGCourse'))
const Department = loadable(() => import('../components/DepartmentPage/Department'))
const AcademicCalender = loadable(() => import('../components/AcademicPage/AcademicCalender'))
const CourseOutcomes = loadable(() => import('../components/AcademicPage/CourseOutcomes'))



const Academics = () => {
    return (
        <>
            <Academic />
            <AcademicCalender />
            <UGPGCourse/>
            <CourseOutcomes />
            <AcademicQuality />
            <Labrotiers/>
            <Department/>
            <Publication/>

        </>
    )
}

export default Academics
