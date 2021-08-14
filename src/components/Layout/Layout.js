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
import "../../assets/css/font.css"
import { GlobalStyled } from "./GlobalStyled"

import Header from "components/Header"
import Footer from "components/Footer"
require("swiper/swiper.min.css")
require("swiper/components/pagination/pagination.min.css")
require("swiper/components/navigation/navigation.min.css")
require("swiper/components/effect-fade/effect-fade.min.css")

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;800&display=swap"
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
