import React from "react"
import { Masonry } from "masonic"
import { Parallax } from "react-parallax"
import { useMedia } from "react-use"
import GatsbyImage from "gatsby-image"
import { darken } from "polished"

import ImageHomeBg3 from "images/home_bg_3.jpeg"

import * as Styled from "./PageArtwork.styled"

function PageArtwork({ data }) {
  const matchedTablet = useMedia("(min-width: 768px)")
  const COLUMN_SIZE = matchedTablet ? 300 : 160
  return (
    <>
      <Parallax bgImage={ImageHomeBg3} strength={600}>
        <Styled.Container>
          <section>
            <Styled.Title>My Portfolio</Styled.Title>
            <Styled.SubTitle>
              Cùng nhìn xem những sản phẩm mà mình đã làm. Mình đã có những dự
              án cùng các Agency, Production House, những Nghệ sĩ, Ca sĩ, hot
              TikToker, có cả những tác phẩm cá nhân của bản thân mình. Mình
              nhìn lại mỗi ngày và cố gắng nhiều hơn nữa để nâng cao kỹ năng,
              tạo ra thật nhiều những sản phẩm tốt. <br />
              Cảm ơn bạn đã ghé xem !
            </Styled.SubTitle>
          </section>
        </Styled.Container>
      </Parallax>
      <Masonry
        // Provides the data for our grid items
        items={data}
        // Adds 8px of space between the grid cells
        columnGutter={8}
        // Sets the minimum column width to 172px
        columnWidth={COLUMN_SIZE}
        // Pre-renders 5 windows worth of content
        overscanBy={10}
        // This is the grid item component
        render={Item}
      ></Masonry>
    </>
  )
}

const Item = ({ data: { smartTags, fluid, colors } }) => {
  const bgColor = darken(0.18, colors[3].hex)
  return (
    <GatsbyImage
      fluid={fluid}
      backgroundColor={bgColor}
      alt={smartTags.join(", ")}
    />
  )
}

export default PageArtwork
