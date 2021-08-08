import React from "react"

import Layout from "components/Layout"
import SEO from "components/seo"
import OnlineCourse from "components/OnlineCourse"

function OnlineCoursePage(props) {
  return (
    <Layout>
      <SEO title="Khoá học Online" />
      <OnlineCourse />
    </Layout>
  )
}

export default OnlineCoursePage
