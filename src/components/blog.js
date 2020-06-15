import React from "react";

const Blog = () => {
  return (
    <section className="bg-gray-100">
      <div className="container flex flex-wrap px-5 py-24 mx-auto border-t border-gray-200 body-font">
        <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10">
            Recent Articles
          </h1>
          <p className="w-full mt-2 text-base lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
          <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex-1">
                <p className="text-sm font-medium leading-5 text-blue-500">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </p>
                <a href="#" className="block">
                  <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
                    How big oil can maintain the rally
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asp...
                  </p>
                </a>
              </div>
              <div className="py-4">
                <button className="inline-block px-3 py-1 mr-2 text-sm font-normal text-gray-600 bg-transparent border border-gray-300 rounded">
                  Exxon
                </button>
                <button className="inline-block px-3 py-1 mr-2 text-sm font-normal text-gray-600 bg-transparent border border-gray-300 rounded">
                  Pipeline
                </button>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium leading-5 text-gray-900">
                    <a href="#" className="hover:underline">
                      Roel Aufderhar
                    </a>
                  </p>
                  <div className="flex text-sm leading-5 text-gray-500">
                    <time dateTime="2020-03-16">Mar 16, 2020</time>
                    <span className="mx-1">&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex-1">
                <p className="text-sm font-medium leading-5 text-blue-500">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </p>
                <a href="#" className="block">
                  <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
                    2020 Technology trends
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asp...
                  </p>
                </a>
              </div>
              <div className="py-4">
                <button className="inline-block px-3 py-1 mr-2 text-sm font-normal text-gray-600 bg-transparent border border-gray-300 rounded">
                  Technology
                </button>
                <button className="inline-block px-3 py-1 mr-2 text-sm font-normal text-gray-600 bg-transparent border border-gray-300 rounded">
                  Strategy
                </button>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium leading-5 text-gray-900">
                    <a href="#" className="hover:underline">
                      Brenna Goyette
                    </a>
                  </p>
                  <div className="flex text-sm leading-5 text-gray-500">
                    <time dateTime="2020-03-16">Mar 16, 2020</time>
                    <span className="mx-1">&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-105">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex-1">
                <p className="text-sm font-medium leading-5 text-blue-500">
                  <a href="#" className="hover:underline">
                    {" "}
                    Case Study
                  </a>
                </p>
                <a href="#" className="block">
                  <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
                    Q4: Predictions
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asp...
                  </p>
                </a>
              </div>
              <div className="py-4">
                <button className="inline-block px-3 py-1 mr-2 text-sm font-normal text-gray-600 bg-transparent border border-gray-300 rounded">
                  Case Study
                </button>
                <button className="inline-block px-3 py-1 mr-2 text-sm font-normal text-gray-600 bg-transparent border border-gray-300 rounded">
                  Reporting
                </button>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium leading-5 text-gray-900">
                    <a href="#" className="hover:underline">
                      Daniela Metz
                    </a>
                  </p>
                  <div className="flex text-sm leading-5 text-gray-500">
                    <time dateTime="2020-03-16">Mar 16, 2020</time>
                    <span className="mx-1">&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
