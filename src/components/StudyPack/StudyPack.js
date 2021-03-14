import React from "react"

import { ButtonBase } from "components/Common.styled"
import {
  StyledContainer,
  StyledWrapper,
  StyledThumbnail,
  StyledInfoContainer,
  StyledInfoTitle,
  StyledInfoType,
} from "./StudyPack.styled"

function StudyPack(props) {
  const { image, name, desc, type, url = "" } = props
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledThumbnail src={image} alt={name} />
      </StyledWrapper>
      <StyledInfoContainer>
        <div style={{ textAlign: "center" }}>
          <StyledInfoTitle>{name}</StyledInfoTitle>
          <StyledInfoType>- {type} -</StyledInfoType>
          <ButtonBase as="a" type="primary" size="small" href={url}>
            Chi tiết
          </ButtonBase>
        </div>
      </StyledInfoContainer>
    </StyledContainer>
  )
}

export default StudyPack
