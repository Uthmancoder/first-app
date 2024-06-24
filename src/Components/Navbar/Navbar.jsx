// import React from "react";
import "./Navbar.css";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";

// Internal Styling
// const containerStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
// };

const Navbar = () => {
  const navigate = useNavigate();
  const clickMe = () => {
    navigate("/sign-up");
  };
  const handleLogin = () => {
    alert("Login Button Clicked!");
  };
  return (
    <div className="parentContainer p-2 sticky-top">
      <h2>Logo</h2>

      <div className="d-flex align-items-center gap-5">
        <Link to="/">Home</Link>
        <div className="parent">
          <Link to="/about-us">About Us</Link>
          <div className="dropContent d-grid gap-1 card shadow p-3">
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
          </div>
        </div>
        <Link to={"/contact-us"}>Contact Us</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/my-products"}>My Product </Link>
        <Link to={"/add-product"}>Add Product </Link>
      </div>

      <div className="d-flex align-items-center gap-5">
        <Button
          handleClick={clickMe}
          className={"btn btn-danger"}
          content={"Sign Up"}
        />
        <Button
          handleClick={handleLogin}
          className={"btn btn-warning"}
          content={"Log In"}
        />
      </div>
    </div>
  );
};

export default Navbar;
