import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./Pages/Home/Index";
import About from "./Pages/About us/Index";
import Services from "./Pages/Services/Index";
import FAQ from "./Pages/FAQ/Index";
import Contact from "./Pages/Contact/Index";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
