import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="p-5">
        <h1 className="text alert alert-danger text-center my-5">
          404 Page Not Found
        </h1>
        <div className="w-fit-content mx-auto">
          <Link className="text-primary text-center  " to={"/"}>
            Go Back To Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
