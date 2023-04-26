import React from "react";
import "../../../style/DepartmentsPage/department.css";

import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";
import { publicHealthLink } from "../../../content/Academics/department/publicHealthDentistry";

const DeptPuHeaDentistry = () => {
  return (
    <DepartmentLayout
      name={"Public Health Dentistry"}
     

      description={
        "The Department aims to identify the prevailing needs, provide curative services and promote awareness about the oral health in the rural and urban community. Students conduct screening and treatment camps to deliver the comprehensive dental care to cater the needs of the society, one smile at a time. The Tobacco Cessation centre provides guidance and support to quit the habit. The department is also involved in celebration of important health days."
      }
      faculties={<Faculties facLink={publicHealthLink} />}
    />
  );
};

export default DeptPuHeaDentistry;
