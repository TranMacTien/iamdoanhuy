import React, { useEffect, useState } from "react"
import useCollapse from "react-collapsed"

import IconArrow from "images/icon-circle-arrow-down.svg"
import IconPlay from 'images/icon-play.svg'
import * as Styled from "./CourseRoute.styled"

function CourseRouteItem({ item, index }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    duration: 200,
    defaultExpanded: true,
  })

  return (
    <li>
      <Styled.Item>
        <Styled.TitleContainer {...getToggleProps()}>
          <Styled.Title>
            {index + 1}. {item.title}
          </Styled.Title>
          <Styled.Arrow
            src={IconArrow}
            alt="arrow"
            isExpanded={isExpanded}
          />
        </Styled.TitleContainer>
        <div {...getCollapseProps()}>
          <Styled.SubList>
            {item.sub.map((subItem, index) => (
              <Styled.SubItem key={index}>
                <Styled.SubItemTitle>
                  {index + 1}. {subItem.title}
                </Styled.SubItemTitle>{" "}
                <Styled.Time>{subItem.time}</Styled.Time>
              </Styled.SubItem>
            ))}
          </Styled.SubList>
        </div>
      </Styled.Item>
    </li>
  )
}

export default CourseRouteItem
