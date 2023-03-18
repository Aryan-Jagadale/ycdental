import React from "react";
import HeaderSection from "../components/AdmissionPage/headerSection";
import HODSection from "../components/AdmissionPage/HODSection";
import Admissions from "../components/AdmissionPage/BDSAdmission";

function BDSAdmission() {
  return (
    <>
      {" "}
      <HeaderSection />
      <HODSection />
      <Admissions />
    </>
  );
}

export default BDSAdmission;
