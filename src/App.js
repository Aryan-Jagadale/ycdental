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

import DepartmentORMEDRAD from "./components/DepartmentPage/DepartmentBranches/DepartmentORMEDRAD";
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

            <Route
              path="/committee/library-commitee"
              element={<Library />}
            />

            <Route
              path="/committee/parent-teacher-commitee"
              element={<ParentTeacher />}
            />

            <Route
              path="/committee/vishakha-commitee"
              element={<Vishakha />}
            />

            <Route
              path="/committee/alumni-commitee"
              element={<Alumni />}
            />

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

            <Route path="/admission" element={<Admissionsss />} />

            <Route path="/terms-conditions" element={<TermsAndConditions />} />

            <Route path="/muhs-mandate" element={<Muhs />} />

            <Route path="/gallery" element={<Gallery />} />
          </Routes>

          <FooterComp />
        </>
      )}
    </>
  );
}

export default App;
