import styled from "styled-components"

import BackgroundMobile1 from "images/background-wave-mobile.svg"
import { Colors } from "@constants"

export const Container = styled.div`
  padding: 24px 24px 64px;
  background: url("${BackgroundMobile1}") bottom center no-repeat;
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
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 125.68%;
  color: white;
  margin: 0;
  padding-right: 8px;
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
  img {
    flex-shrink: 0;
  }
`

export const SubList = styled.ul`
  margin: 0;
  box-sizing: border-box;
  padding: 16px;
  list-style: none;
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
`

export const Time = styled.span`
  font-size: 14px;
  line-height: 125.68%;
  color: ${Colors.Primary};
  font-weight: normal;
  margin: 0;
`

export const Arrow = styled.img`
  width: 16px;
  transition: all 0.2s ease;
  transform: rotate(${props => (props.isExpanded ? -180 : 0)}deg);
`
