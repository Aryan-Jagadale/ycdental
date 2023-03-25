import React from "react";
import "../../style/DepartmentsPage/department.css";
import { departCompImageLabel } from "../../utils/deptComp";
import LabelDepartComp from "./Department/LabelDepartComp";

const Department = () => {
  return (
    <div>
      <section className="m-5  bgDepartMent flex items-center justify-around flex-wrap flex-col  md:flex-row   gap-10 p-3 py-5">
        {departCompImageLabel.map((item) => (
          <LabelDepartComp item={item} key={item.name} />
        ))}
      </section>
    </div>
  );
};

export default Department;
