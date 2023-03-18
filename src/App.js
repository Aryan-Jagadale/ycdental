import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./pages/About";
import FooterComp from "./components/Footer";
import NewNavbar from "./components/NewNavbar";
import DepartmentORMEDRAD from "./components/DepartmentPage/DepartmentORMEDRAD";
import Department from "./components/DepartmentPage/Department";
import Academic from "./components/AcademicPage/Academic";
import Admission from "./pages/Admission";
import Loader from "./components/Loader/index";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "react-scroll-to-top";
//import MySVG from "./assets/images/departormedrad/double.avif";
import { BsArrowUpShort } from "react-icons/bs";
import Muhs from "./components/Muhs/Muhs";

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
          <ScrollToTop smooth component={<div className="flex items-center justify-center"><BsArrowUpShort className="h-[80%] w-[80%]" /></div>} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/*Academic */}
            <Route path="/academic" element={<Academic />} />

            {/*Departments */}
            <Route path="/department" element={<Department />} />

            <Route
              path="/department/oral-medicine-radiology"
              element={<DepartmentORMEDRAD />}
            />

            <Route path="/admission" element={<Admission />} />

            <Route
              path="/terms-conditions"
              element={<TermsAndConditions />}
            />
            
            <Route
              path="/muhs-mandate"
              element={<Muhs/>}
            />


          </Routes>

          <FooterComp />
        </>
      )}
    </>
  );
}

export default App;
