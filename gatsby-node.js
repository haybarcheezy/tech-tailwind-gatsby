/*
const Promise = require('bluebird')
const path = require('path')
// import axios from 'axios'


require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
// const cockpitToken = `${process.env.COCKPIT_TOKEN}`
// const cockpitUrl = `${process.env.COCKPIT_API_URL}`


exports.createPages = async ({
    graphql,
    actions
}) => {
    const {
        createPage
    } = actions


    const postPage = path.resolve('./src/templates/post.jsx')


    // const { createRedirect } = actions;
    // createRedirect({
    //   fromPath: '/404/',
    //   toPath: '/cari/',
    //   isPermanent: true
    // });

    const allItems = graphql(
        `{
         allDirectusBlog {
             edges {
                 node {
                     title
                     slug
                     author
                     category
                 }
             }
         }
        }
          `
    ).then(res => {
        //  console.log(res)
        if (res.errors) {
            console.log(res.errors)
            throw(res.errors)
        }

        const pages = res.data.allDirectusBlog.edges
        pages.forEach((post, index) => {
            createPage({
                path: `/news/${post.node.slug}/`,
                component: postPage,
                context: {
                    slug: post.node.slug,
                    previous: index === 0 ? null : pages[index - 1].node,
                    next: index === (pages.length - 1) ? null : pages[index + 1].node,
                },
            });
        })


    })

    return Promise.all([allItems]);
}

*/