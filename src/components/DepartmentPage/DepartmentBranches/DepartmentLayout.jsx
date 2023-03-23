import React from 'react'
import "../../../style/DepartmentsPage/department.css";
import AccList from "../AccordianStuff/AccList";
import Accordian from "../AccordianStuff/Accordian";
import AccordianLayout from "../AccordianStuff/AccordianLayout";


const DepartmentLayout = ({name,src,hod,strong,description,faculties}) => {
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
          <section className="w-[100%] md:w-[30%] p-5 md:p-3">
            <div className="bg-[#BBBABA] p-2 md:p-1 rounded-tl-lg rounded-br-lg h-[70%]">
              <img
                src={src}
                alt="M.D.S name"
                className="w-full"
              />

              <div className="text-center">
                <h3 className="font-bold text-lg">Reader & HOD</h3>
                <h5 className="font-semibold text-base">
                {hod}
                </h5>
              </div>
            </div>
          </section>

          <section className="w-[100%] md:w-[70%] p-2 md:p-5">
            <p className="font-fam tracking-wide">
  <strong>"{strong}"</strong> 
              <br/>
              {description}
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
        <Accordian title={"Faculties & Staff"} description={faculties} />
        <Accordian title={"Curriculum"} description={"Coming soon..."} />

        <AccordianLayout
          title={"Academic Calendar"}
          description={<AccList />}
        />

        <Accordian
          title={"Co-Curricular Activities"}
          description={"Coming soon..."}
        />
        <Accordian
          title={"Extra Curricular Activities"}
          description={"Coming soon..."}
        />

        <AccordianLayout
          title={"NewsLetter And Magazine"}
          description={<AccList title={"NewsLetter And Magazine"} />}
        />
      </div>
    </div>
  )
}

export default DepartmentLayout