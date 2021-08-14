import React from "react"

import CourseRouteItem from "./CourseRouteItem"
import { data } from "./data"
import * as Styled from "./CourseRoute.styled"

function CourseRoute(props) {
  return (
    <div style={{ padding: 24 }}>
      <Styled.MainList>
        {data.map((item, index) => (
          <div key={index} style={{ marginBottom: 16 }}>
            <CourseRouteItem item={item} index={index} />
          </div>
        ))}
      </Styled.MainList>
    </div>
  )
}

export default CourseRoute
