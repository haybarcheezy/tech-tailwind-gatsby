import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from "prop-types";
import Layout from "../components/layout";

const NewsPage = ({data}) => {
    const News = data.allDirectusBlog.edges

    return(
        <Layout>
            <section className="h-full bg-white">
            <ul className="">
            {News.map(({node, }) => {
                return (
                    <li className="list-item" key={node.id}>
                        <Link to={`/${node.slug}`}>
                            <div className="index-news">
                                <h2 className="index-news-head-two">{node.title}</h2>
                                
                            </div>
                        </Link>
                    </li>
                )
            })}
            </ul>
            </section>
        </Layout>
    )
}

export default NewsPage
export const newsQuery = graphql`
    query newsQuery {
        allDirectusBlog {
            edges {
                node {
                    id
                    title
                    category
                    slug
                }
            }
        }
    }
`

NewsPage.propTypes = {
    data: PropTypes.object.isRequired,
};