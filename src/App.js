import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./pages/About";
import FooterComp from "./components/Footer";
import NewNavbar from "./components/NewNavbar";
import DepartmentORMEDRAD from "./components/DepartmentPage/DepartmentORMEDRAD";

function App() {
  return (
    <>
<NewNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/department/oral-medicine-radiology" element={<DepartmentORMEDRAD/>} />

      </Routes>
      {/*<FooterComp/>*/}
    </>
  );
}

export default App;
