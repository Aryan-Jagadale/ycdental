import React from "react";
import "../../../style/DepartmentsPage/department.css";
import DepartmentLayout from "./DepartmentLayout";
import Faculties from "../Department/Faculties";
import {oralmrdLink} from "../../../utils/deptComp";




const DepartmentORMEDRAD = () => {

  

  return (
    <DepartmentLayout
      name={"Oral Medicine & Radiology"}
      src={
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      }
      hod={"Dr. Raorale Ashish"}
      strong={"Eyes cannot see what mind doesn’t know"}
      description={"Oral Medicine & Radiology is a specialized branch that deals with the clinical and radiological diagnosis of diseases affecting the oral & maxillofacial region at also specializes in non-surgical management of medically related disorder affecting the oral & maxillofacial region. Visualizing the oral signs and symptoms and radiographs we can give a tentative diagnosis of diseases affecting the body and that is why it is said that mouth is the mirror of the body."}
      faculties={<Faculties facLink={oralmrdLink}/>}

    />
  );
};

export default DepartmentORMEDRAD;





