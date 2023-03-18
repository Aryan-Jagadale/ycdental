import React from 'react';
import HeaderSection from "../components/AdmissionPage/headerSection";
import HODSection from '../components/AdmissionPage/HODSection';
import MDSAdmission from '../components/AdmissionPage/MDSAdmission';

function Admission() {
  return (
    <>
        <HeaderSection />
        <HODSection />
        <MDSAdmission />
    </>
  )
}

export default Admission