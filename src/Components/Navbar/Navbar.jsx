import React from "react";
import "./Navbar.css";
import Button from "../Button";

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
    <div>
      <div
        // Inline STYLING
        // style={{
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "space-between",
        // }}

        // Internal Styling
        // style={containerStyle}
        className="parentContainer p-2"
      >
        <h2>Logo</h2>

        <div className="d-flex align-items-center gap-5">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Services</a>
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
    </div>
  );
};

export default Navbar;
