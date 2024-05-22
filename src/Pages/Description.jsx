import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { products } from "../Components/server";

const Description = () => {
  // const [name, setName] = useState("Uthman");
  const [singleProduct, setsingleProduct] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const findProduct = products.find((data) => data.id === parseInt(id));
    console.log("received Product : ", findProduct);
    setsingleProduct(findProduct);
  }, [id]);

  // const changeName = () => {
  //   setName("Adewale");
  //   console.log("Name : ", name);
  // };

  return (
    <div>
      <Navbar />
      <h2 className="text-center text alert alert-success">Description Page</h2>

      <div className="row w-100 container mx-auto">
        <div className="d-grid justify-start gap-2 col-11 col-md-6 col-lg-6">
          <h3 className="text-start">{singleProduct.productName}</h3>
          <h5 className="text-start">Price : {singleProduct.productPrice}</h5>
          <p className="fs-5 text-start">{singleProduct.description}</p>
          <p className="text-start">Color : {singleProduct.color}</p>
          <button className="bg alert alert-success h-100 w-25  ">
            Add To Cart
          </button>
        </div>
        <div className=" col-11 col-md-6 col-lg-6">
          <img className="img-fluid" src={singleProduct.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Description;
