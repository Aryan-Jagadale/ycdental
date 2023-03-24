import React from "react";
import "../../../style/DepartmentsPage/department.css";
//import { prosthodonticsLink } from "../../../utils/deptComp";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";
import { prosthodonticsLink } from "../../../utils/deptComp";

const DeptProsthodontics = () => {
//  console.log(prosthodonticsLink);
  return (
    <DepartmentLayout
    name={"Prosthodontics"}
    src={
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
    hod={"Dr. Sangham Gorde"}
    strong={"God creates we recreate."}
    description={"Department of Prosthodontics and implantology we are replicators of creator's beautiful creation. Prosthodontics is a branch of dentistry that restores and replaces oral and maxillofacial tissues, improves aesthetics and renders oral comfort thereby maintaining a perfect harmony of complete stomatognathic system."}
    faculties={<Faculties facLink={prosthodonticsLink} />}
    
    
    
    
    />
  );
};

export default DeptProsthodontics;
