import React, { Component } from "react";
import Modal from "react-awesome-modal";

export default class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div className="py-4 text-center bg-blue-900 lg:px-4">
        <button type="button" onClick={() => this.openModal()}>
          <div
            className="flex items-center p-2 mx-4 leading-none text-white transition duration-500 ease-in-out transform bg-blue-800 rounded-full shadow-md cursor-pointer hover:shadow-lg hover:scale-105 md:mx-0 lg:inline-flex"
            role="alert"
          >
            <span className="flex px-2 py-1 mr-3 text-xs font-bold uppercase bg-blue-500 rounded-full">
              New
            </span>
            <span className="flex-auto mr-2 font-semibold text-center">
              Join to our monthly newsletter
            </span>
            <svg
              className="w-4 h-4 opacity-75 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
          </div>
        </button>
        <Modal
          visible={this.state.visible}
          width="400"
          height="410"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
                        <button
                className="flex float-right px-4 py-2 text-sm text-gray-500 bg-gray-200 rounded-tr rounded-bl hover:bg-red-400 hover:text-red-700"
                href="javascript:void(0);"
                onClick={() => this.closeModal()}
              >
                Close
              </button>
          <div className="w-full h-full p-4 pt-8 text-left">
            <h1 className="pt-2 pb-6 text-lg text-2xl font-bold text-center">
              Newsletter Sign-Up
            </h1>
            <form
              className="w-full max-w-lg mx-auto"
              name="newsletter"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <label className="block mb-2 text-sm font-bold leading-tight text-gray-700">
                Name
              </label>
              <input className="w-full px-4 py-2 mb-4 leading-tight form-input" type="name" />
              <label className="block mb-2 text-sm font-bold leading-tight text-gray-700">
                Email
              </label>
              <input
                className="w-full px-4 py-2 mb-4 leading-tight form-input"
                type="email"
              />
              <label className="block mb-2 text-sm font-bold leading-tight text-gray-700">
                Company
              </label>
              <input
                className="w-full px-4 py-2 mb-4 leading-tight form-input"
                type="company"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 mt-4 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600"
              >
                Subscribe
              </button>

              </form>
            </div>
        </Modal>
      </div>
    );
  }
}
