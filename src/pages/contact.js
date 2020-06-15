import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactTitlebar from "../components/contacttitlebar";
import ServicesAlt from "../components/servicesalt"

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <ContactTitlebar />
      <div className="container flex px-5 py-24 mx-auto">
        <div className="relative flex flex-col w-full p-8 mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow-lg lg:w-1/2 md:w-1/2 md:mt-0">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-center text-gray-900 sm:leading-10">
            Contact
          </h1>
          <p className="mt-2 mb-5 text-center">
            Send A Message
          </p>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Name
          </label>
          <input
            className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-blue-500"
            placeholder="First and Last"
            type="name"
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Email
          </label>
          <input
            className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-blue-500"
            placeholder="Jondoe@example.com"
            type="email"
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Company
          </label>
          <input
            className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-blue-500"
            placeholder="Barnett Technology LLC"
            type="company"
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Message
          </label>
          <textarea
            className="h-32 px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded resize-none focus:outline-none focus:border-blue-500"
            placeholder="Type your message here..."
          ></textarea>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            GDPR Consent
          </label>
          <div className="inline-flex mb-4">
          <input className="my-auto mr-2 leading-tight bg-blue-400 cursor-pointer" type="checkbox" />
          <p className="text-xs text-gray-600">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
          </div>
          <button className="px-6 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
      <ServicesAlt />
    </Layout>
  );
}

export default ContactPage;
