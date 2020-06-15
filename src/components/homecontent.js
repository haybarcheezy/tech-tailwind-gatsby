import React from "react";
import Placeholder from "../images/placeholder.jpg";

const HomeContent = () => {
  return (
    <section className="text-gray-700 border-t border-gray-200 body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <div className="w-full mb-10 overflow-hidden rounded-lg lg:w-1/2 lg:mb-0">
          <img
            alt="feature"
            className="object-cover object-center w-full h-full"
            src={Placeholder}
          />
        </div>
        <div className="flex flex-col flex-wrap -mb-10 lg:py-6 lg:w-1/2 lg:pl-12">
          <div className="flex flex-col flex-wrap w-full mb-2 text-left">
            <h2 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10">
              Heading Filler
            </h2>
          </div>
          <div>
            <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
