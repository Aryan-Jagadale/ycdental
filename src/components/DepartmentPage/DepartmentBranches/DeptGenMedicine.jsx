import React from "react";
import "../../../style/DepartmentsPage/department.css";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";
import { generalMedicineLink } from "../../../content/Academics/department/generalMedicine";
import { generalMedicineCont } from "../../../content/Department/DepartmentContent";

function deptGenMedicine() {
  return (
    <DepartmentLayout
      name={"General Medicine"}
      src={
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      }
      hod={"Dr. Amrita Pandit"}
      strong={""}
      description={generalMedicineCont[0].description}
      faculties={<Faculties facLink={generalMedicineLink} />}
    />
  );
}

export default deptGenMedicine;
