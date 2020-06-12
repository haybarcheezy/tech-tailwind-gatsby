import React from "react";
import Heroimg from "../images/heroimg.jpg";

const Hero = () => {
  return (
    <div className="flex bg-white" style={{ height: "700px" }}>
      <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        <div>
          <h2 className="text-6xl lg:text-6xl font-bold leading-tight text-left">
            Simplify the Complex.
          </h2>
          <div className="w-20 h-2 bg-blue-500 my-4"></div>
          <p className="mt-6 text-sm text-gray-500 md:text-base text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            commodi cum cupiditate ducimus, fugit harum id necessitatibus odio
            quam quasi, quibusdam rem tempora voluptates. Cumque debitis
            dignissimos id quam vel!
          </p>
          <div className="flex justify-start mt-6">
            <a
              href={"/"}
              className="px-4 py-3 bg-gray-900 text-gray-200 text-s font-semibold rounded hover:bg-gray-800"
            >
              Get Started
            </a>
            <a
              href={"/"}
              className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-s font-semibold rounded hover:bg-gray-400"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:block lg:w-1/2"
        style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div
          className="h-full object-cover"
          style={{
            backgroundImage: `url(${Heroimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
