import React from "react"

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
    <Styled.HomeBlockSecondaryContainer background={background}>
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

          <Styled.HomeBlockSecondaryCTA as="a" href={url} target="_blank">
            {textLink}
          </Styled.HomeBlockSecondaryCTA>
        </Styled.HomeBlockSecondaryContent>
      </Styled.HomeBlockRight>
    </Styled.HomeBlockSecondaryContainer>
  )
}

HomeBlockSecondary.defaultProps = {
  type: "primary",
}

export default HomeBlockSecondary
