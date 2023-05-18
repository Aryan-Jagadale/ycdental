import React from "react";
import "../../../style/DepartmentsPage/department.css";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";
import { generalSurgeryLink } from "../../../content/Academics/department/generalSurgery";
import { GeneralSurgeryCont } from "../../../content/Department/DepartmentContent";


function DeptgenSurgery() {
  return (
    <DepartmentLayout
      name={"General Surgery"}
      strong={""}
      description={GeneralSurgeryCont[0].description}
      faculties={<Faculties facLink={generalSurgeryLink} />}

    />
  )
}

export default DeptgenSurgery