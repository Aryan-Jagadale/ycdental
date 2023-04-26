import React from "react";
import "../../../style/DepartmentsPage/department.css";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";
import { prosthodonticsLink } from "../../../content/Academics/department/prosthodonticsStaff";



const DeptProsthodontics = () => {

  return (
    <DepartmentLayout
      name={"Prosthodontics"}
      strong={"God creates we recreate."}
      description={
        "Department of Prosthodontics and implantology we are replicators of creator's beautiful creation. Prosthodontics is a branch of dentistry that restores and replaces oral and maxillofacial tissues, improves aesthetics and renders oral comfort thereby maintaining a perfect harmony of complete stomatognathic system."
      }
      faculties={<Faculties facLink={prosthodonticsLink} />}
    />
  );
};

export default DeptProsthodontics;
