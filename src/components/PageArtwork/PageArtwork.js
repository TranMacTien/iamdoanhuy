import React, { memo, useCallback, useMemo, useState } from "react"
import { Masonry } from "masonic"
import { Parallax } from "react-parallax"
import { useMedia, useLockBodyScroll } from "react-use"
import GatsbyImage from "gatsby-image"
import { darken } from "polished"

import ModalGallery from "components/ModalGallery"
import ImageHomeBg3 from "images/home_bg_3.jpeg"

import * as Styled from "./PageArtwork.styled"

function PageArtwork({ data }) {
  const matchedTablet = useMedia("(min-width: 768px)")
  const COLUMN_SIZE = matchedTablet ? 300 : 160
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [image, setImage] = useState("")

  const onImageClick = useCallback(id => {
    setIsModalOpen(true)
    setImage(id)
  }, [])

  const datWithEvent = useMemo(
    () =>
      data.map((d, index) => ({
        ...d,
        id: index,
        bgColor: darken(0.18, d.colors[3]?.hex || d.colors[0]?.hex),
        onClick: onImageClick,
      })),
    [data]
  )

  const closeModal = useCallback(() => setIsModalOpen(false))

  useLockBodyScroll(isModalOpen)

  return (
    <>
      <Parallax bgImage={ImageHomeBg3} strength={600}>
        <Styled.Container>
          <section>
            <Styled.Title>My Portfolio</Styled.Title>
            <Styled.SubTitle>
              Cùng nhìn xem những sản phẩm mà tớ đã làm cho các Nghệ sĩ, Ca sĩ,
              hot TikToker, có cả những tác phẩm cá nhân của bản thân tớ nữa. Tớ
              nhìn lại mỗi ngày và cố gắng nhiều hơn nữa để nâng cao kỹ năng,
              tạo ra thật nhiều những sản phẩm tốt. Hãy luôn tạo cảm hứng cho
              bản thân mình nhé anh em
              <br />
              Cảm ơn anh em đã ghé xem nhá !
            </Styled.SubTitle>
          </section>
        </Styled.Container>
      </Parallax>
      <div style={{ paddingTop: 8 }}>
        <Masonry
          items={datWithEvent}
          columnGutter={8}
          columnWidth={COLUMN_SIZE}
          overscanBy={10}
          render={Item}
        ></Masonry>
        {isModalOpen && (
          <ModalGallery
            closeModal={closeModal}
            image={image}
            data={datWithEvent}
          />
        )}
      </div>
    </>
  )
}

const Item = memo(({ data: { fluid, bgColor, title, onClick, id } }) => {
  return (
    <Styled.SliderImageWrapper onClick={useCallback(() => onClick(id), [id])}>
      <GatsbyImage
        fluid={fluid}
        backgroundColor={bgColor}
        alt={title}
        style={{ cursor: "pointer" }}
      />
    </Styled.SliderImageWrapper>
  )
})

export default PageArtwork
