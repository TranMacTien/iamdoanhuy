import styled from "styled-components"
import { Colors } from "constants"

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
  primary: Colors.Primary,
}

const ButtonBackground = {
  primary: "none",
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
  background: ${props => ButtonBackground[props.type] || "none"};
  color: ${props => ButtonColor[props.type] || "white"};
  font-size: ${props => ButtonFontSize[props.size] || 16}px;
  border-radius: 999px;
  border: 1px solid ${props => ButtonBorder[props.type] || "white"};
  height: ${props => ButtonHeight[props.size] || 40}px;
  justify-content: center;
  padding: 0 ${props => ButtonPadding[props.size] || 20}px;
  align-items: center;
  line-height: 1;
  outline: none;
  cursor: pointer;
  /* for link <a /> tag */
  text-decoration: none;
  box-sizing: border-box;
`
