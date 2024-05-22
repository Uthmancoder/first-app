import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { products } from "../Components/server";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const ViewMore = (id) => {
    console.log("Id of procuct Clicked : ", id);
    navigate(`/services/${id}`);
  };
  return (
    <div>
      <Navbar />

      <div className="row w-100 container-fluid mx-auto my-5">
        {products.map((data) => (
          <div key={data.id} className="col-11 col-md-6 col-lg-3">
            <img className="img-fluid w-100 h-50" src={data.image} alt="" />
            <h4>{data.productName}</h4>
            <h5>#{data.productPrice}</h5>
            <div className="d-flex align-items-center gap-2 justify-content-between ">
              <button
                onClick={() => ViewMore(data.id)}
                className="btn btn alert alert-success"
              >
                View More
              </button>
              <button className="btn btn alert alert-primary">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
