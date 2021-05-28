import * as React from "react"

import Layout from "components/Layout"
import SEO from "components/seo"
import OfflineCourse from 'components/OfflineCourse'

const OfflineCoursePage = () => (
  <Layout>
    <SEO title="Khoá học" />
    <OfflineCourse />
  </Layout>
)

export default OfflineCoursePage
