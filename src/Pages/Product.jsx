import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "../App.css";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:1234/AllProducts");
      console.log(response.data);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);
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
          <div className="row container-fluid mx-auto w-100 gap-3 d-flex align-items-center justify-content-between">
            {products ? (
              products.map((data) => (
                <div className="col-11 col-md-6 col-lg-3 rounded-3 shadow p-3">
                  <div className="w-100 " style={{ height: "300px" }}>
                    <img
                      className="img-fluid w-100 h-100"
                      src={data.productImage}
                      alt=""
                    />
                  </div>

                  <h4>Product Name : {data.productName}</h4>
                  <p>{data.productPrice}</p>
                  <p>{data.productCategory}</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <button
                      // onClick={() => handleEdit(data.id)}
                      className="btn btn-success"
                    >
                      Edit
                    </button>
                    <button
                      // onClick={() => handleDeleteProd(data.id)}
                      className="btn btn-danger"
                    >
                      Del
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div> Loading... </div>
            )}
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Product;
