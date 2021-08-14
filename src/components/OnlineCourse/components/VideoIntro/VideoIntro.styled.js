import styled from "styled-components"
import media from 'styled-media-query'

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 100px;
`

export const Container = styled.div`
  position: relative;
  height: 0;
  padding-bottom: calc(100% * 9 / 16);
  overflow: hidden;
  border-radius: 8px;
  ${media.greaterThan("medium")`
    border-radius: 40px;
  `}
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
