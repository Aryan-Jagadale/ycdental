import React from "react";
import "../../../style/DepartmentsPage/department.css";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";
import { generalPathologyLink } from "../../../content/Academics/department/generalPathology";
import { PathologyCont } from "../../../content/Department/DepartmentContent";


function DeptGenPathology() {
  return (
    <DepartmentLayout
      name={"General Pathology"}
     
      strong={""}
      description={PathologyCont[0].description}
      faculties={<Faculties facLink={generalPathologyLink} />}

    />
  )
}

export default DeptGenPathology