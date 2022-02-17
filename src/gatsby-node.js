const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(` ... `)

  paginate({
    createPage,
    items: result.data.allMarkdownRemark.edges,
    itemsPerPage: 3,
    pathPrefix: '/posts',
    component: path.resolve('src/templates/blog-archive.js')
  });
};