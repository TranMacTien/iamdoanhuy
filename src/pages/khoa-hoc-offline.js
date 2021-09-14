import * as React from "react"

import Layout from "components/Layout"
import SEO from "components/seo"
import Course from 'components/Course'

const CoursePage = () => (
  <Layout>
    <SEO title="Khoá học" />
    <Course />
  </Layout>
)

export default CoursePage
