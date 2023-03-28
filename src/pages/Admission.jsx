import React from "react";
import HeaderSection from "../components/AdmissionPage/headerSection";
import HODSection from "../components/AdmissionPage/HODSection";
import StudentWelfare from "../components/AdmissionPage/StudentWelfare";

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
