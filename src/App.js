import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import TextComponent from "./Components/TextComponent";
import ImageCompo from "./Components/ImageCompo";

const App = () => {
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
    </div>
  );
};

export default App;
