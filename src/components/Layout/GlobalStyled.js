import { createGlobalStyle } from "styled-components"
import { Fonts } from "@constants/Fonts"
import { Colors } from 'constants'

export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: ${Fonts.Primary};
    margin: 0;
    padding: 0;
    max-width: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    font-weight: 400;
    background: black;
    letter-spacing: 0.3px;
    font-size: 18px;
    &.noscroll {
      overflow: hidden;
    }
  }

  .react-parallax-bgimage {
    will-change: transform;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: all 600ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .swiper-button-prev, .swiper-button-next {
    color: black;
  }

  .swiper-pagination-bullet-active {
    background: black;
  }

  .swiper-slide {
    will-change: opacity, transform;
  }
`
