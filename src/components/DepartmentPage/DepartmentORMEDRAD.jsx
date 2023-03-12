import React from "react";
//import OrmedBanner from "../../assets/images/departormedrad/ormedbanner.png";
import "../../style/DepartmentsPage/department.css";
import AccList from "./AccordianStuff/AccList";
import Accordian from "./AccordianStuff/Accordian";
import AccordianLayout from "./AccordianStuff/AccordianLayout";

const DepartmentORMEDRAD = () => {
  return (
    <div>
      <div className="h-[80vh] bg-[#FFD900] flex justify-center items-center">
        <section className="h-[90%] w-[90%] md:h-[80%] md:w-[80%] ormedBanner flex items-center justify-center ">
          <h1 className="font-fam font-extrabold tracking-wide text-black text-3xl text-center border-b-2 border-black">
            Oral Medicine & Radiology
            <br />
            Department
          </h1>
        </section>
      </div>

      <div>
        <div className="flex items-center justify-center p-9 flex-col md:flex-row">
          <section className="w-[100%] md:w-[30%] p-5 md:p-3">
            <div className="bg-[#BBBABA] p-2 md:p-1 rounded-tl-lg rounded-br-lg h-[70%]">
              <img
                src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="M.D.S name"
                className="w-full"
              />
              <div className="text-center">
                <h3 className="font-bold text-lg">Reader & HOD</h3>
                <h5 className="font-semibold text-base">
                  Dr. Gorde Sangam, M.D.S
                </h5>
              </div>
            </div>
          </section>

          <section className="w-[100%] md:w-[70%] p-2 md:p-5">
            <p className="font-fam tracking-wide">
              The Department of{" "}
              <strong>Oral Medicine & Radiology Department</strong> was
              established in 2008 with intake of 60 students. The department has
              good infrastructure with well-established laboratories. The
              department has experienced and dedicated faculties who give
              personal attention to each and every individual student. The
              department emphasizes on effective teaching learning process
              including project based learning using modern tools and
              technologies. Department is working hard to improve upon the
              quality of education and the students overall performance in the
              era of rapidly changing technology. Department of Oral Medicine
              and Radiology is unique in that it combines Oral Medicine and
              Radiology.
            </p>
          </section>
        </div>
      </div>

      <div className="p-7 md:p-14">
        <Accordian title={"Vision & Mission"} description={"Coming soon..."} />
        <Accordian
          title={"Program Educational Objectives"}
          description={"Coming soon..."}
        />

        <Accordian title={"Program Outcomes"} description={"Coming soon..."} />
        <Accordian title={"Faculties & Staff"} description={"Coming soon..."} />
        <Accordian title={"Curriculum"} description={"Coming soon..."} />

        <AccordianLayout title={"Academic Calendar"} description={<AccList/>} />

        <Accordian title={"Co-Curricular Activities"} description={"Coming soon..."} />
        <Accordian title={"Extra Curricular Activities"} description={"Coming soon..."} />


        <AccordianLayout title={"NewsLetter And Magazine"} description={<AccList title={"NewsLetter And Magazine"}/>} />
        

      </div>
    </div>
  );
};

export default DepartmentORMEDRAD;
