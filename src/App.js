/* eslint-disable react/jsx-pascal-case */
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./pages/About";
import FooterComp from "./components/Footer";
import NewNavbar from "./components/NewNavbar";
import Department from "./components/DepartmentPage/Department";
import Academics from "./pages/Academics";
import Admissionsss from "./pages/Admission";
import Loader from "./components/Loader/index";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "react-scroll-to-top";
//import MySVG from "./assets/images/departormedrad/double.avif";
import { BsArrowUpShort } from "react-icons/bs";
import Muhs from "./components/Muhs/Muhs";
import Gallery from "./pages/Gallery";
import Naac from "./pages/NaacPage";

import DepartmentORMEDRAD from "./components/DepartmentPage/DepartmentBranches/DepartmentORMEDRAD";
import DeptAnotomy from "./components/DepartmentPage/DepartmentBranches/DeptAnotomy";
import DeptProsthodontics from "./components/DepartmentPage/DepartmentBranches/DeptProsthodontics";
import DeptOralMaxSur from "./components/DepartmentPage/DepartmentBranches/DeptOralMaxSur";
import DeptOralPathology from "./components/DepartmentPage/DepartmentBranches/DeptOralPathology";
import DeptCDE from "./components/DepartmentPage/DepartmentBranches/DeptCDandE";
import DeptPedo from "./components/DepartmentPage/DepartmentBranches/DeptPedo";
import DeptPeriodiontics from "./components/DepartmentPage/DepartmentBranches/DeptPeriodiontics";
import DeptPuHeaDentistry from "./components/DepartmentPage/DepartmentBranches/DeptPuHeaDentistry";
import DeptOrthodontics from "./components/DepartmentPage/DepartmentBranches/DeptOrthodontics";
import AntiRagg from "./components/AboutPage/Committee/AntiRagg";
import Grievance from "./components/AboutPage/Committee/Grievance";
import Library from "./components/AboutPage/Committee/Library";
import ParentTeacher from "./components/AboutPage/Committee/ParentTeacher";
import Vishakha from "./components/AboutPage/Committee/Vishakha";
import Alumni from "./components/AboutPage/Committee/Alumni";
import StudentCouncil from "./components/AboutPage/Committee/StudentCouncil";

import DeptAnesthesia from "./components/DepartmentPage/DepartmentBranches/DeptAnesthesia";
import DeptMicrobiology from "./components/DepartmentPage/DepartmentBranches/DeptMicrobiology";
import DeptPharma from "./components/DepartmentPage/DepartmentBranches/DeptPharma";
import DeptBiochemistry from "./components/DepartmentPage/DepartmentBranches/DeptBiochemistry";
import DeptPhysiology from "./components/DepartmentPage/DepartmentBranches/DeptPhysiology";
import DeptGenMedicine from "./components/DepartmentPage/DepartmentBranches/DeptGenMedicine";
import DeptgenSurgery from "./components/DepartmentPage/DepartmentBranches/DeptgenSurgery";
import DeptGenPathology from "./components/DepartmentPage/DepartmentBranches/DeptGenPathology";

import Criteria1 from "./components/NAAC/NAAC-Criteria/Criteria1"
import Criteria2 from "./components/NAAC/NAAC-Criteria/Criteria2"
import Criteria3 from "./components/NAAC/NAAC-Criteria/Criteria3"
import Criteria4 from "./components/NAAC/NAAC-Criteria/Criteria4"
import Criteria5 from "./components/NAAC/NAAC-Criteria/Criteria5"
import Criteria6 from "./components/NAAC/NAAC-Criteria/Criteria6"
import Criteria7 from "./components/NAAC/NAAC-Criteria/Criteria7"
import Criteria8 from "./components/NAAC/NAAC-Criteria/Criteria8"

import Criteria1_1 from "./components/NAAC/NAAC-Criteria/Criteria1/1_1"
import Criteria1_2 from "./components/NAAC/NAAC-Criteria/Criteria1/1_2"
import Criteria1_3 from "./components/NAAC/NAAC-Criteria/Criteria1/1_3"
import Criteria1_4 from "./components/NAAC/NAAC-Criteria/Criteria1/1_4"

import Criteria2_1 from "./components/NAAC/NAAC-Criteria/Criteria2/2_1"
import Criteria2_2 from "./components/NAAC/NAAC-Criteria/Criteria2/2_2"
import Criteria2_3 from "./components/NAAC/NAAC-Criteria/Criteria2/2_3"
import Criteria2_4 from "./components/NAAC/NAAC-Criteria/Criteria2/2_4"
import Criteria2_5 from "./components/NAAC/NAAC-Criteria/Criteria2/2_5"
import Criteria2_6 from "./components/NAAC/NAAC-Criteria/Criteria2/2_6"
import Criteria2_7 from "./components/NAAC/NAAC-Criteria/Criteria2/2_7"

