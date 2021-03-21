/*const path = require('path')


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: { items },
  } = await graphql(`
    query {
      items: allContentfulHilaryJewelry {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  items.edges.forEach(item => {
    createPage({
      path: `/shop/${item.node.slug}`,
      component: path.resolve(`src/templates/item-template.js`),
      context: { slug: item.node.slug },
    })
  })

}*/
