import React from "react";
import "../../../style/DepartmentsPage/department.css";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";
import { oralPathologyLink } from "../../../content/Academics/department/oralPathology";


const DeptOralPathology = () => {
  return (
    <DepartmentLayout
      name={"Oral Pathology"}
      
      strong={"\"To Diagnose is a first step towards Treatment.\""}
      description={
        "In this branch of science understanding the development of disease and confirming its diagnosis by physical evidence is carried out, which than not only aids in prevention but as well as resolving the disease state."
      }
      faculties={<Faculties facLink={oralPathologyLink} />}
    />
  );
};

export default DeptOralPathology;