import Criteria3_1 from "./components/NAAC/NAAC-Criteria/Criteria3/3_1"
import Criteria3_2 from "./components/NAAC/NAAC-Criteria/Criteria3/3_2"
import Criteria3_3 from "./components/NAAC/NAAC-Criteria/Criteria3/3_3"
import Criteria3_4 from "./components/NAAC/NAAC-Criteria/Criteria3/3_4"
import Criteria3_5 from "./components/NAAC/NAAC-Criteria/Criteria3/3_5"

import Criteria4_1 from "./components/NAAC/NAAC-Criteria/Criteria4/4_1"
import Criteria4_2 from "./components/NAAC/NAAC-Criteria/Criteria4/4_2"
import Criteria4_3 from "./components/NAAC/NAAC-Criteria/Criteria4/4_3"
import Criteria4_4 from "./components/NAAC/NAAC-Criteria/Criteria4/4_4"
import Criteria4_5 from "./components/NAAC/NAAC-Criteria/Criteria4/4_5"

import Criteria5_1 from "./components/NAAC/NAAC-Criteria/Criteria5/5_1"
import Criteria5_2 from "./components/NAAC/NAAC-Criteria/Criteria5/5_2"
import Criteria5_3 from "./components/NAAC/NAAC-Criteria/Criteria5/5_3"
import Criteria5_4 from "./components/NAAC/NAAC-Criteria/Criteria5/5_4"

import Criteria6_1 from "./components/NAAC/NAAC-Criteria/Criteria6/6_1"
import Criteria6_2 from "./components/NAAC/NAAC-Criteria/Criteria6/6_2"
import Criteria6_3 from "./components/NAAC/NAAC-Criteria/Criteria6/6_3"
import Criteria6_4 from "./components/NAAC/NAAC-Criteria/Criteria6/6_4"
import Criteria6_5 from "./components/NAAC/NAAC-Criteria/Criteria6/6_5"

import Criteria7_1 from "./components/NAAC/NAAC-Criteria/Criteria7/7_1"
import Criteria7_2 from "./components/NAAC/NAAC-Criteria/Criteria7/7_2"
import Criteria7_3 from "./components/NAAC/NAAC-Criteria/Criteria7/7_3"

import Criteria8_1 from "./components/NAAC/NAAC-Criteria/Criteria8/8_1"

