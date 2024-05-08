import React from "react";

const Button = ({ className, content, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick} className={className}>
        {content}
      </button>
    </div>
  );
};

export default Button;
