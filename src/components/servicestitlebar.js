import React from "react";
import WorkersImg from "../images/engineers.jpg";

const ServicesTitlebar = () => {
  return (
    <section
      className="text-gray-700 border-t border-gray-200 body-font"
      style={{
        backgroundImage: `url(${WorkersImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container px-5 py-24 mx-auto mt-6">
        <h1 className="text-5xl font-extrabold leading-9 text-gray-100 sm:leading-10">
          Services
        </h1>
        <div className="w-20 h-2 my-4 bg-blue-400" />
        <h3 className="text-left text-gray-200">
          Small intro to about page text.
        </h3>
      </div>
    </section>
  );
};

export default ServicesTitlebar;
