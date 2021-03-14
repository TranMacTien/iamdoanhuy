import React from "react"
import { StudyPack } from "components"
import { SectionTitle, ButtonBase } from "components/Common.styled"
import {
  StyledPortfolioContainer,
  StyledPortfolioWrapper,
  StyledPortfolioItemWrapper,
} from "../PageIndex.styled"

function Portfolio(props) {
  return (
    <StyledPortfolioContainer>
      <SectionTitle>porfolio</SectionTitle>

      <StyledPortfolioWrapper>
        {new Array(6).fill(0).map((el, index) => (
          <StyledPortfolioItemWrapper key={index}>
            <StudyPack
              image="https://gamek.mediacdn.vn/133514250583805952/2020/3/19/photo-1-158458950282555176278.jpg"
              name="loremd asd as dsa"
              type="Poster Design"
            />
          </StyledPortfolioItemWrapper>
        ))}
      </StyledPortfolioWrapper>
      <div style={{ textAlign: "center" }}>
        <ButtonBase>xem thêm</ButtonBase>
      </div>
    </StyledPortfolioContainer>
  )
}

export default Portfolio