import Criteria_1_1_Subcat from "./components/NAAC/NAAC-Criteria/Criteria1/Criteria_1_1_Subcat";
import Criteria_1_3_Subcat from "./components/NAAC/NAAC-Criteria/Criteria3/Criteria_1_3_Subcat";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <NewNavbar />
          <ScrollToTop
            smooth
            component={
              <div className="flex items-center justify-center">
                <BsArrowUpShort className="h-[80%] w-[80%]" />
              </div>
            }
          />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            {/*Committee */}
            <Route
              path="/committee/anti-ragging-commitee"
              element={<AntiRagg />}
            />

            <Route
              path="/committee/grievance-committee"
              element={<Grievance />}
            />

            <Route path="/committee/library-commitee" element={<Library />} />

            <Route
              path="/committee/parent-teacher-commitee"
              element={<ParentTeacher />}
            />

            <Route path="/committee/vishakha-commitee" element={<Vishakha />} />

            <Route path="/committee/alumni-commitee" element={<Alumni />} />

            <Route
              path="/committee/student-council-commitee"
              element={<StudentCouncil />}
            />

            {/*Academics */}
            <Route path="/academic" element={<Academics />} />

            {/*Departments */}
            <Route path="/department" element={<Department />} />

            <Route
              path="/department/oral-medicine-radiology"
              element={<DepartmentORMEDRAD />}
            />
            <Route
              path="/department/conservative-dentistry-endodontics"
              element={<DeptCDE />}
            />
            <Route
              path="/department/oral-maxillofacial-surgery"
              element={<DeptOralMaxSur />}
            />

            <Route
              path="/department/oral-pathology"
              element={<DeptOralPathology />}
            />

            <Route
              path="/department/orthodontics"
              element={<DeptOrthodontics />}
            />

            <Route path="/department/pedodontics" element={<DeptPedo />} />

            <Route
              path="/department/periodontics"
              element={<DeptPeriodiontics />}
            />

            <Route
              path="/department/public-health-dentistry"
              element={<DeptPuHeaDentistry />}
            />

            <Route
              path="/department/prosthodontics"
              element={<DeptProsthodontics />}
            />

            <Route path="/department/anotomy" element={<DeptAnotomy />} />
            <Route path="/department/anesthesia" element={<DeptAnesthesia />} />
            <Route
              path="/department/microbiology"
              element={<DeptMicrobiology />}
            />
            <Route path="/department/pharma" element={<DeptPharma />} />
            <Route
              path="/department/biochemistry"
              element={<DeptBiochemistry />}
            />
            <Route path="/department/physiology" element={<DeptPhysiology />} />

            <Route
              path="/department/gen-medicine"
              element={<DeptGenMedicine />}
            />
            <Route
              path="/department/gen-surgery"
              element={<DeptgenSurgery />}
            />
            <Route
              path="/department/panthology"
              element={<DeptGenPathology />}
            />

            <Route path="/admission" element={<Admissionsss />} />

            <Route path="/terms-conditions" element={<TermsAndConditions />} />

            <Route path="/muhs-mandate" element={<Muhs />} />

            <Route path="/gallery" element={<Gallery />} />

            <Route path="/naac" element={<Naac />} />
            <Route path="/nacc/Criteria1" element={<Criteria1 />} />
            <Route path="/nacc/Criteria2" element={<Criteria2 />} />
            <Route path="/nacc/Criteria3" element={<Criteria3 />} />
            <Route path="/nacc/Criteria4" element={<Criteria4 />} />
            <Route path="/nacc/Criteria5" element={<Criteria5 />} />
            <Route path="/nacc/Criteria6" element={<Criteria6 />} />
            <Route path="/nacc/Criteria7" element={<Criteria7 />} />
            <Route path="/nacc/Criteria8" element={<Criteria8 />} />

            <Route path="/nacc/Criteria1/1-1" element={<Criteria1_1 />} />
            <Route path="/nacc/Criteria1/1-2" element={<Criteria1_2 />} />
            <Route path="/nacc/Criteria1/1-3" element={<Criteria1_3 />} />
            <Route path="/nacc/Criteria1/1-4" element={<Criteria1_4 />} />

            <Route path="/nacc/Criteria2/2-1" element={<Criteria2_1 />} />
            <Route path="/nacc/Criteria2/2-2" element={<Criteria2_2 />} />
            <Route path="/nacc/Criteria2/2-3" element={<Criteria2_3 />} />
            <Route path="/nacc/Criteria2/2-4" element={<Criteria2_4 />} />
            <Route path="/nacc/Criteria2/2-5" element={<Criteria2_5 />} />
            <Route path="/nacc/Criteria2/2-6" element={<Criteria2_6 />} />
            <Route path="/nacc/Criteria2/2-7" element={<Criteria2_7 />} />
            
            <Route path="/nacc/Criteria3/3-1" element={<Criteria3_1 />} />
            <Route path="/nacc/Criteria3/3-2" element={<Criteria3_2 />} />
            <Route path="/nacc/Criteria3/3-3" element={<Criteria3_3 />} />
            <Route path="/nacc/Criteria3/3-4" element={<Criteria3_4 />} />
            <Route path="/nacc/Criteria3/3-5" element={<Criteria3_5 />} />

            <Route path="/nacc/Criteria4/4-1" element={<Criteria4_1 />} />
            <Route path="/nacc/Criteria4/4-2" element={<Criteria4_2 />} />
            <Route path="/nacc/Criteria4/4-3" element={<Criteria4_3 />} />
            <Route path="/nacc/Criteria4/4-4" element={<Criteria4_4 />} />
            <Route path="/nacc/Criteria4/4-5" element={<Criteria4_5 />} />

            <Route path="/nacc/Criteria5/5-1" element={<Criteria5_1 />} />
            <Route path="/nacc/Criteria5/5-2" element={<Criteria5_2 />} />
            <Route path="/nacc/Criteria5/5-3" element={<Criteria5_3 />} />
            <Route path="/nacc/Criteria5/5-4" element={<Criteria5_4 />} />

            <Route path="/nacc/Criteria6/6-1" element={<Criteria6_1 />} />
            <Route path="/nacc/Criteria6/6-2" element={<Criteria6_2 />} />
            <Route path="/nacc/Criteria6/6-3" element={<Criteria6_3 />} />
            <Route path="/nacc/Criteria6/6-4" element={<Criteria6_4 />} />
            <Route path="/nacc/Criteria6/6-5" element={<Criteria6_5 />} />

            <Route path="/nacc/Criteria7/7-1" element={<Criteria7_1 />} />
            <Route path="/nacc/Criteria7/7-2" element={<Criteria7_2 />} />
            <Route path="/nacc/Criteria7/7-3" element={<Criteria7_3 />} />

            <Route path="/nacc/Criteria8/8-1" element={<Criteria8_1 />} />

            <Route path="/nacc/Criteria1/1-1-1" element={<Criteria_1_1_Subcat />} />
            <Route path="/nacc/Criteria1/1-3-1" element={<Criteria_1_3_Subcat />} />

          </Routes>

          <FooterComp />
        </>
      )}
    </>
  );
}

export default App;
