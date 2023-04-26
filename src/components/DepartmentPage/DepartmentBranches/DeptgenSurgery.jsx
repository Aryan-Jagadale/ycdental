import React from "react";
import "../../../style/DepartmentsPage/department.css";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";
import { generalSurgeryLink } from "../../../content/Academics/department/generalSurgery";


function DeptgenSurgery() {
  return (
    <DepartmentLayout
      name={"General Surgery"}
      strong={"Eyes cannot see what mind doesn’t know"}
      description={"This branch of dentistry deals with restoration of diseased teeth, thus conserving remaining tooth structure & preserving the natural dentition. If deals with smile designing, tissue and regenerative procedure, root canals, bleaching etc."}
      faculties={<Faculties facLink={generalSurgeryLink} />}

    />
  )
}

export default DeptgenSurgery