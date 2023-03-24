import React from "react";
import { orthodonticsLink } from "../../../utils/deptComp";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";

const DeptOrthodontics = () => {
  return (
    <DepartmentLayout
      name={"Orthodontics"}
      src={
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      }
      hod={"Dr. Sangham Gorde"}
      strong={"A smile is a curve that sets everything straight"}
      description={
        "As we know teeth are an important component of mouth, they have many essential functions like biting, speech and are indispensible for a good smile. Misaligned Teeth and Jaw Bones affect all these functions, oral health & overall quality of life. Orthodontic treatment can help you with all these conditions, to have confident smile and better quality of life."
      }
      faculties={<Faculties facLink={orthodonticsLink} />}
    />
  );
};

export default DeptOrthodontics;
