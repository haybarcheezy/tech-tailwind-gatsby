import React from "react";
import { Link } from "gatsby";
import { Icon } from "@iconify/react";
import cloudDownloadOutlined from "@iconify/icons-ant-design/cloud-download-outlined";
import deploymentUnitOutlined from "@iconify/icons-ant-design/deployment-unit-outlined";
import hddTwotone from "@iconify/icons-ant-design/hdd-twotone";
import securityScanTwotone from "@iconify/icons-ant-design/security-scan-twotone";
import codeOutlined from "@iconify/icons-ant-design/code-outlined";
import syncOutlined from "@iconify/icons-ant-design/sync-outlined";

const ServicesAlt = () => {
  return (
    <section className="text-gray-700 bg-gray-100 border-t border-gray-200 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col flex-wrap w-full mb-20 text-center">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10">
            Innovative Services
          </h1>
          <p className="mt-2 text-base">
            This will be a subtitle call to action of services.{" "}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="w-full p-2 md:p-4 xl:w-1/3 md:w-1/3">
            <Link to="/services">
              <div className="p-6 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                <div className="inline-flex items-center justify-center mb-4 rounded-full">
                  <Icon
                    icon={cloudDownloadOutlined}
                    style={{ fontSize: "100px" }}
                    className="p-2 text-blue-400"
                  />
                </div>
                <h2 className="mb-2 text-xl font-bold text-gray-900 ">
                  Business Advisory Services
                </h2>
                <p className="text-sm leading-narrow">
                  Modernize, optimize, and manage enterprise applications.
                </p>
              </div>
            </Link>
          </div>
          <div className="w-full p-2 md:p-4 xl:w-1/3 md:w-1/3">
            <Link to="/services">
              <div className="p-6 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                <div className="inline-flex items-center justify-center mb-4 rounded-full">
                  <Icon
                    icon={deploymentUnitOutlined}
                    style={{ fontSize: "100px" }}
                    className="p-2 text-blue-400"
                  />
                </div>
                <h2 className="mb-2 text-xl font-bold text-gray-900 ">
                  NextGen ERP Advisory Services
                </h2>
                <p className="text-sm leading-narrow">
                  Simplify managing and large cloud-based applications with effecient delivery.
                </p>
              </div>
            </Link>
          </div>
          <div className="w-full p-2 md:p-4 xl:w-1/3 md:w-1/3">
            <Link to="/services">
              <div className="p-6 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                <div className="inline-flex items-center justify-center mb-4 rounded-full">
                  <Icon
                    icon={hddTwotone}
                    style={{ fontSize: "100px" }}
                    className="p-2 text-blue-400"
                  />
                </div>
                <h2 className="mb-2 text-xl font-bold text-gray-900 text-md ">
                  Technology Incubation
                </h2>
                <p className="text-sm leading-narrow">
                  Leverage innovative technology and deliver a premium end user
                  experience.
                </p>
              </div>
            </Link>
          </div>
          <div className="w-full p-2 md:p-4 xl:w-1/3 md:w-1/3">
            <Link to="/services">
              <div className="p-6 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                <div className="inline-flex items-center justify-center mb-4 rounded-full">
                  <Icon
                    icon={securityScanTwotone}
                    style={{ fontSize: "100px" }}
                    className="p-2 text-blue-400"
                  />
                </div>
                <h2 className="mb-2 text-xl font-bold text-gray-900 ">
                  Security Services
                </h2>
                <p className="text-sm leading-narrow">
                  Assess, reduce and manage your security risk.
                </p>
              </div>
            </Link>
          </div>
          <div className="w-full p-2 md:p-4 xl:w-1/3 md:w-1/3">
            <Link to="/services">
              <div className="p-6 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                <div className="inline-flex items-center justify-center mb-4 rounded-full">
                  <Icon
                    icon={syncOutlined}
                    style={{ fontSize: "100px" }}
                    className="p-2 text-blue-400"
                  />
                </div>
                <h2 className="mb-2 text-xl font-bold text-gray-900 ">
                  Business Strategy
                </h2>
                <p className="text-sm leading-narrow">
                  Adaptive planning to drive business.
                </p>
              </div>
            </Link>
          </div>
          <div className="w-full p-2 md:p-4 xl:w-1/3 md:w-1/3">
            <Link to="/services">
              <div className="p-6 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                <div className="inline-flex items-center justify-center mb-4 rounded-full">
                  <Icon
                    icon={codeOutlined}
                    style={{ fontSize: "100px" }}
                    className="p-2 text-blue-400"
                  />
                </div>
                <h2 className="mb-2 text-xl font-bold text-gray-900 ">
                  Executives On-Demand
                </h2>
                <p className="text-sm leading-narrow">
                  C-Suite when you need it.
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
