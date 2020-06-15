import { Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-white shadow-sm navbar-expand-lg">
      <div className="items-center justify-between w-full px-8 border-b border-gray-200 md:flex md:px-12">
        <div className="flex items-center justify-between lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="inline-flex py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-no-wrap"
          >
            <svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0018 1.3125L14.3184 4.52691V11.0955L20.0018 7.83449L31.5 14L37 10.6L20.0018 1.3125Z" fill="#093B9F"/>
<path d="M20.0018 21.158L15 17.2L20.0018 14.5894L25 17.2L20.0018 21.158Z" fill="#093B9F"/>
<path d="M20.0018 1.3125L14.3184 4.52691V11.0955L20.0018 7.83449L31.5 14L37 10.6L20.0018 1.3125Z" stroke="#093B9F"/>
<path d="M20.0018 21.158L15 17.2L20.0018 14.5894L25 17.2L20.0018 21.158Z" stroke="#093B9F"/>
<path d="M8.35532 14.6145L2.35352 11.5884L2.67187 31.1738L19.5 40.5V38L19.9552 34.7609L19.5 34.5L8.35532 27.8197V14.6145Z" fill="#5C8FF4" stroke="#5C8FF4"/>
<path d="M8.35562 7.97461L2.7998 11L8.35562 14.4966V7.97461Z" fill="#093B9F" stroke="#093B9F"/>
<path d="M31.6023 14.4962L37.3789 11.375L37.2857 31.1739L20.5 40.5V34.5L31.6023 27.8197V14.4962Z" fill="#1C64F2" stroke="#1C64F2"/>
<path d="M14.5 24.5V18L19.5 21V27.5L14.5 24.5Z" fill="#5C8FF4" stroke="#5C8FF4"/>
<path d="M25.5 24.5V18L20.4997 20.9999V27.5L25.5 24.5Z" fill="#1C64F2" stroke="#1C64F2"/>
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
          <ul className="flex flex-col float-right w-full my-4 list-none lg:flex-row lg:ml-auto md:auto md:my-0">
            <li className="my-2 text-center nav-item md:my-0">
              <Link
                to="/"
                className="inline-block px-2 py-2 font-medium text-gray-700 no-underline rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
                href="#pablo"
              >
                Home
              </Link>
            </li>
            <li className="my-2 text-center nav-item md:my-0">
              <Link
                to="/about"
                className="inline-block px-2 py-2 font-medium text-gray-700 no-underline rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
              >
                About
              </Link>
            </li>
            <li className="my-2 text-center nav-item md:my-0">
              <Link
                to="/services/"
                className="inline-block px-2 py-2 font-medium text-gray-700 no-underline rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
              >
                Services
              </Link>
            </li>
            <li className="my-2 text-center nav-item md:my-0">
              <Link
                to="/"
                className="inline-block px-2 py-2 font-medium text-gray-700 no-underline rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
              >
                Resources
              </Link>
            </li>
            <li className="my-2 text-center nav-item md:border-l md:border-gray-200 md:mr-2 md:my-0">
              <Link
                to="/contact"
                className="inline-flex px-6 py-2 font-medium text-gray-700 bg-gray-200 border-0 rounded md:ml-4 focus:outline-none hover:bg-gray-300"
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
