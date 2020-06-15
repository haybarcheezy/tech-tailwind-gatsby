import React from "react";
import { Link } from "gatsby";
import { Icon } from "@iconify/react";
import cloudDownloadOutlined from "@iconify/icons-ant-design/cloud-download-outlined";
import deploymentUnitOutlined from "@iconify/icons-ant-design/deployment-unit-outlined";
import hddOutlined from "@iconify/icons-ant-design/hdd-outlined";
import securityScanOutlined from "@iconify/icons-ant-design/security-scan-outlined";
import codeOutlined from "@iconify/icons-ant-design/code-outlined";
import syncOutlined from "@iconify/icons-ant-design/sync-outlined";

const Services = () => {
  return (
    <section className="text-gray-700 bg-gray-100 border-t border-gray-200 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10">
            Innovative Solutions
          </h1>
          <p className="w-full mt-2 text-base lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/2 md:w-1/2">
            <div className="p-6 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
              <div className="inline-flex items-center justify-center mb-4 rounded-full">
                <Icon
                  icon={cloudDownloadOutlined}
                  style={{ fontSize: "100px" }}
                  className="p-2 text-blue-500 bg-white"
                />
              </div>
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                Shooting Stars
              </h2>
              <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="pt-8 pb-4 text-center">
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-400 rounded hover:bg-gray-100"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 xl:w-1/2 md:w-1/2">
            <div className="p-6 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
              <div className="inline-flex items-center justify-center mb-4 rounded-full">
                <Icon
                  icon={deploymentUnitOutlined}
                  style={{ fontSize: "100px" }}
                  className="p-2 text-blue-500"
                />
              </div>
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                The Catalyzer
              </h2>
              <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="pt-8 pb-4 text-center">
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-400 rounded hover:bg-gray-100"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 xl:w-1/2 md:w-1/2">
            <div className="p-6 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
              <div className="inline-flex items-center justify-center mb-4 rounded-full">
                <Icon
                  icon={hddOutlined}
                  style={{ fontSize: "100px" }}
                  className="p-2 text-blue-500"
                />
              </div>
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                Melanchole
              </h2>
              <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="pt-8 pb-4 text-center">
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-400 rounded hover:bg-gray-100"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 xl:w-1/2 md:w-1/2">
            <div className="p-6 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
              <div className="inline-flex items-center justify-center mb-4 rounded-full">
                <Icon
                  icon={securityScanOutlined}
                  style={{ fontSize: "100px" }}
                  className="p-2 text-blue-500"
                />
              </div>
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                Bunker
              </h2>
              <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="pt-8 pb-4 text-center">
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-400 rounded hover:bg-gray-100"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 xl:w-1/2 md:w-1/2">
            <div className="p-6 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
              <div className="inline-flex items-center justify-center mb-4 rounded-full">
                <Icon
                  icon={syncOutlined}
                  style={{ fontSize: "100px" }}
                  className="p-2 text-blue-500"
                />
              </div>
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                Melanchole
              </h2>
              <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="pt-8 pb-4 text-center">
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-400 rounded hover:bg-gray-100"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 xl:w-1/2 md:w-1/2">
            <div className="p-6 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
              <div className="inline-flex items-center justify-center mb-4 rounded-full">
                <Icon
                  icon={codeOutlined}
                  style={{ fontSize: "100px" }}
                  className="p-2 text-blue-500"
                />
              </div>
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                Bunker
              </h2>
              <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="pt-8 pb-4 text-center">
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-400 rounded hover:bg-gray-100"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
