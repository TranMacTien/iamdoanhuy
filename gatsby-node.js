/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
  if (page.path.match(/^\/khoa-hoc-offline/)) {
    deletePage(page)
  }
}
