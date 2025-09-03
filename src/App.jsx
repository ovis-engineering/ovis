import React from "react";
import Home from "./pages/Home";
import "./index.css";
import OurServices from "./components/OurServices";
import Services from "./pages/Services";
import CadService from "./pages/CadService";
import Porfolio from "./components/Porfolio";
import PortfolioPage from "./pages/PortfolioPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div className='poppins-regular'>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/millwork' element={<Services />} />
          <Route path='/cad' element={<CadService />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactUs' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
