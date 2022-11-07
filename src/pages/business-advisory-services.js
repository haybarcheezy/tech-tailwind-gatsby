import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkersImg from "../images/engineers.jpg";
import ServicesAlt from "../components/servicesalt"
import AdivsoryImg from "../images/advisory.jpg";


function BusinessAdvisoryServices() {
  return (
    <Layout>
      <SEO
        keywords={[`westchase associates`, `consulting`, `business advisory services`, `business consulting`]}
        title="Business Advisory Services"
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
          Business Advisory Services
        </h1>
        <div className="w-20 h-2 my-4 bg-blue-400" />
        <h3 className="text-left text-gray-200">
          Small intro to about page text.
        </h3>
      </div>
    </section>
      <section className="body-font text-gray-700 border-t border-gray-200">
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <div className="lg:w-1/2 lg:mb-0 w-full mb-10 overflow-hidden rounded-lg">
          <img
            alt="feature"
            className="object-cover object-center w-full h-full"
            src={AdivsoryImg}
          />
        </div>
        <div className="lg:py-6 lg:w-1/2 lg:pl-12 flex flex-col flex-wrap -mb-10">
          <div className="flex flex-col flex-wrap w-full mb-2 text-left">
            <h4 className="md: text-md sm:leading-10 font-bold leading-9 text-blue-400">
            From strengthening financial growth, to providing insights: we have a solution for you.
            </h4>
            <h2 className="sm:leading-10 text-4xl font-extrabold leading-9 tracking-tight text-gray-900">
              Business Advisory Services
            </h2>
          </div>
          <div>
            <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
            Enterprise application modernization and optimization can be deployed in a phased approach. Selecting the right method for business demands depends on the type of applications, IT skillsets, infrastructure, budget, and governance requirements. The scope of enterprise application optimization ranges from reducing application costs to increasing service levels to improving employee accessibility.
            </p>
          </div>
          <div>
            <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
            There’s no denying it: Enterprise applications are proliferating. As a leader in your respective sector, your role is evolving from being mere administrator to application steward. Have you ever wondered whether your enterprise applications are aging at the same rate as the hardware they run on? Are their opportunities to modernize and optimize these applications? Is it possible to reduce the costs of managing all these different software products under one roof?
            </p>
          </div>
          <div>
            <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
            Whether you manage a small business or a multi-billion dollar enterprise, an important area to focus on in the digital environment is enterprise application management. This relies on the ability to monitor the performance of core enterprise applications and IT systems and ultimately optimize their performance and availability.</p>
          </div>
        </div>
        </div>
     
    </section>
      <ServicesAlt />
    </Layout>
  );
}

export default BusinessAdvisoryServices;
