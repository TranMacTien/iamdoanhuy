import React from "react"
import styled, { css } from "styled-components"
import media from "styled-media-query"

import { ButtonBase } from "components/Common.styled"
import { Fonts, Colors } from "@constants"

const TitleStyles = css`
  font-family: ${Fonts.Secondary};
  font-style: normal;
  font-weight: 800;
  color: white;
  margin: 16px 0;
  line-height: 1.3;
  font-size: 24px;
  ${media.greaterThan("medium")`
    margin: 32px 0;
    font-size: 48px;
  `}
`

export const Title = styled.h1`
  ${TitleStyles}
`

export const SubTitle = styled.h2`
  ${TitleStyles}
  font-size: 36px;
  ${media.greaterThan("medium")`
    font-size: 84px;
  `}
`

export const Container = styled.div`
  padding: 90px 6vw 60px;
  position: relative;
  section {
    position: relative;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgb(23 0 31 / 60%);
  }
`

export const CoursesContainer = styled.section`
  padding: 0 6vw;
  margin: 0 auto;
`
export const CourseList = styled.ul`
  color: white;
  margin: 24px 0;
  padding: 0;
  list-style: none;
  ${media.greaterThan("medium")`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  `}
`

export const CourseItem = styled.li`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.background || "rgba(40, 9, 64, 0.87)"};
  padding: 48px 16px;
  margin-bottom: 6vw;
  ${media.greaterThan("medium")`
    margin-bottom: 0;
    padding: 90px 32px;
  `}
`

export const CourseTitle = styled.h3`
  font-family: ${Fonts.Secondary};
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 22px;
  margin: 0 0 48px 0;
`

export const CourseInfoList = styled.ul`
  padding: 0;
  margin: 0 0 ${props => props.marginBottom || 64}px 0;
`

export const CourseText = styled.p`
  font-family: ${Fonts.Secondary};
  font-style: normal;
  font-weight: ${props => props.weight || 300};
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  display: block;
  margin: 0 0 8px 0;
`

export const Pricing = styled.p`
  font-family: ${Fonts.Secondary};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  margin: 0 0 36px 0;
`

export const CTA = styled(ButtonBase)``

export const CourseInfoItem = styled(CourseText)`
  /* display: inline-flex; */
`

export const Overview = styled.section`
  padding: 64px 6vw;
  background: ${Colors.DarkViolet};
  margin-bottom: 24px;
`
export const OverviewTitle = styled.h3`
  font-family: ${Fonts.Secondary};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 125.68%;
  text-align: center;
  color: #ffffff;
  margin: 0 0 64px 0;
`

export const OverviewMain = styled.div`
  ${media.greaterThan("medium")`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}
`

export const OverviewImage = styled.img`
  display: block;
  max-width: 325px;
  width: 100%;
  justify-self: center;
  padding: 0 32px 32px;
  ${media.greaterThan("medium")`
    padding: 0;
  `}
`

export const OverviewInfoList = styled.ul`
  padding: 0;
  margin: 0;
  color: white;
  align-self: center;
`

export const OverviewInfoItem = styled.li`
  line-height: 1.3;
  margin: 0 0 16px 0;
  display: grid;
  font-size: 16px;
  grid-template-columns: 180px minmax(0, 1fr);
  ${media.greaterThan("medium")`
    grid-template-columns: 200px minmax(0, 1fr);
    font-size: 18px;
  `}
`

export const LearningPath = styled.section`
  padding: 64px 6vw;
  background: ${Colors.BlackPearl};
`

export const LearningPathTitle = styled.h3`
  font-family: ${Fonts.Secondary};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 125.68%;
  text-align: center;
  color: white;
  margin: 0 0 32px 0;
  ${media.greaterThan("medium")`
    margin-bottom: 80px;
  `}
`

export const LearningPathContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export const LearningPathList = styled.ul`
  color: white;
  padding-left: 1rem;
  ${media.greaterThan("medium")`
    padding-left: 2rem;
  `}
`

export const LearningPathItem = styled.li`
  ${media.greaterThan("medium")`
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
    margin: 0 0 64px 0;
  `}
`

export const LearningPathItemTitle = styled.h4`
  font-weight: 700;
  font-style: normal;
  line-height: 28px;
  margin: 0 0 8px 0;
  font-size: 18px;
  ${media.greaterThan("medium")`
    line-height: 32px;
    margin: 0;
  `}
`

export const LearningPathContent = styled(props => (
  <LearningPathItemTitle {...props} as="p" />
))`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 32px;
  ${media.greaterThan("medium")`
    margin-bottom: 0;
    font-size: 18px;
  `}
`
