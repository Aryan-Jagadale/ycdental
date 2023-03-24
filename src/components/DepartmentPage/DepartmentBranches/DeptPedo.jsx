import React from "react";
import "../../../style/DepartmentsPage/department.css";
import { pedodonticsLink } from "../../../utils/deptComp";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";

const DeptPedo = () => {
  return (
    <DepartmentLayout
      name={"Pedodontics"}
      src={
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      }
      hod={"Dr. Sangham Gorde"}
      strong={"Caring for you and your child's smile."}
      description={
        'Paediatric Dentistry is the branch of dentistry that is concerned with the dental care and treatment of children from birth to adulthood. We care for children with special health or medical needs too."The sooner children begin getting regular dental checkups the healthier their mouth will stay throughout their life"'
      }
      faculties={<Faculties facLink={pedodonticsLink} />}
    />
  );
};

export default DeptPedo;
