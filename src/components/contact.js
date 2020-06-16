import React from "react";

function Contact() {
  const iframe =
    '<iframe style="filter: grayscale(1) contrast(1.2) Opacity(0.6);" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428075.4880496308!2d-95.4953707286542!3d29.798525729931622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1589250587724!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
  function Iframe(props) {
    return (
      <div
        className="absolute inset-0 bg-gray-300"
        // eslint-disable-next-line react/prop-types
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }
  return (
    <section className="relative text-gray-700 body-font">
      <Iframe iframe={iframe} />
      <div className="container flex px-4 py-24 mx-auto md:px-5">
        <div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white border border-gray-200 rounded-lg shadow-lg lg:w-1/2 md:w-1/2 md:ml-auto md:mt-0">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-center text-gray-900 sm:leading-10">
            Contact
          </h1>
          <p className="mt-2 mb-5 text-center">Send A Message</p>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Name
          </label>
          <input
            className="px-4 py-2 mb-4 form-input"
            placeholder="First and Last"
            type="name"
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Email
          </label>
          <input
            className="px-4 py-2 mb-4 form-input"
            placeholder="Jondoe@example.com"
            type="email"
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Company
          </label>
          <input
            className="px-4 py-2 mb-4 form-input"
            placeholder="Barnett Technology LLC"
            type="company"
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Select your line of business.
          </label>
          <select className="px-4 py-2 mb-4 form-select">
            <option></option>
            <option>Information Technology</option>
            <option>Oil & Gas</option>
            <option>Financial Services</option>
            <option>Mangement</option>
            <option>Marketing</option>
            <option>Development</option>
            <option>Other</option>
          </select>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Message
          </label>
          <textarea
            className="h-32 px-4 py-2 mb-4 form-textarea"
            placeholder="Type your message here..."
          ></textarea>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            GDPR Consent
          </label>
          <div className="inline-flex mb-4">
            <input
              className="w-4 h-4 my-auto mr-2 form-checkbox"
              type="checkbox"
            />
            <p className="text-xs text-gray-600">
              I consent to having this website store my submitted information so
              they can respond to my inquiry.
            </p>
          </div>
          <button className="px-6 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
