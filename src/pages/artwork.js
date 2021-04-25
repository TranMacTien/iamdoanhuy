import React from "react"

import Layout from "components/Layout"
import PageArtwork from "components/PageArtwork"
import SEO from "components/seo"

const ArtworkPage = () => (
  <Layout>
    <SEO title="Artwork" />
    <PageArtwork />
  </Layout>
)

export default ArtworkPage