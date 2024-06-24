import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const inpStyle = {
  shadow: "1px solid black!important",
};

const SignUp = () => {
  const { handleChange, handleBlur, touched, errors, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      Email: "",
      Password: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .required("firstName is Requires")
        .min(5, "Firstname Must be at least 5 characters")
        .max(15, "firstname must be at most 15 characters")
        .matches(/^[A-Za-z]+$/, "Only Alphabets are allowed"),
      lastName: yup
        .string()
        .required("LastName is Requires")
        .min(5, "LastName Must be at least 5 characters")
        .max(15, "LastName must be at most 15 characters")
        .matches(/^[A-Za-z]+$/, "Only Alphabets are allowed"),
      Email: yup
        .string()
        .email("Must be a valid mail")
        .required("Email is Required"),
      Password: yup
        .string()
        .required("Passworsd Is Required")
        .min(6, "Password must be at least 6 characters")
        .max(15, "Password must be at most 15 characters")
        .matches(
          /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
          "Password must  contain at least two uppercase letter, 2 lowercase letter, 2 digits, 2 special characters"
        ),
    }),
  });

  return (
    <div>
      <form
        action=""
        className="col-11 col-md-8 col-lg-6 mx-auto mt-5 rounded-3 shadow bg alert alert-primary p-3 mx-auto"
      >
        <div className="my-2 w-100 d-grid gap-2">
          <label htmlFor="First NAME">First Name</label>
          <input
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            style={inpStyle}
            type="text"
            placeholder="First Name"
            className={`form-control bg aler alert primary shadow-md ${
              touched.firstName && errors.firstName
                ? "is-invalid border-st"
                : "is-valid"
            }`}
            name="firstName"
            id=""
          />
          <small className="text-danger">
            {touched.firstName && errors.firstName ? errors.firstName : null}
          </small>
        </div>
        <div className="my-2 w-100 d-grid gap-2">
          <label htmlFor="Last NAME">Last Name</label>
          <input
            type="text"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            style={inpStyle}
            placeholder="Last Name"
            className="form-control bg aler alert primary shadow-md"
            name="LastName"
            id=""
          />
        </div>
        <div className="my-2 w-100 d-grid gap-2">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            value={values.Email}
            onBlur={handleBlur}
            onChange={handleChange}
            style={inpStyle}
            placeholder="Email"
            className="form-control bg aler alert primary shadow-md"
            name="Email"
            id=""
          />
        </div>
        <div className="my-2 w-100 d-grid gap-2">
          <label htmlFor="Password">Password</label>
          <input
            style={inpStyle}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Password}
            type="text"
            placeholder="Password"
            className="form-control bg aler alert primary shadow-md"
            name="Password"
            id=""
          />
        </div>
        <button className="btn btn-dark py-3 w-100">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
