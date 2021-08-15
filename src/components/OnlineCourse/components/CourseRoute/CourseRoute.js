import React from "react"
import { useMedia } from "react-use"

import CourseRouteItem from "./CourseRouteItem"
import { data } from "./data"
import * as Styled from "./CourseRoute.styled"

function CourseRoute(props) {
  const isTabletUp = useMedia("(min-width: 768px)")

  const dataLeft = isTabletUp
    ? data.filter((_, index) => index % 2 === 0)
    : data.slice(0, 6)

  const dataRight = isTabletUp
    ? data.filter((_, index) => index % 2 !== 0)
    : data.slice(6, data.length)
  return (
    <Styled.Container>
      <Styled.MainList>
        <div>
          {dataLeft.map((item, index) => (
            <Styled.CourseRouteItemWrapper
              key={index}
            >
              <CourseRouteItem
                item={item}
                index={isTabletUp ? (index + 1) * 2 - 2 : index}
              />
            </Styled.CourseRouteItemWrapper>
          ))}
        </div>
        <div>
          {dataRight.map((item, index) => (
            <Styled.CourseRouteItemWrapper
              key={index}
            >
              <CourseRouteItem
                item={item}
                index={isTabletUp ? (index + 1) * 2 - 1 : index + 6}
              />
            </Styled.CourseRouteItemWrapper>
          ))}
        </div>
      </Styled.MainList>
    </Styled.Container>
  )
}

export default CourseRoute
