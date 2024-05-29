import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";

const MyProducts = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:1234/AllProducts");
      console.log(response.data);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);
  // Http METHODS,
  // GET, POST, PUT, DELETE

  return (
    <div>
      <Navbar />
      <h1>My Products</h1>
      <div>
        {products ? (
          products.map((data) => (
            <div>
              <img src={data.productImage} alt="" />

              <h4>Product Name : {data.productName}</h4>
              <p>{data.productPrice}</p>
              <p>{data.productCategory}</p>
            </div>
          ))
        ) : (
          <div> Loading... </div>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
