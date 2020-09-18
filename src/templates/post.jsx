import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import { Icon } from '@iconify/react';
import arrowCircleLeft from '@iconify/icons-heroicons-solid/arrow-circle-left';


import Layout from "../components/layout";

import SEO from "../components/seo";

export default function News({ data }) {
  const post = data.directusBlog;

  // styles

  return (
    <Layout key={post.id} style={{ background: "white" }}>
        <div>
        <section
      className="bg-gray-300 border-t border-gray-200 body-font"
    >
      <div className="container px-5 pt-12 pb-8 mx-auto mt-10">
          <Link to="/news" className="inline-flex align-center">
      <Icon className="text-gray-700" icon={arrowCircleLeft} style={{fontSize: '32px'}} />
      <h3 className="pl-4 text-lg text-gray-700">Back to news</h3>
        </Link>
      </div>
    </section>
    <div className="max-w-screen-lg mx-auto">
          <SEO title={post.title} />
          <h1 className="post-head"> {post.title} </h1>
          <div className="mt-10">
            <div className="relative w-full mx-auto mb-4 md:mb-0">
              <div className="px-4 lg:px-0">
                <h2 className="text-4xl font-semibold leading-tight text-gray-800">
                  {post.title}
                </h2>
                <a
                  href="#"
                  className="inline-flex items-center justify-center py-2 mb-2 text-green-700"
                >
                  {post.category}
                </a>
              </div>

              <img
                src={post.featured_image.data.full_url}
                className="object-cover w-full lg:rounded"
                style={{ height: "28em" }}
              />
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-12">
              <div className="w-full px-4 mt-12 text-lg leading-relaxed text-gray-700 lg:px-0 lg:w-3/4">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              <div className="w-full max-w-screen-sm m-auto mt-12 lg:w-1/4">
                <div className="p-4 border-t border-b md:border md:rounded">
                  <div className="flex py-2">
                    <img
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      className="object-cover w-10 h-10 mr-2 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">
                        {" "}
                        {post.author}
                      </p>
                    </div>
                  </div>
                  <p className="py-3 text-gray-700">
                    Mike writes about technology Yourself required no at
                    thoughts delicate landlord it be. Branched dashwood do is
                    whatever it.
                  </p>
                  <button className="flex items-center justify-center w-full px-2 py-1 text-gray-100 bg-blue-400 rounded">
                    Follow
                    <i className="ml-2 bx bx-user-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </Layout>
  );
}

export const postQuery = graphql`
  query postQuery {
    directusBlog {
      id
      title
      slug
      category
      featured_image {
        data {
          full_url
        }
      }
      created_on(fromNow: true)
      content
    }
  }
`;

News.propTypes = {
  data: PropTypes.object.isRequired,
};
