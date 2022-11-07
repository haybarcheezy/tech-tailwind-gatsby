import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkersImg from "../images/engineers.jpg";
import ServicesAlt from "../components/servicesalt";
import StrategyImg from "../images/strategy.jpg";

function BusinessStrategy() {
  return (
    <Layout>
      <SEO
        keywords={[
          `westchase associates`,
          `consulting`,
          `business strategy`,
          `business strategy consulting`,
        ]}
        title="Business Strategy"
      />
      <section
        className="body-font text-gray-700 border-t border-gray-200"
        style={{
          backgroundImage: `url(${WorkersImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container px-5 py-24 mx-auto mt-6">
          <h1 className="md:leading-9 text-5xl font-extrabold leading-tight text-gray-100">
            Business Strategy
          </h1>
          <div className="w-20 h-2 my-4 bg-blue-400" />
          <h3 className="text-left text-gray-200">
            Adaptive planning to drive business.
          </h3>
        </div>
      </section>
      <section className="body-font text-gray-700 border-t border-gray-200">
      <div className="container flex flex-wrap px-5 py-24 mx-auto border-t border-gray-300">
        <div className="lg:w-1/2 lg:mb-0 w-full mb-10 overflow-hidden rounded-lg">
          <img
            alt="feature"
            className="object-cover object-center w-full h-full"
            src={StrategyImg}
          />
        </div>
        <div className="lg:py-6 lg:w-1/2 lg:pl-12 flex flex-col flex-wrap -mb-10">
          <div className="flex flex-col flex-wrap w-full mb-2 text-left">
            <h4 className="md: text-md font-bold text-blue-400">
            Innovative solutions to complex problems.
            </h4>
            <h2 className="sm:leading-10 text-4xl font-extrabold leading-9 tracking-tight text-gray-900">
              Business Strategy
            </h2>
          </div>
          <div>
            <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
            There are several approaches to strategic planning, but not all adaptive planning that provide the results you’re after. If you’re not getting the results you want from your strategy development process, don’t keep doing what you’re doing now. We believe in the value of planning, particularly in turbulent times. Our Adaptive Planning framework provides our clients with a simple process for capturing and managing change, whilst giving organizations the tools they need to deliver effective governance throughout their entire organization.
            </p>
          </div>
        </div>
      </div>
      </section>
      <ServicesAlt />
    </Layout>
  );
}

export default BusinessStrategy;
