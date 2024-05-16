import React from "react";

const Card = ({ image, title, text, learnmore, contactUs }) => {
  return (
    <div>
      <div className="w-100 h-100">
        <img className="img-fluid w-100 h-100 my-2" src={image} alt="" />
      </div>

      <h1 className="fs-2 font-bold ">{title}</h1>
      <p className="my-2">{text}</p>
      <p>{learnmore}</p>
      <p>{contactUs}</p>
    </div>
  );
};

export default Card;
