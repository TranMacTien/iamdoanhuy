/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import "normalize.css"
import 'swiper/swiper-bundle.min.css';

import { GlobalStyled } from "./GlobalStyled"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "components/Header"
import Footer from "components/Footer"

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
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div style={{ position: "relative" }}>
        <GlobalStyled />
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
