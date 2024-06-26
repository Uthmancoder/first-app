import React from "react";
import TextComponent from "../Components/TextComponent";
import ImageCompo from "../Components/ImageCompo";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { IncreaseCount } from "../Redux/ProductCount";

const Hero = () => {
  const cardInfo = [
    {
      id: 1,
      image: "https://edu.sqi.ng/wp-content/uploads/2023/06/college.jpg",
      title: "National Innovative Diploma (NID)",
      text: "The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).",
      learnmore: "Learn More",
      contactUs: "Contact Us",
    },
    {
      id: 2,
      image: "https://edu.sqi.ng/wp-content/uploads/2023/06/prof.jpg",
      title: "Professional Diploma Certificate",
      text: "The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.",
      learnmore: "Learn More",
      contactUs: "Contact Us",
    },
    {
      id: 3,
      image: "https://edu.sqi.ng/wp-content/uploads/2023/06/certificate.jpg",
      title: "Certificate Program",
      text: "The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.",
      learnmore: "Learn More",
      contactUs: "Contact Us",
    },
  ];
  const dispatch = useDispatch();

  // const productCount = useSelector((state) => state.ProductCount.productCount);
  // console.log("Product Count : ", productCount);

  const AllProduct = useSelector((state) => state.AllProduct.AllProducts);
  console.log("All Product from Home : ", AllProduct);

  const handleIncrease = () => {
    dispatch(IncreaseCount());
  };

  return (
    <div>
      <Navbar />
      <div className="row w-100 container-fluid mx-auto">
        <div className="col-11 col-md-6 col-lg-6">
          <TextComponent />
        </div>
        <div className="col-11 col-md-6 col-lg-6">
          <ImageCompo />
        </div>
      </div>

      <button onClick={handleIncrease} className="btn btn-success ">
        Increase Product Count
      </button>

      <div className="row w-100 container mx-auto">
        {cardInfo.map((data) => (
          <div key={data.id} className="col-11 col-md-6 col-lg-4">
            <Card
              image={data.image}
              title={data.title}
              text={data.text}
              learnmore={data.learnmore}
              contactUs={data.contactUs}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
