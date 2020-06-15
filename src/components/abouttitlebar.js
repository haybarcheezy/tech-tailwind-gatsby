import React from "react";
import BuildingsImg from "../images/buildings.jpg";

const AboutTitlebar = () => {
  return (
    <section
      className="text-gray-700 border-t border-gray-200 body-font"
      style={{
        backgroundImage: `url(${BuildingsImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container px-5 py-24 mx-auto mt-6">
        <h1 className="text-5xl font-extrabold leading-9 text-gray-100 sm:leading-10">
          About
        </h1>
        <div className="w-20 h-2 my-4 bg-blue-500" />
        <h3 className="text-left text-gray-200">
          Small intro to about page text.
        </h3>
      </div>
    </section>
  );
};

export default AboutTitlebar;
