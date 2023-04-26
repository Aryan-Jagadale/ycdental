import React from "react";
import "../../../style/DepartmentsPage/department.css";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";
import { oralSurgeryLink } from "../../../content/Academics/department/oralMaxillofacialSurgery";



const DeptOralMaxSur = () => {
  return (
    
    <DepartmentLayout
    name={"Oral and Maxillofacial Surgery"}

    description={"This branch deals with dentoalveolar surgery, cranio maxillofacial trauma and craniomaxillofacial reconstructive surgery. Patients are referred to department of Oral and Maxillofacial Surgery by both general and specialist dental and medical practitioners which work in collaboration with other specialists such as orthodontists, ear nose and throat surgeons, plastic and reconstructive surgeons and oncologists as part of multidisciplinary teams to optimise the treatment of major conditions and diseases of the mouth, faces and jaws."}
    faculties={<Faculties facLink={oralSurgeryLink}/>}
    
    
    
    
    />
  )
}

export default DeptOralMaxSur
