import React from "react";
import "../../../style/DepartmentsPage/department.css";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";
import { anesthesiaLink } from "../../../content/Academics/department/anesthesia";
import { AnesthesiaCont } from "../../../content/Department/DepartmentContent";


function DeptAnesthesia() {
  return (
    <DepartmentLayout
      name={"Anesthesia"}
      src={
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      }
      hod={"Dr. Amrita Pandit"}
      strong={""}
      description={AnesthesiaCont[0].description}
      faculties={<Faculties facLink={anesthesiaLink} />}

    />
  )
}

export default DeptAnesthesia