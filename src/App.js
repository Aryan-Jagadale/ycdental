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
import Loader from "./components/Loader/index";

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
          </Routes>
          <FooterComp />
        </>
      )}
    </>
  );
}

export default App;
