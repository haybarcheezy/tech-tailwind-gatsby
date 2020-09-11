import React from "react";
import { Link } from 'gatsby';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu
} from "@afc-org/react-tailwind";

const DropMenu = () => {
  const [show,setShow] = React.useState(false);
  return (
      <Dropdown controlled>
        <DropdownToggle style={{display: "inline-flex"}} color="white" onClick={() => setShow(!show)}>
          Services
          <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        </DropdownToggle>
        <DropdownMenu style={{width: "16rem"}}  show={show}>
          <Link
                activeStyle={{ color: "#1c64f2" }}
                to="/business-advisory-services/"
                className="inline-block px-2 py-2 text-xl font-medium text-gray-200 no-underline transition duration-150 ease-in-out rounded hover:bg-gray-200 md:text-base md:text-gray-900 hover:text-blue-400 md:mx-2"
              >Business Advisory Services
              </Link>
          <Link
                activeStyle={{ color: "#1c64f2" }}
                to="/contact/"
                className="inline-block px-2 py-2 text-xl font-medium text-gray-200 no-underline transition duration-150 ease-in-out rounded hover:bg-gray-200 md:text-base md:text-gray-900 hover:text-blue-400 md:mx-2"
              >
                NextGen ERP Advisory Services
              </Link>
          <Link
                activeStyle={{ color: "#1c64f2" }}
                to="/contact/"
                className="inline-block px-2 py-2 text-xl font-medium text-gray-200 no-underline transition duration-150 ease-in-out rounded hover:bg-gray-200 md:text-base md:text-gray-900 hover:text-blue-400 md:mx-2"
              >
                Technology Incubation
              </Link>
          <Link
                activeStyle={{ color: "#1c64f2" }}
                to="/contact/"
                className="inline-block px-2 py-2 text-xl font-medium text-gray-200 no-underline transition duration-150 ease-in-out rounded hover:bg-gray-200 md:text-base md:text-gray-900 hover:text-blue-400 md:mx-2"
              >
                Security Services
              </Link>
          <Link
                activeStyle={{ color: "#1c64f2" }}
                to="/contact/"
                className="inline-block px-2 py-2 text-xl font-medium text-gray-200 no-underline transition duration-150 ease-in-out rounded hover:bg-gray-200 md:text-base md:text-gray-900 hover:text-blue-400 md:mx-2"
              >
                Business Strategy
              </Link>
          <Link
                activeStyle={{ color: "#1c64f2" }}
                to="/contact/"
                className="inline-block px-2 py-2 text-xl font-medium text-gray-200 no-underline transition duration-150 ease-in-out rounded hover:bg-gray-200 md:text-base md:text-gray-900 hover:text-blue-400 md:mx-2"
              >
                Executives On-Demand
              </Link>
        </DropdownMenu>
      </Dropdown>
    );
}

export default DropMenu;