import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkersImg from "../images/engineers.jpg";
import ServicesAlt from "../components/servicesalt";
import ExecutiveImg from "../images/executive.jpg";

function ExecutivesOnDemand() {
  return (
    <Layout>
      <SEO
        keywords={[
          `westchase associates`,
          `consulting`,
          `executives consulting`,
          `executives on demand`,
          `c-suite on demand`,
        ]}
        title="Executives On-Demand"
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
            Executives On-Demand
          </h1>
          <div className="w-20 h-2 my-4 bg-blue-400" />
          <h3 className="text-left text-gray-200">C-Suite when you need it.</h3>
        </div>
      </section>
      <section className="body-font text-gray-700 border-t border-gray-200">
      <div className="container flex flex-wrap px-5 py-24 mx-auto border-t border-gray-300">
        <div className="sm:order-last md:order-last lg:w-1/2 lg:mb-0 order-first w-full mb-10 overflow-hidden rounded-lg">
          <img
            alt="feature"
            className="object-cover object-center w-full h-full"
            src={ExecutiveImg}
          />
        </div>
        <div className="lg:py-6 lg:w-1/2 lg:pr-12 flex flex-col flex-wrap -mb-10">
          <div className="flex flex-col flex-wrap w-full mb-2 text-left">
            <h4 className="md: text-md sm:leading-10 font-bold leading-9 text-blue-400">
            C-Suite when you need it.
            </h4>
            <h2 className="sm:leading-10 text-4xl font-extrabold leading-9 tracking-tight text-gray-900">
              Executives On-Demand
            </h2>
          </div>
          <div>
            <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
              Business C-Suite level executives are in high demand. They often take vast resources to recruit, vet, and hire. Westchase Associates has a solution. We provide C-Suite level executives on-demand. Our executives are available for short-term engagements, or long-term projects. We can provide a single executive, or a team of executives. Our executives are available for a wide range of projects, including:
            </p>
          </div>
        </div>
      </div>
      </section>
      <ServicesAlt />
    </Layout>
  );
}

export default ExecutivesOnDemand;
