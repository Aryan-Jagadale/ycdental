import React from "react";
import "../../../style/DepartmentsPage/department.css";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";
import { pharmacologyLink } from "../../../content/Academics/department/pharmacology";
import { PharmacologyCont } from "../../../content/Department/DepartmentContent";


function DeptPharma() {
  return (
    <DepartmentLayout
      name={"Pharmacology"}
      src={
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      }
      hod={"Dr. Amrita Pandit"}
      strong={""}
      description={PharmacologyCont[0].description}
      faculties={<Faculties facLink={pharmacologyLink} />}

    />
  )
}

export default DeptPharma