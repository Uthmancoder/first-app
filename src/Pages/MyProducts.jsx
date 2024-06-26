import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FetchProducts } from "../Redux/AllProduct";
import { useDispatch } from "react-redux";

const MyProducts = () => {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:1234/AllProducts");
      console.log(response.data);
      setProducts(response.data);
      dispatch(FetchProducts(response.data));
    };
    fetchProducts();
  }, []);
  // Http METHODS,
  // GET, POST, PUT, DELETE

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteProd = async (id) => {
    const deleteProd = axios.delete(`http://localhost:1234/AllProducts/${id}`);
    console.log("Deleted Product : ", deleteProd);
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="p-5 ">
        <h1 className="text-center my-3">My Products</h1>
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
                    onClick={() => handleEdit(data.id)}
                    className="btn btn-success"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProd(data.id)}
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
      </div>
    </div>
  );
};

export default MyProducts;
