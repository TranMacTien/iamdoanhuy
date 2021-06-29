import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "components/Layout"
import PageArtwork from "components/PageArtwork"
import SEO from "components/seo"

const ArtworkPage = () => {
  const data = useStaticQuery(graphql`
    query allDatoCmsArtworkQuery {
      allDatoCmsArtwork {
        nodes {
          image {
            colors {
              hex
            }
            url
            title
            fluid {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Artwork" />
      <PageArtwork data={data.allDatoCmsArtwork.nodes[0].image} />
    </Layout>
  )
}

export default ArtworkPage
