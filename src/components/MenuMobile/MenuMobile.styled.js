import styled from "styled-components"
import media from 'styled-media-query'

import { Colors, Fonts } from "@constants"

export const Container = styled.div`
  ${media.greaterThan("medium")`
    display: none;
  `}
`

export const Hamburger = styled.button`
  border: none;
  background: none;
  outline: none;
  padding: 8px;
  height: 32px;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    height: 2px;
    background-color: white;
    width: 100%;
    display: block;
    &:nth-child(2) {
      transform: translateX(4px);
    }
  }
`

export const Menu = styled.div`
  visibility: ${props => (props.open ? "visible" : "hidden")};
  opacity: ${props => (props.open ? 1 : 0)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Colors.DarkViolet};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`

export const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
`

export const MenuItem = styled.li`
  a {
    font-family: ${Fonts.Secondary};
    font-weight: 700;
    color: ${Colors.TextPrimary};
    text-decoration: none;
    font-size: 24px;
    margin-bottom: 36px;
    display: inline-block;
  }
`

export const ButtonClose = styled.button`
  background: none;
  padding: 0;
  outline: none;
  border: none;
  width: 32px;
  height: 32px;
  position: absolute;
  top: 24px;
  right: 24px;

  &:after, &:before {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background: white;
    transform: rotate(45deg);
    border-radius: 99px;
    margin-top: -1px;
  }

  &:before {
    transform: rotate(-45deg);
  }
`