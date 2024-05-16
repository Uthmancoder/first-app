import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Pages/Hero";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
