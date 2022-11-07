import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkersImg from "../images/engineers.jpg";
import DataImg from "../images/datacenter.jpg";
import ServicesAlt from "../components/servicesalt";

function SecurityServices() {
  return (
    <Layout>
      <SEO
        keywords={[
          `westchase associates`,
          `consulting`,
          `security services`,
          `technology security consulting`,
        ]}
        title="Security Services"
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
            Security Services
          </h1>
          <div className="w-20 h-2 my-4 bg-blue-400" />
          <h3 className="text-left text-gray-200">
            Assess, reduce and manage your security risk.
          </h3>
        </div>
      </section>
      <section className="body-font text-gray-700 border-t border-gray-200">
        <div className="container flex flex-wrap px-5 py-24 mx-auto border-t border-gray-300">
          <div className="sm:order-last md:order-last lg:w-1/2 lg:mb-0 order-first w-full mb-10 overflow-hidden rounded-lg">
            <img
              alt="feature"
              className="object-cover object-center w-full h-full"
              src={DataImg}
            />
          </div>
          <div className="lg:py-6 lg:w-1/2 lg:pr-12 flex flex-col flex-wrap -mb-10">
            <div className="flex flex-col flex-wrap w-full mb-2 text-left">
              <h4 className="md: text-md sm:leading-10 font-bold leading-9 text-blue-400">
              Assess, reduce and manage your security risk.
              </h4>
              <h2 className="sm:leading-10 text-4xl font-extrabold leading-9 tracking-tight text-gray-900">
                Security Services
              </h2>
            </div>
            <div>
              <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
              Security risk is a growing and constant problem to most businesses. This is especially true if you’re online, with your business open to abuse and attack from the outside. Security services need to be constantly analyzed and reassessed, as well as managed effectively. This keeps your information and data secure, as well as protecting your business from attacks.
              </p>
            </div>
            
          </div>
        </div>
      </section>
      <ServicesAlt />
    </Layout>
  );
}

export default SecurityServices;
