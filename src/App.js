import React from "react";
import Hero from "./Pages/Hero";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import PageNotFound from "./Pages/PageNotFound";
import Services from "./Pages/Services";
import Description from "./Pages/Description";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />}>
          <Route path=":id" element={<Description />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
