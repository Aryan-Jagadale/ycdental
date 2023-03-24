import React from "react";
import { conservativeDentistryLink } from "../../../utils/deptComp";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";

const DeptCDE = () => {
  return (
    <DepartmentLayout
      name={"Conservative Dentistry and Endodontics"}
      src={
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      }
      hod={"Dr. Sangham Gorde"}
      /*strong={}*/
      description={"This branch of dentistry deals with restoration of diseased teeth, thus conserving remaining tooth structure & preserving the natural dentition. If deals with smile designing, tissue and regenerative procedure, root canals, bleaching etc."}
      faculties={<Faculties facLink={conservativeDentistryLink} />}
    />
  );
};

export default DeptCDE;
