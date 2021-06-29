import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "components/Layout"
import PageIndex from "components/PageIndex"
import SEO from "components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query allDatoCmsHomePageSliderQuery {
      allDatoCmsHomePageSlider {
        nodes {
          featurePoster {
            colors {
              hex
            }
            title
            fluid(imgixParams: { w: "400", h: "400", fit: "crop" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Trang chủ" />
      <PageIndex data={data.allDatoCmsHomePageSlider.nodes[0].featurePoster} />
    </Layout>
  )
}

export default IndexPage
