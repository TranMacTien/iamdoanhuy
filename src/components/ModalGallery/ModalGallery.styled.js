import styled from "styled-components"

import { Fonts } from "constants/Fonts"

export const ButtonClose = styled.button`
  border: none;
  outline: none;
  background: none;
  position: absolute;
  top: 32px;
  right: 32px;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  z-index: 10;
  &:hover {
    transform: rotate(540deg);
  }
`

export const ButtonFullscreen = styled(ButtonClose)`
  right: auto;
  left: 32px;
  &:hover {
    transform: none;
  }
`

export const Title = styled.h2`
  margin: 48px 0 0 0;
  text-align: center;
  display: ${props => props.fullscreen && "none"};
  font-family: ${Fonts.Secondary};
`

export const ContentContainer = styled.div``

export const ImageOuter = styled.div`
  padding: ${props => (props.fullscreen ? 0 : "32px 48px")};
`
