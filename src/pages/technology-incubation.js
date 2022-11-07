import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkersImg from "../images/engineers.jpg";
import TechImg from "../images/tech-incubation.jpg";
import ServicesAlt from "../components/servicesalt";

function TechnologyIncubation() {
  return (
    <Layout>
      <SEO
        keywords={[`westchase associates`, `consulting`, `technology incubation`, `technology consulting`]}
        title="Technology Incubation"
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
            Technology Incubation
          </h1>
          <div className="w-20 h-2 my-4 bg-blue-400" />
          <h3 className="text-left text-gray-200">
          Leverage innovative technology and deliver a premium-end user experience.
          </h3>
        </div>
      </section>
      <section className="body-font text-gray-700 border-t border-gray-200">
      <div className="container flex flex-wrap px-5 py-24 mx-auto border-t border-gray-300">
        <div className="lg:w-1/2 lg:mb-0 w-full mb-10 overflow-hidden rounded-lg">
          <img
            alt="feature"
            className="object-cover object-center w-full h-full"
            src={TechImg}
          />
        </div>
        <div className="lg:py-6 lg:w-1/2 lg:pl-12 flex flex-col flex-wrap -mb-10">
          <div className="flex flex-col flex-wrap w-full mb-2 text-left">
            <h4 className="md: text-md sm:leading-10 font-bold leading-9 text-blue-400">
            Leverage innovative technology and deliver a premium end user experience.
            </h4>
            <h2 className="sm:leading-10 text-4xl font-extrabold leading-9 tracking-tight text-gray-900">
              Technology Incubation
            </h2>
          </div>
          <div>
            <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
            Technology Incubation is a project management paradigm for leveraging innovative technology to deliver a superior end user experience compared to the competition. Technology incubation has multiple facets, which are:

Innovative technology is the need of the hour; it enables us to provide our clients with the best possible solutions which help leverage their businesses. Being at the forefront of technology has its own merits. We are building a high-end, modular custom web application to achieve this goal.

We are living in the world of disruption, as technologies are being developed and launched at a pace that wasn’t seen before. With this speed, it is easy to get excited and forget the basics – technology and product-market fit. It’s important to remember that it only takes a new feature or an improvement in functionality to become completely irrelevant overnight. Too often, companies focus on launching their product rather than perfecting it. Innovative technology is pivotal in getting your innovative solution into your customer’s hands and onto their devices.

Making meaningful changes in an established space is not an easy task. Creating innovative solutions for problems that are too big for the status quo needs to be taken seriously. One of the ways you can change things up in your industry is by leveraging new technology and techniques that solve real problems in a better way.

New technologies are always popping up. It appears like innovation just can’t stop. Every time you turn around, there’s another product or platform that offers to change the way things are done for your business. While it might be enticing to strap onto the newest innovation bandwagon and jump on board, you shouldn’t just jump at every opportunity that comes your way. You should carefully review the changes and look at how each one could impact your bottom line before taking a leap of faith.
            </p>
          </div>
         
        </div>
      </div>
      </section>
      <ServicesAlt />
    </Layout>
  );
}

export default TechnologyIncubation;
