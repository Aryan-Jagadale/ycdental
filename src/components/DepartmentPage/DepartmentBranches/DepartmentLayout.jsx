import React, { useEffect } from "react";
import "../../../style/DepartmentsPage/department.css";
import AccordianLayout from "../AccordianStuff/AccordianLayout";

const DepartmentLayout = ({
  name,
  src,
  hod,
  strong,
  description,
  faculties,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="h-[80vh] bg-[#FFD900] flex justify-center items-center">
        <section className="h-[90%] w-[90%] md:h-[80%] md:w-[80%] ormedBanner flex items-center justify-center ">
          <h1 className="font-fam font-extrabold tracking-wide text-black text-3xl text-center border-b-2 border-black">
            {name}
            <br />
            Department
          </h1>
        </section>
      </div>

      <div>
        <div className="flex items-center justify-center p-9 flex-col md:flex-row">


          <section className="w-[80%] p-2 md:p-5">
            <p className="font-fam tracking-wide text-center" style={{
              fontSize: "1.35rem"
            }}>

              <strong>{strong}</strong>
              <br />
              {description}
            </p>
          </section>
        </div>
      </div>

      <div className="p-7 md:p-14">

        <AccordianLayout title={"Faculties & Staff"} description={faculties} />


      </div>
    </div>
  );
};

export default DepartmentLayout;
