import React from 'react';
import HeaderSection from "../components/AdmissionPage/headerSection";
import HODSection from '../components/AdmissionPage/HODSection';
import Admission from '../components/AdmissionPage/MDSAdmission';

function MDSAdmission() {
  return (
    <>
        <HeaderSection />
        <HODSection />
        <Admission />
    </>
  )
}

export default MDSAdmission