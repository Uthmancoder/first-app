// import React from "react";
import "./Navbar.css";
import Button from "../Button";
import { Link } from "react-router-dom";

// Internal Styling
// const containerStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
// };

const Navbar = () => {
  const clickMe = () => {
    alert("Signup Button Clicked!");
  };
  const handleLogin = () => {
    alert("Login Button Clicked!");
  };
  return (
    <div className="parentContainer p-2 sticky-top">
      <h2>Logo</h2>

      <div className="d-flex align-items-center gap-5">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to={"/contact-us"}>Contact Us</Link>
        <Link to={"/services"}>Services</Link>
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
