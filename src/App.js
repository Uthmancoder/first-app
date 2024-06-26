import React from "react";
import Hero from "./Pages/Hero";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import PageNotFound from "./Pages/PageNotFound";
import Services from "./Pages/Services";
import Description from "./Pages/Description";
import Product from "./Pages/Product";
import AllProducts from "./Components/AllProducts";
import FilteredProducts from "./Components/FilteredProducts";
import MyProducts from "./Pages/MyProducts";
import AddProducts from "./Pages/AddProducts";
import EditProducts from "./Pages/EditProducts";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Product />}>
          <Route index element={<AllProducts />} />
          <Route path="filtered-product" element={<FilteredProducts />} />
        </Route>
        <Route path="/services/:id" element={<Description />} />

        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/add-product" element={<AddProducts />} />
        <Route path="/edit/:id" element={<EditProducts />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
