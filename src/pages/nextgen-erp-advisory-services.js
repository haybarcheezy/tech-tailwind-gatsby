import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkersImg from "../images/engineers.jpg";
import ServicesAlt from "../components/servicesalt";
import Placeholder from "../images/placeholder.jpg";

function NextGen() {
  return (
    <Layout>
      <SEO
        keywords={[`westchase associates`, `consulting`, `nextgen erp advisory services`, `nextgen erp`]}
        title="NextGen ERP Advisory Services"
      />
      <section
        className="text-gray-700 border-t border-gray-200 body-font"
        style={{
          backgroundImage: `url(${WorkersImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container px-5 py-24 mx-auto mt-6">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-100 md:leading-9">
            NextGen ERP Advisory Services
          </h1>
          <div className="w-20 h-2 my-4 bg-blue-400" />
          <h3 className="text-left text-gray-200">
            Simplify managing and large cloud-based applications with effecient
            delivery.
          </h3>
        </div>
      </section>
      <section className="text-gray-700 border-t border-gray-200 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto border-t border-gray-300">
          <div className="order-first w-full mb-10 overflow-hidden rounded-lg sm:order-last md:order-last lg:w-1/2 lg:mb-0">
            <img
              alt="feature"
              className="object-cover object-center w-full h-full"
              src={Placeholder}
            />
          </div>
          <div className="flex flex-col flex-wrap -mb-10 lg:py-6 lg:w-1/2 lg:pr-12 ">
            <div className="flex flex-col flex-wrap w-full mb-2 text-left">
              <h4 className="font-bold leading-9 text-blue-400 md: text-md sm:leading-10">
                This is a small intro
              </h4>
              <h2 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10">
                NextGen ERP Advisory Services
              </h2>
            </div>
            <div>
              <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ServicesAlt />
    </Layout>
  );
}

export default NextGen;
