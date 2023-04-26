import React from "react";
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";
import { conservativeDentistryLink } from "../../../content/Academics/department/conservativeDentistryEndodontics";

const DeptCDE = () => {
  return (
    <DepartmentLayout
      name={"Conservative Dentistry and Endodontics"}
      
      description={"This branch of dentistry deals with restoration of diseased teeth, thus conserving remaining tooth structure & preserving the natural dentition. If deals with smile designing, tissue and regenerative procedure, root canals, bleaching etc."}
      faculties={<Faculties facLink={conservativeDentistryLink} />}
    />
  );
};

export default DeptCDE;
