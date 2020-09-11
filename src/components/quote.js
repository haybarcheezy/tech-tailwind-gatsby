import React from "react";
import QuoteBackground from "../images/houston4.jpg";

const Quote = () => {
  return (
    <section
      className="text-gray-700 border-t border-gray-200 body-font"
      style={{
        backgroundImage: `url(${QuoteBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex">
      <div className="w-full px-5 py-24 mx-auto text-center md:w-1/2" style={{backgroundColor: "rgba(4, 23, 63, .9)"}}>
          <svg
            className="inline-block w-1/2 h-8 mb-8 text-gray-400"
            viewBox="0 0 30 30"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25.3862 22.135C27.745 19.575 27.5075 16.2875 27.5 16.25V6.25C27.5 5.91848 27.3683 5.60054 27.1338 5.36612C26.8994 5.1317 26.5815 5 26.25 5H18.75C17.3712 5 16.25 6.12125 16.25 7.5V16.25C16.25 16.5815 16.3817 16.8995 16.6161 17.1339C16.8505 17.3683 17.1684 17.5 17.5 17.5H21.3475C21.3211 18.118 21.1364 18.7188 20.8112 19.245C20.1762 20.2462 18.98 20.93 17.2537 21.275L16.25 21.475V25H17.5C20.9787 25 23.6325 24.0363 25.3862 22.135ZM11.6275 22.135C13.9875 19.575 13.7487 16.2875 13.7412 16.25V6.25C13.7412 5.91848 13.6095 5.60054 13.3751 5.36612C13.1407 5.1317 12.8227 5 12.4912 5H4.99121C3.61246 5 2.49121 6.12125 2.49121 7.5V16.25C2.49121 16.5815 2.62291 16.8995 2.85733 17.1339C3.09175 17.3683 3.40969 17.5 3.74121 17.5H7.58871C7.5623 18.118 7.37766 18.7188 7.05246 19.245C6.41746 20.2462 5.22121 20.93 3.49496 21.275L2.49121 21.475V25H3.74121C7.21996 25 9.87371 24.0363 11.6275 22.135V22.135Z" />
          </svg>

          <p className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <span className="inline-block w-10 h-1 mt-8 mb-6 bg-blue-400"></span>
          <h2 className="text-xl font-bold text-gray-200">
            JON BARNETT
          </h2>
          <p className="text-blue-400">President | Managing Partner</p>
        </div>
        <div className="w-1/2 mx-auto text-center">
          
        </div>
      </div>
    </section>
  );
};

export default Quote;
