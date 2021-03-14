import React from "react"

import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import CourseSection from "./components/CourseSection"

function PageIndex(props) {
  return (
    <div>
      <Intro />
      <Portfolio />
      <CourseSection />
    </div>
  )
}

export default PageIndex
