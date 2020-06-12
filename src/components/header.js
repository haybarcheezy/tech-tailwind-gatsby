import { Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="z-50 w-full bg-white navbar-expand-lg bg-white fixed shadow-sm">
      <div className="w-full md:flex items-center justify-between px-8 md:px-12 border-b border-gray-200">
        <div className="flex justify-between items-center  lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="text-sm font-bold leading-relaxed inline-flex mr-4 py-2 whitespace-no-wrap uppercase text-white"
          >
            <svg
              width="44"
              height="51"
              viewBox="0 0 44 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.15257 9.18025L0 13.2647L0.152719 13.3535L0 13.2659V38.4703L21.9154 50.75L43.5958 38.3521V13.3234L21.9154 0.75L14.5556 4.95276V5.00744V10.767V13.2096L21.7824 9.09674L36.3535 17.4399V34.2436L21.7824 42.7043L7.15257 34.2436V10.767V9.23511V9.18025ZM21.7824 17.4986L28.9505 21.6702V30.0133L21.7824 34.1261L14.5556 30.0133V21.7289L21.7824 17.4986Z"
                fill="#4299E1"
              />
            </svg>
          </Link>

          <button
            className="flex items-center block px-3 py-2 text-gray-700 border border-gray-700 rounded md:hidden focus:outline-none"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <nav
          className={`${isExpanded ? `block` : `hidden`} lg:flex items-center`}
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto my-4 w-full md:auto float-right md:my-0">
            <li className="nav-item md:my-0 my-2 text-center">
              <Link
                to="/"
                className="inline-block font-medium text-gray-700 rounded no-underline hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                href="#pablo"
              >
                Home
              </Link>
            </li>
            <li className="nav-item md:my-0 my-2 text-center">
              <Link
                to="/about"
                className="inline-block font-medium text-gray-700 rounded no-underline hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
              >
                About
              </Link>
            </li>
            <li className="nav-item md:my-0 my-2 text-center">
              <Link
                to="/about"
                className="inline-block font-medium text-gray-700  rounded no-underline hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
              >
                Services
              </Link>
            </li>
            <li className="nav-item md:my-0 my-2 text-center">
              <Link
                to="/"
                className="inline-block font-medium text-gray-700 rounded no-underline hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
              >
                Resources
              </Link>
            </li>
            <li className="nav-item md:border-l md:border-gray-200 md:mr-2 md:my-0 my-2 text-center">
              <Link
                to="/contact"
                className="md:ml-4 inline-flex font-medium text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded"
              >
                Contact
              </Link>
            </li>
          </ul>
          
        </nav>
      </div>
    </header>
  );
}

export default Header;
