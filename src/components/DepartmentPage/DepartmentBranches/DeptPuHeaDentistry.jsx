import React from 'react'
import "../../../style/DepartmentsPage/department.css";
import { publicHealthLink } from '../../../utils/deptComp';
import Faculties from "../Department/Faculties";
import DepartmentLayout from "./DepartmentLayout";


const DeptPuHeaDentistry = () => {
  return (
    
    <DepartmentLayout
    name={"Public Health Dentistry"}
    src={
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
    hod={"Dr. Sangham Gorde"}
    /*strong={""}*/

    description={"The Department aims to identify the prevailing needs, provide curative services and promote awareness about the oral health in the rural and urban community. Students conduct screening and treatment camps to deliver the comprehensive dental care to cater the needs of the society, one smile at a time. The Tobacco Cessation centre provides guidance and support to quit the habit. The department is also involved in celebration of important health days."}
    faculties={<Faculties facLink={publicHealthLink} />}
    
    
    
    
    />



  )
}

export default DeptPuHeaDentistry