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
          <form className="w-full max-w-lg mx-auto" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
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
          <button type="submit" className="w-full px-6 py-2 mt-4 text-lg text-white bg-blue-400 border-0 rounded focus:outline-none hover:bg-blue-600">
            Submit
          </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
