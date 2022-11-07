import React from "react";
import Placeholder from "../images/placeholder.jpg";
import MissionImg from "../images/mission.jpg";

const AboutContent = () => {
  return (
    <section className="body-font text-gray-700">
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <div className="sm:order-last md:order-last lg:w-1/2 lg:mb-0 order-first w-full mb-10 overflow-hidden rounded-lg">
          <img
            alt="feature"
            className="object-cover object-center w-full h-full"
            src={Placeholder}
          />
        </div>
        <div className="lg:py-6 lg:w-1/2 lg:pr-12 flex flex-col flex-wrap -mb-10">
          <div className="flex flex-col flex-wrap w-full mb-2 text-left">
            <h4 className="md: text-md sm:leading-10 font-bold leading-9 text-blue-400">
              Vision Statement
            </h4>
            <h2 className="sm:leading-10 text-4xl font-extrabold leading-9 tracking-tight text-gray-900">
              Our Vision
            </h2>
          </div>
          <div>
            <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
            We believe our work should be meaningful and exciting. We value an environment where employees share their enthusiasm for their work.

We value people. We believe in working as a highly skilled team, incorporating multiple perspectives and opinions.

We value personal and professional growth through employee engagement. We believe our employees are the foundation for the firm’s success.
            </p>
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap px-5 py-24 mx-auto border-t border-gray-300">
        <div className="lg:w-1/2 lg:mb-0 w-full mb-10 overflow-hidden rounded-lg">
          <img
            alt="Mission Statement"
            className="object-cover object-center w-full h-full"
            src={MissionImg}
          />
        </div>
        <div className="lg:py-6 lg:w-1/2 lg:pl-12 flex flex-col flex-wrap -mb-10">
          <div className="flex flex-col flex-wrap w-full mb-2 text-left">
            <h4 className="md: text-md sm:leading-10 font-bold leading-9 text-blue-400">
              Mission Statement
            </h4>
            <h2 className="sm:leading-10 text-4xl font-extrabold leading-9 tracking-tight text-gray-900">
              Our Mission
            </h2>
          </div>
          <div>
            <p className="mt-3 mb-4 text-base leading-6 text-gray-500">
            We aim for innovation not only in our development organization but also in the way we approach every aspect of our business.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
