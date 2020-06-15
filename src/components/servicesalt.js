import React from "react";
import { Link } from "gatsby";
import { Icon } from "@iconify/react";
import cloudDownloadOutlined from "@iconify/icons-ant-design/cloud-download-outlined";
import deploymentUnitOutlined from "@iconify/icons-ant-design/deployment-unit-outlined";
import hddOutlined from "@iconify/icons-ant-design/hdd-outlined";
import securityScanOutlined from "@iconify/icons-ant-design/security-scan-outlined";
import codeOutlined from "@iconify/icons-ant-design/code-outlined";
import syncOutlined from "@iconify/icons-ant-design/sync-outlined";

const ServicesAlt = () => {
  return (
    <section className="text-gray-700 bg-gray-100 border-t border-gray-200 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col flex-wrap w-full mb-20 text-center">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10">
            Innovative Solutions
          </h1>
          <p className="mt-2 text-base">This will be a subtitle call to action of services. </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/3 md:w-1/3">
            <Link to="/">
              <div className="p-6 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                <div className="inline-flex items-center justify-center mb-4 rounded-full">
                  <Icon
                    icon={cloudDownloadOutlined}
                    style={{ fontSize: "100px" }}
                    className="p-2 text-blue-500"
                  />
                </div>
                <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                  Shooting Stars
                </h2>
                <p className="text-sm leading-narrow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.
                </p>
              </div>
            </Link>
          </div>
          <div className="p-4 xl:w-1/3 md:w-1/3">
          <Link to="/">
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
              <p className="text-sm leading-narrow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.
              </p>
            </div>
            </Link>
          </div>
          <div className="p-4 xl:w-1/3 md:w-1/3">
          <Link to="/">
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
              <p className="text-sm leading-narrow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.
              </p>
            </div>
            </Link>
          </div>
          <div className="p-4 xl:w-1/3 md:w-1/3">
          <Link to="/">
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
              <p className="text-sm leading-narrow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.
              </p>
            </div>
            </Link>
          </div>
          <div className="p-4 xl:w-1/3 md:w-1/3">
          <Link to="/">
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
              <p className="text-sm leading-narrow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.
              </p>
            </div>
            </Link>
          </div>
          <div className="p-4 xl:w-1/3 md:w-1/3">
          <Link to="/">
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
              <p className="text-sm leading-narrow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.
              </p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAlt;
