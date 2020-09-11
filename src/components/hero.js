import React from "react";
import { Link } from "gatsby";
import Heroimg from "../images/heroimg.jpg";

const Hero = () => {
  return (
    <div className="flex bg-white" style={{ height: "700px" }}>
      <div className="flex items-center px-8 text-center lg:text-left md:px-12 lg:w-1/2">
        <div>
          <h1 className="text-6xl font-black leading-none text-left md:leading-tight lg:text-6xl">
            Simplify the Complex.
          </h1>
          <div className="w-20 h-2 my-4 bg-blue-400"></div>
          <p className="mt-6 text-sm text-left text-gray-500 md:text-base">
            When others use technology to transform their business, 80% normally
            fail. We focus on transforming the business first, then apply
            technology to supercharge your differentiation! Simplifying the
            Complex.
          </p>
          <div className="flex justify-start mt-6">
            <Link
              to="/services"
              className="px-4 py-3 font-semibold text-gray-200 bg-gray-900 rounded text-s hover:bg-gray-800"
            >
              Our Services
            </Link>
            <Link
              to="/about"
              className="px-4 py-3 mx-4 font-semibold text-gray-900 bg-gray-300 rounded text-s hover:bg-gray-400"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:block lg:w-1/2"
        style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div
          className="object-cover h-full"
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
