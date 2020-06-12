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
    <section className="text-gray-700 body-font border-t border-gray-200 bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="text-4xl lg:text-4xl font-bold title-font mb-2 text-gray-900">
            Innovative Solutions
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="border border-gray-300 p-6 rounded-lg text-center shadow-lg bg-white">
              <div className="inline-flex items-center justify-center rounded-full mb-4">
                <Icon
                  icon={cloudDownloadOutlined}
                  style={{ fontSize: "100px" }}
                  className="p-2 bg-white text-blue-400"
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="text-center pb-4 pt-8">
                <Link
                  to="/"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-medium text-sm py-2 px-4 border border-gray-400 rounded"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="border border-gray-300 p-6 rounded-lg text-center shadow-lg bg-white">
              <div className="inline-flex items-center justify-center rounded-full mb-4">
                <Icon
                  icon={deploymentUnitOutlined}
                  style={{ fontSize: "100px" }}
                  className="p-2 bg-white text-blue-400"
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="text-center pb-4 pt-8">
                <Link
                  to="/"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-medium text-sm py-2 px-4 border border-gray-400 rounded"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="border border-gray-300 p-6 rounded-lg text-center shadow-lg bg-white">
              <div className="inline-flex items-center justify-center rounded-full mb-4">
                <Icon
                  icon={hddOutlined}
                  style={{ fontSize: "100px" }}
                  className="p-2 bg-white text-blue-400"
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Melanchole
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="text-center pb-4 pt-8">
                <Link
                  to="/"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-medium text-sm py-2 px-4 border border-gray-400 rounded"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="border border-gray-300 p-6 rounded-lg text-center shadow-lg bg-white">
              <div className="inline-flex items-center justify-center rounded-full mb-4">
                <Icon
                  icon={securityScanOutlined}
                  style={{ fontSize: "100px" }}
                  className="p-2 bg-white text-blue-400"
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Bunker
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="text-center pb-4 pt-8">
                <Link
                  to="/"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-medium text-sm py-2 px-4 border border-gray-400 rounded"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="border border-gray-300 p-6 rounded-lg text-center shadow-lg bg-white">
              <div className="inline-flex items-center justify-center rounded-full mb-4">
                <Icon
                  icon={syncOutlined}
                  style={{ fontSize: "100px" }}
                  className="p-2 bg-white text-blue-400"
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Melanchole
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="text-center pb-4 pt-8">
                <Link
                  to="/"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-medium text-sm py-2 px-4 border border-gray-400 rounded"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="border border-gray-300 p-6 rounded-lg text-center shadow-lg bg-white">
              <div className="inline-flex items-center justify-center rounded-full mb-4">
                <Icon
                  icon={codeOutlined}
                  style={{ fontSize: "100px" }}
                  className="p-2 bg-white text-blue-400"
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Bunker
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="text-center pb-4 pt-8">
                <Link
                  to="/"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-medium text-sm py-2 px-4 border border-gray-400 rounded"
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
