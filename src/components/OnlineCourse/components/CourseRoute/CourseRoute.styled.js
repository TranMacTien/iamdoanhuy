import styled from "styled-components"

import BackgroundMobile1 from "images/background-wave-mobile.svg"
import { Colors } from "@constants"
import { desktopUp, tabletUp } from 'utils/media'

export const Container = styled.div`
  padding: 24px 24px 64px;
  box-sizing: border-box;
  background: url("${BackgroundMobile1}") bottom center no-repeat;
  background-size: 100% auto;
`

export const Section = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const Item = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
`

export const MainList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  ${tabletUp`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px;
    &>* {
      padding: 12px;
      width: 50%;
    }
    &>*:last-child {
      transform: translateY(64px);
    }
  `}
  ${desktopUp`
    margin: 0 -64px;
    &>* {
      padding: 64px;
    }
    &>*:last-child {
      transform: translateY(128px);
    }
  `}
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 125.68%;
  color: white;
  margin: 0;
  padding-right: 8px;
  ${desktopUp`
    font-size: 24px;
  `}
`

export const TitleContainer = styled.div`
  background: linear-gradient(to right, #6a58ef 0%, #e06073 100%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.26);
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  -webkit-appearance: none;
  outline: none;
  ${desktopUp`
    padding: 20px 32px;
  `}
  img {
    flex-shrink: 0;
  }
`

export const SubList = styled.ul`
  margin: 0;
  box-sizing: border-box;
  padding: 16px;
  list-style: none;
  ${desktopUp`
    padding: 32px;
  `}
`

export const SubItem = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`

export const SubItemTitle = styled.h4`
  font-size: 14px;
  line-height: 125.68%;
  color: ${Colors.Primary};
  font-weight: normal;
  margin: 0;
  position: relative;
  ${desktopUp`
    font-size: 18px;
  `}
`

export const Time = styled.span`
  font-size: 14px;
  line-height: 125.68%;
  color: ${Colors.Primary};
  font-weight: normal;
  margin: 0;
  ${desktopUp`
    font-size: 16px;
  `}
`

export const Arrow = styled.img`
  width: 16px;
  transition: all 0.2s ease;
  transform: rotate(${props => (props.isExpanded ? -180 : 0)}deg);
  ${desktopUp`
    display: none!important;
  `}
`

export const CourseRouteItemWrapper = styled.div`
  margin-bottom: 16px;
  ${tabletUp`
    margin-bottom: 24px;
  `}
  ${desktopUp`
    margin-bottom: 64px;
  `}
`
