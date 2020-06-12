import React from "react";
import BuildingsImg from "../images/buildings.jpg";

const AboutTitlebar = () => {
  return (
    <section
      className="text-gray-700 body-font border-t border-gray-200"
      style={{
        backgroundImage: `url(${BuildingsImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container px-5 py-24 mt-6 mx-auto">
        <h1 className="text-6xl leading-tight font-semibold text-gray-100 text-left">
          About
        </h1>
        <div className="w-20 h-2 bg-blue-500 my-4" />
        <h3 className="text-lg text-gray-200 text-left">
          Small intro to about page text.
        </h3>
      </div>
    </section>
  );
};

export default AboutTitlebar;
