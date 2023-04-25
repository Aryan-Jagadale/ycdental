import React from "react";
import loadable from '@loadable/component'


const HeaderSection = loadable(() => import('../components/AdmissionPage/headerSection'))
const HODSection = loadable(() => import('../components/AdmissionPage/HODSection'))
const StudentWelfare = loadable(() => import('../components/AdmissionPage/StudentWelfare'))


function Admission() {
  return (
    <>
      <HeaderSection />
      <HODSection />
      <StudentWelfare />
    </>
  );
}

export default Admission;
