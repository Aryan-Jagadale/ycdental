import React from "react";
import "../../../style/DepartmentsPage/department.css";
import { oralSurgeryLink } from "../../../utils/deptComp";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";


const DeptOralMaxSur = () => {
  return (
    
    <DepartmentLayout
    name={"Oral and Maxillofacial Surgery"}
    src={
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
    hod={"Dr. Jaggi Nitin"}
    /*strong={""}*/
    description={"This branch deals with dentoalveolar surgery, cranio maxillofacial trauma and craniomaxillofacial reconstructive surgery. Patients are referred to department of Oral and Maxillofacial Surgery by both general and specialist dental and medical practitioners which work in collaboration with other specialists such as orthodontists, ear nose and throat surgeons, plastic and reconstructive surgeons and oncologists as part of multidisciplinary teams to optimise the treatment of major conditions and diseases of the mouth, faces and jaws."}
    faculties={<Faculties facLink={oralSurgeryLink}/>}
    
    
    
    
    />
  )
}

export default DeptOralMaxSur
