import React from 'react'
import { periodontologyLink } from '../../../utils/deptComp'
import Faculties from '../Department/Faculties'
import DepartmentLayout from './DepartmentLayout'


const DeptPeriodiontics = () => {
  return (
    <DepartmentLayout
    name={"Periodontics"}
      src={
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      }
      hod={"Dr. Sangham Gorde"}
      strong={null}
      description={"As Healthy Smile begins with Healthy gums, Gum Health is a key factor for Health and well being; every tooth in oral cavity deserves to Survive for a lifetime and we as a Periodontists strive to preserve each one to improve overall quality of life."}
      faculties={<Faculties facLink={periodontologyLink}/>}
    
    
    
    
    
    
    
    />
  )
}

export default DeptPeriodiontics