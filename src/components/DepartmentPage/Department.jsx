import React from "react";
import "../../style/DepartmentsPage/department.css";
import { departCompImageLabel } from "../../utils/deptComp";
import LabelDepartComp from "./Department/LabelDepartComp";


const Department = () => {
  return (
    <div id="deptarments">
      <h2 className="tracking-wide font-fam text-center font-bold text-3xl">Departments</h2>
      <section className="bgDepartMent flex items-center justify-around flex-wrap flex-col md:flex-row gap-10">
        {departCompImageLabel.map((item) => (
          <LabelDepartComp item={item} key={item.name} />
        ))}
      </section>
      
    </div>
  );
};

export default Department;
