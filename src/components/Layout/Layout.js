/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "normalize.css"
import "@fontsource/ibm-plex-mono"

import { GlobalStyled } from "./GlobalStyled"
// import { useStaticQuery, graphql } from "gatsby"

import { Header, Footer } from "components"

const Layout = ({ children }) => {
  /*  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  return (
    <div style={{ position: "relative" }}>
      <GlobalStyled />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
