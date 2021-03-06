import styled from "styled-components"
import { darken } from "polished"
import { Colors, Fonts } from "@constants"

export const SectionTitle = styled.h2`
  margin: 0 0 ${props => props.marginBottom || 0} 0;
  padding-bottom: 12px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  position: relative;
  color: ${props => (props.type === "primary" ? Colors.Primary : "white")};
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 66px;
    height: 1px;
    background: ${props =>
      props.type === "primary" ? Colors.Primary : "white"};
    display: block;
  }
`

const ButtonColor = {
  primary: "black",
}

const ButtonBackground = {
  primary: Colors.Secondary,
}

const ButtonBorder = {
  primary: Colors.Primary,
}

const ButtonHeight = {
  small: 32,
}

const ButtonFontSize = {
  small: 12,
}

const ButtonPadding = {
  small: 16,
}

export const ButtonBase = styled.button`
  display: inline-flex;
  border: none;
  background: ${props => ButtonBackground[props.type] || Colors.Secondary};
  color: ${props => ButtonColor[props.type] || "black"};
  font-size: ${props => ButtonFontSize[props.size] || 18}px;
  font-weight: 800;
  font-family: ${Fonts.Primary};
  border-radius: 4px;
  border: 1px solid ${props => ButtonBorder[props.type] || Colors.Secondary};
  height: ${props => ButtonHeight[props.size] || 48}px;
  justify-content: center;
  padding: 0 ${props => ButtonPadding[props.size] || 40}px;
  align-items: center;
  line-height: 1;
  outline: none;
  cursor: pointer;
  /* for link <a /> tag */
  text-decoration: none;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${props =>
      `${darken(0.08, ButtonBackground[props.type] || Colors.Secondary)}`};
    border-color: ${props =>
      `${darken(0.08, ButtonBackground[props.type] || Colors.Secondary)}`};
  }
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
`
