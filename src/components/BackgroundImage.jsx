// src/components/BackgroundImage.js
import React from "react";

const BackgroundImage = () => {
  return (
    <div
      className="fixed opacity-15 top-0 left-0 w-full h-full bg-cover bg-center -z-10"
      style={{ backgroundImage: "url(/clouds.jpeg)" }}
    ></div>
  );
};

export default BackgroundImage;
