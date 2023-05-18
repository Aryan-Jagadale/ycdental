import React from "react";
import "../../../style/DepartmentsPage/department.css";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";
import { biochemistryLink } from "../../../content/Academics/department/biochemistry";
import { BiochemistryCont } from "../../../content/Department/DepartmentContent";


function DeptBiochemistry() {
  return (
    <DepartmentLayout
      name={"Biochemistry"}
      strong={""}
      description={BiochemistryCont[0].description}
      faculties={<Faculties facLink={biochemistryLink} />}

    />
  )
}

export default DeptBiochemistry