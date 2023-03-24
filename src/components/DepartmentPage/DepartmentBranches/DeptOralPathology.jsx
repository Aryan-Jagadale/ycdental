import React from "react";
import "../../../style/DepartmentsPage/department.css";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";

const DeptOralPathology = () => {
  return (
    <DepartmentLayout
      name={"Oral Pathology"}
      src={
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      }
      hod={"Dr. Sangham Gorde"}
      strong={"To Diagnose is a first step towards Treatment."}
      description={
        "In this branch of science understanding the development of disease and confirming its diagnosis by physical evidence is carried out, which than not only aids in prevention but as well as resolving the disease state."
      }
      faculties={<Faculties />}
    />
  );
};

export default DeptOralPathology;
