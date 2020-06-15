import React from "react";

const Banner = () => {
  return (
    <div className="py-4 text-center bg-blue-900 lg:px-4">
      <div
        className="flex items-center p-2 mx-4 leading-none text-white transition duration-500 ease-in-out transform bg-blue-800 rounded-full shadow-md cursor-pointer hover:shadow-lg hover:scale-105 md:mx-0 lg:inline-flex"
        role="alert"
      >
        <span className="flex px-2 py-1 mr-3 text-xs font-bold uppercase bg-blue-500 rounded-full">
          New
        </span>
        <span className="flex-auto mr-2 font-semibold text-center">
          Subscribe to our monthly newsletter
        </span>
        <svg
          className="w-4 h-4 opacity-75 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
