import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "../App.css";

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <aside className="sidebar">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus
          corporis perferendis officiis error magnam ratione quae nesciunt autem
          maiores, consectetur nulla harum omnis earum quam aspernatur adipisci
          beatae sequi.{" "}
        </aside>
        <div className="d-grid  align-items-center justify-content-between  p-5">
          <div className="d-flex  align-items-center justify-content-between  p-5">
            <Link to={"/products"}>All Products</Link>
            <Link to={"/products/filtered-Product"}>
              Filterd roduct Products
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Product;
