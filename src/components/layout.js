import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import { Icon } from "@iconify/react";
import facebookFilled from "@iconify/icons-ant-design/facebook-filled";
import linkedinFilled from "@iconify/icons-ant-design/linkedin-filled";
import githubFilled from "@iconify/icons-ant-design/github-filled";

function Layout({ children }) {

  return (
    <div>
      <div className="w-full">
        <Header/>
      </div>

      <main>{children}</main>

      <footer className="relative block py-4 pt-12 bg-gray-900">
        <div className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <svg
                width="40"
                height="42"
                viewBox="0 0 40 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0018 1.3125L14.3184 4.52691V11.0955L20.0018 7.83449L31.5 14L37 10.6L20.0018 1.3125Z"
                  fill="#093B9F"
                />
                <path
                  d="M20.0018 21.158L15 17.2L20.0018 14.5894L25 17.2L20.0018 21.158Z"
                  fill="#093B9F"
                />
                <path
                  d="M20.0018 1.3125L14.3184 4.52691V11.0955L20.0018 7.83449L31.5 14L37 10.6L20.0018 1.3125Z"
                  stroke="#093B9F"
                />
                <path
                  d="M20.0018 21.158L15 17.2L20.0018 14.5894L25 17.2L20.0018 21.158Z"
                  stroke="#093B9F"
                />
                <path
                  d="M8.35532 14.6145L2.35352 11.5884L2.67187 31.1738L19.5 40.5V38L19.9552 34.7609L19.5 34.5L8.35532 27.8197V14.6145Z"
                  fill="#5C8FF4"
                  stroke="#5C8FF4"
                />
                <path
                  d="M8.35562 7.97461L2.7998 11L8.35562 14.4966V7.97461Z"
                  fill="#093B9F"
                  stroke="#093B9F"
                />
                <path
                  d="M31.6023 14.4962L37.3789 11.375L37.2857 31.1739L20.5 40.5V34.5L31.6023 27.8197V14.4962Z"
                  fill="#1C64F2"
                  stroke="#1C64F2"
                />
                <path
                  d="M14.5 24.5V18L19.5 21V27.5L14.5 24.5Z"
                  fill="#5C8FF4"
                  stroke="#5C8FF4"
                />
                <path
                  d="M25.5 24.5V18L20.4997 20.9999V27.5L25.5 24.5Z"
                  fill="#1C64F2"
                  stroke="#1C64F2"
                />
              </svg>
              <h4 className="pt-2 text-2xl font-medium text-gray-300">
                Barnett Technologies
              </h4>
              <h5 className="mt-0 mb-2 text-base text-gray-700">
                Simply the complex.
              </h5>
              <div className="mt-6">
                <a
                  href="https://facebook.com/"
                  className="items-center justify-center inline-block p-2 mr-2 text-center bg-gray-400 rounded-full shadow-lg outline-none hover:bg-white align-center focus:outline-none"
                >
                  <Icon
                    icon={facebookFilled}
                    style={{ color: "#3b5998", fontSize: "24px" }}
                  />
                </a>
                <a
                  href="https://linkedin.com/"
                  className="items-center justify-center inline-block p-2 mr-2 text-center bg-gray-400 rounded-full shadow-lg outline-none hover:bg-white align-center focus:outline-none"
                >
                  <Icon
                    icon={linkedinFilled}
                    style={{ color: "#0E76A8", fontSize: "24px" }}
                  />
                </a>
                <a
                  href="https://github.com/"
                  className="items-center justify-center inline-block p-2 mr-2 text-center bg-gray-400 rounded-full shadow-lg outline-none hover:bg-white align-center focus:outline-none"
                >
                  <Icon
                    icon={githubFilled}
                    style={{ color: "#24292e", fontSize: "24px" }}
                  />
                </a>
              </div>
              <p className="mt-6 text-sm font-semibold text-gray-600">
                Currently v1.0.0. Code
                <a href="#blank" className="text-gray-700 hover:text-white">
                  {" "}
                  licensed MIT
                </a>
                , docs
                <a href="#blank" className="text-gray-700 hover:text-white">
                  {" "}
                  CC by 4.0
                </a>
                .
              </p>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full pt-6 ml-auto md:w-6/12 xl:w-4/12 md:pt-0 md:px-4">
                  <span className="block mb-2 text-sm font-semibold text-gray-300 uppercase">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="#blank"
                        className="block pb-2 text-sm text-gray-700 hover:text-blue-500 font-regular"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#blank"
                        className="block pb-2 text-sm text-gray-700 hover:text-blue-500 font-regular"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#blank"
                        className="block pb-2 text-sm text-gray-700 hover:text-blue-500 font-regular"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#blank"
                        className="block pb-2 text-sm text-gray-700 hover:text-blue-500 font-regular"
                      >
                        Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="#blank"
                        className="block pb-2 text-sm text-gray-700 hover:text-blue-500 font-regular"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full pt-6 ml-auto md:w-6/12 xl:w-4/12 md:pt-0 md:px-4">
                  <span className="block mb-2 text-sm font-semibold text-gray-300 uppercase">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="#blank"
                        className="block pb-2 text-sm text-gray-700 hover:text-blue-500 font-regular"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        href="#blank"
                        className="block pb-2 text-sm text-gray-700 hover:text-blue-500 font-regular"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#blank"
                        className="block pb-2 text-sm text-gray-700 hover:text-blue-500 font-regular"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4 border-gray-400"></hr>
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-gray-600">
                Copyright ©
                <a
                  href="https://github.com"
                  className="text-gray-600 hover:text-blue-500"
                >
                  {" "}
                  Haybarcheezy
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
