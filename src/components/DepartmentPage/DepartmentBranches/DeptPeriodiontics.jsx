import React from "react";
import Faculties from "../Department/Faculties";

import DepartmentLayout from "./DepartmentLayout";
import { periodontologyLink } from "../../../content/Academics/department/periodonticsStaff";

const DeptPeriodiontics = () => {
  return (
    <DepartmentLayout
      name={"Periodontics"}
      description={
        "As Healthy Smile begins with Healthy gums, Gum Health is a key factor for Health and well being; every tooth in oral cavity deserves to Survive for a lifetime and we as a Periodontists strive to preserve each one to improve overall quality of life."
      }
      faculties={<Faculties facLink={periodontologyLink} />}
    />
  );
};

export default DeptPeriodiontics;
