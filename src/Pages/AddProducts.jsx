import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [productName, setproductName] = useState("");
  const [productCategory, setproductCategory] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productImage, setproductImage] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productColor, setproductColor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const productDetails = {
      productName,
      productCategory,
      productPrice,
      productImage,
      productDescription,
      productColor,
    };
    console.log("Product Details : ", productDetails);
    const response = await axios
      .post("http://localhost:1234/AllProducts", productDetails)
      .then(() => {
        alert("Product Uploaded Successfully");
        navigate("/my-products");
      })
      .catch((error) => {
        alert("Error Uploading Product");
        console.log("Error : ", error);
      });
  };

  const handleSelectImage = (ev) => {
    // Have access to whatever image a user select from his local machine
    const file = ev.target.files[0];

    // Function to read and convert the selected file to base 64
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log("Image Result  : ", reader.result);
      setproductImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center my-4">Add Products</h1>

      <form
        action=""
        className="col-11 col-md-8 col-lg-6 mx-auto p-3 rounded-3 shadow"
      >
        <input
          type="text"
          placeholder="Add Product Name"
          className="form-control my-3"
          onChange={(ev) => setproductName(ev.target.value)}
        />
        <input
          type="text"
          onChange={(ev) => setproductCategory(ev.target.value)}
          placeholder="Add Product Category"
          className="form-control my-3"
          name=""
          id=""
        />
        <input
          type="text"
          onChange={(ev) => setproductDescription(ev.target.value)}
          placeholder="Add Product Desctiption"
          className="form-control my-3"
          name=""
          id=""
        />
        <input
          type="number"
          onChange={(ev) => setproductPrice(ev.target.value)}
          placeholder="Add Product Price"
          className="form-control my-3"
          name=""
          id=""
        />
        <input
          type="text"
          onChange={(ev) => setproductColor(ev.target.value)}
          placeholder="Add Product Color"
          className="form-control my-3"
          name=""
          id=""
        />
        <input
          onChange={handleSelectImage}
          type="file"
          name=""
          className="form-control my-3"
          id=""
        />

        {productImage && (
          <div style={{ width: "50px", height: "50px" }}>
            <img
              className="img-fluid w-100 h-100 rounded-circle"
              src={productImage}
              alt=""
            />
          </div>
        )}
        <button onClick={handleSubmit} className="btn btn-dark w-100">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
