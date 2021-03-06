import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactTitlebar from "../components/contacttitlebar";
import { Icon } from "@iconify/react";
import mailTwotone from '@iconify/icons-ant-design/mail-twotone';
import phoneTwotone from '@iconify/icons-ant-design/phone-twotone';
import calendarTwotone from '@iconify/icons-ant-design/calendar-twotone';



function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <ContactTitlebar />
      <div className="container flex px-0 py-24 mx-auto md:px-5">
        <div className="flex flex-wrap w-full">
          <div className="flex-col flex-wrap w-full sm:w-1/2 md:px-12 lg:w-1/2">
            <div className="w-full">
              <div className="p-6 mx-4 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer md:mx-0 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
              <div className="inline-flex items-center justify-center mb-4 rounded-full">
                  <Icon
                    icon={mailTwotone}
                    style={{ fontSize: "100px" }}
                    className="p-2 text-blue-400"
                  />
                </div>
                <h2 className="mb-2 text-lg font-bold text-gray-900 title-font">
                  Send e-mail
                </h2>
                <p className="text-sm leading-narrow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.
                </p>
              </div>
              <div className="p-6 mx-4 mt-4 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg md:mx-0 hover:-translate-y-1 hover:scale-105">
              <div className="inline-flex items-center justify-center mb-4 rounded-full">
                  <Icon
                    icon={phoneTwotone}
                    style={{ fontSize: "100px" }}
                    className="p-2 text-blue-400"
                  />
                </div>
                <h2 className="mb-2 text-lg font-bold text-gray-900 title-font">
                  Call now
                </h2>
                <p className="text-sm leading-narrow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.
                </p>
              </div>
              <div className="p-6 mx-4 mt-4 text-center transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg md:mx-0 hover:-translate-y-1 hover:scale-105">
              <div className="inline-flex items-center justify-center mb-4 rounded-full">
                  <Icon
                    icon={calendarTwotone}
                    style={{ fontSize: "100px" }}
                    className="p-2 text-blue-400"
                  />
                </div>
                <h2 className="mb-2 text-lg font-bold text-gray-900 title-font">
                  Schedule call
                </h2>
                <p className="text-sm leading-narrow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col w-full p-8 mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow-lg lg:w-1/2 md:w-1/2 md:mt-0">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-center text-gray-900 sm:leading-10">
            Send A Message
          </h1>
          <p className="mt-2 mb-5 text-center">
            Please fill out the form below.
          </p>
          <form className="w-full max-w-lg mx-auto mt-4" name="contact-page" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact-page" />
          <div className="flex flex-wrap">
          <div className="w-full px-2 md:w-1/2">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Name
          </label>
          <input
            className="w-full px-4 py-2 mb-4 leading-tight form-input"
            placeholder="First and Last"
            type="text"
            name="name"
          />
          </div>
          <div className="w-full px-2 md:w-1/2">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Email
          </label>
          <input
            className="w-full px-4 py-2 mb-4 leading-tight form-input"
            placeholder="Jondoe@example.com"
            type="email"
            name="email"
          />
          </div>
          </div>
          <div className="flex flex-wrap">
          <div className="w-full px-2 md:w-1/2">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Company
          </label>
          <input
            className="w-full px-2 py-2 mb-4 leading-tight form-input"
            placeholder="Westchase Associates, LP"
            type="text"
            name="company"
          />
          </div>
          <div className="w-full px-2 md:w-1/2">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Select your line of business.
          </label>
          <select name="industy" className="w-full px-4 py-2 mb-4 leading-tight form-select">
            <option></option>
            <option value="I.T.">Information Technology</option>
            <option value="Oil & Gas">Oil & Gas</option>
            <option value="Finance">Financial Services</option>
            <option value="Management">Mangement</option>
            <option value="Marketing">Marketing</option>
            <option value="Development">Development</option>
            <option value="Other...">Other</option>
          </select>
          </div>
          </div>
          <div className="px-2">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Message
          </label>
          <textarea
            className="w-full h-32 px-4 py-2 mb-4 form-textarea"
            placeholder="Type your message here..."
            type="text"
            name="message"
          ></textarea>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            GDPR Consent
          </label>
          </div>
          <div className="inline-flex mb-4">
            <input
              className="w-4 h-4 my-auto mr-2 leading-tight form-checkbox"
              type="checkbox"
            />
            <p className="text-xs text-gray-600">
              I consent to having this website store my submitted information so
              they can respond to my inquiry.
            </p>
          </div>
          <button type="submit" className="w-full py-2 mt-4 text-lg text-white bg-blue-400 border-0 rounded focus:outline-none hover:bg-blue-600">
            Submit
          </button>
          </form>
          
        </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
