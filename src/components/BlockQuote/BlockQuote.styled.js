import styled from "styled-components"

import { Fonts, Colors } from "@constants"
import ImageQuote from "images/quote.svg"

export const Container = styled.section`
  height: 30vw;
  display: flex;
  align-items: center;
  padding: 0 6vw;
  background-color: rgb(23 0 31 / 60%);
`

export const QuoteContainer = styled.div`
  width: 60%;
  position: relative;
`

export const QuoteWrapper = styled.div`
  background: url("${ImageQuote}") center/cover no-repeat;
  padding-bottom: calc(100% * 209 / 676);
`

export const QuoteContent = styled.p`
  position: absolute;
  right: 10%;
  width: 48%;
  color: ${Colors.TextPrimary};
  height: 100%;
  margin: 0;
  top: 0;
  display: flex;
  align-items: center;
  line-height: 1.6;
  font-weight: 400;
  top: 46%;
  transform: translateY(-50%);
  font-size: 18px;
`

export const QuoteCta = styled.p`
  font-family: ${Fonts.Secondary};
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.25;
  color: ${Colors.TextPrimary};
`
