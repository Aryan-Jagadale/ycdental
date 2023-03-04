import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
      <Route path="/" element={<Home/>} />
      
      </Routes>
    </>
  );
}

export default App;
