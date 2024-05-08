import React from "react";
import image from "../ftp.png";

const ImageCompo = () => {
  return (
    <div>
      <img
        className="img-fluid"
        // src="https://avatars.mds.yandex.net/i?id=3b4bfbdc958df20b19c04358abdba19767e3d21d-9182287-images-thumbs&n=13"
        // src={require("../ftp.png")}
        src={image}
        alt=""
      />
    </div>
  );
};

export default ImageCompo;
