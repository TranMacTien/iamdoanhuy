import React, { useEffect, useRef, useState } from "react"
import useCollapse from "react-collapsed"
import anime from "animejs"

import IconArrow from "images/icon-circle-arrow-down.svg"

import * as Styled from "./CourseRoute.styled"

function CourseRouteItem({ item, index }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    duration: 200,
    defaultExpanded: true,
  })
  const containerRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.7) {
            anime({
              targets: containerRef.current,
              duration: 1000,
              opacity: [0, 1],
              translateX: [index % 2 !== 0 ? 40 : -40, 0],
              easing: "easeOutQuart",
            })
            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.7,
      }
    )
    observer.observe(containerRef.current)
  }, [])

  return (
    <li>
      <Styled.Item ref={containerRef} style={{ opacity: 0 }}>
        <Styled.TitleContainer {...getToggleProps()}>
          <Styled.Title>
            {index + 1}. {item.title}
          </Styled.Title>
          <Styled.Arrow src={IconArrow} alt="arrow" isExpanded={isExpanded} />
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
