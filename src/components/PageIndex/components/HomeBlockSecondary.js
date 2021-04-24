import React from "react"
import { Parallax } from "react-parallax";

import * as Styled from "../PageIndex.styled"

function HomeBlockSecondary({
  title,
  desc,
  url,
  textLink,
  image,
  type,
  background,
  imageWidth,
}) {
  return (
    <Parallax bgImage={background} strength={600}>
      <Styled.HomeBlockSecondaryContainer>
        <Styled.HomeBlockLeft type={type}>
          <Styled.HomeBlockSecondaryImage
            src={image}
            alt=""
            imageWidth={imageWidth}
          />
        </Styled.HomeBlockLeft>
        <Styled.HomeBlockRight>
          <Styled.HomeBlockSecondaryContent type={type}>
            <Styled.HomeBlockSecondaryTitle type={type}>
              {title}
            </Styled.HomeBlockSecondaryTitle>
            <Styled.HomeBlockSecondaryDesc>{desc}</Styled.HomeBlockSecondaryDesc>

            <Styled.HomeBlockSecondaryCTA as="a" href={url} target="_blank" rel="noopener">
              {textLink}
            </Styled.HomeBlockSecondaryCTA>
          </Styled.HomeBlockSecondaryContent>
        </Styled.HomeBlockRight>
      </Styled.HomeBlockSecondaryContainer>
    </Parallax>
  )
}

HomeBlockSecondary.defaultProps = {
  type: "primary",
}

export default HomeBlockSecondary
