import styled from "styled-components"

import { Fonts, Colors } from "@constants"
import ImageQuote from "images/quote.svg"
import media from 'styled-media-query'

export const Container = styled.section`
  padding: 32px 6vw;
  background-color: rgb(23 0 31 / 60%);
  ${media.greaterThan("medium")`
    padding: 0 6vw;
    align-items: center;
    display: flex;
    height: 30vw;
  `}
`

export const QuoteContainer = styled.div`
  position: relative;
  ${media.greaterThan("medium")`
    width: 60%;
  `}
`

export const QuoteWrapper = styled.div`
  padding: 0 0 32px 0;
  ${media.greaterThan("medium")`
    padding: 0;
    background: url("${ImageQuote}") center/cover no-repeat;
    padding-bottom: calc(100% * 209 / 676);
  `}
`

export const QuoteContent = styled.p`
  color: ${Colors.TextPrimary};
  margin: 0;
  line-height: 1.6;
  font-weight: 400;
  font-size: 16px;
  ${media.greaterThan("medium")`
    font-size: 18px;
    height: 100%;
    display: flex;
    align-items: center;
    width: 48%;
    right: 10%;
    transform: translateY(-50%);
    top: 46%;
    position: absolute;
  `}
`

export const QuoteCta = styled.p`
  font-family: ${Fonts.Primary};
  font-style: normal;
  font-weight: bold;
  line-height: 1.25;
  color: ${Colors.TextPrimary};
  font-size: 24px;
  margin: 0;
  ${media.greaterThan("medium")`
    font-size: 40px;
  `}
`
