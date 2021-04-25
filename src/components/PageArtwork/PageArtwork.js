import React from "react"
import { Masonry } from "masonic"
import { Parallax } from "react-parallax"
import { useMedia } from "react-use"

import Image1 from "images/posters/BinDen.jpeg"
import Image2 from "images/posters/hung_ba.jpeg"
import ImageHomeBg3 from "images/home_bg_3.jpeg"

import * as Styled from "./PageArtwork.styled"

const LIST = Array.from(Array(200), () => ({
  id: new Date().getTime(),
  src: Math.round(Math.random() * 10) % 2 === 0 ? Image1 : Image2,
}))

function PageArtwork(props) {
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
        items={LIST}
        // Adds 8px of space between the grid cells
        columnGutter={8}
        // Sets the minimum column width to 172px
        columnWidth={COLUMN_SIZE}
        // Pre-renders 5 windows worth of content
        overscanBy={3}
        // This is the grid item component
        render={Item}
      ></Masonry>
    </>
  )
}

const Item = ({ data: { id, src } }) => {
  return (
    <div>
      <img src={src} alt="" style={{ width: "100%" }} />
    </div>
  )
}

export default PageArtwork
