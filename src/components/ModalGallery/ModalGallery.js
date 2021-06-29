import React, { useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Pagination,
  Navigation,
  Virtual,
  EffectFade,
} from "swiper/core"
import { useFullscreen, useToggle } from "react-use"

import Icomoon from "components/Icomoon"

import ImageContainer from "./ImageContainer"
import * as Styled from "./ModalGallery.styled"
import { useFullscreenEvent } from "./hooks/useFullscreenEvent"

// install Swiper modules
SwiperCore.use([EffectFade, Pagination, Navigation, Virtual])

Modal.setAppElement("body")

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 100000,
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: "none",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "0",
    outline: "none",
    padding: 0,
  },
}

function ModalGallery({ closeModal, image: imageId, data }) {
  const [slideIndex, setSlideIndex] = useState(0)
  const dataTransformed = [
    ...data.slice(imageId, data.length),
    ...data.slice(0, imageId - 1),
  ]
  const contentRef = useRef()
  const [isFullscreen, setFullscreen] = useState(false)

  const onSlideChange = swiper => {
    setSlideIndex(swiper.activeIndex)
  }

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }

  const requestFullscreen = () => {
    document.body.requestFullscreen()
  }

  useEffect(() => () => exitFullScreen(), [])

  useFullscreenEvent(setFullscreen)

  return (
    <Modal
      isOpen
      onRequestClose={closeModal}
      closeTimeoutMS={600}
      style={modalStyles}
    >
      <Styled.ContentContainer ref={contentRef} fullscreen={isFullscreen}>
        <Styled.ButtonFullscreen onClick={isFullscreen ? exitFullScreen : requestFullscreen}>
          <Icomoon
            name={isFullscreen ? "collapse" : "expand"}
            size={32}
          ></Icomoon>
        </Styled.ButtonFullscreen>
        <Styled.ButtonClose onClick={closeModal}>
          <Icomoon name="delete-x" size={32}></Icomoon>
        </Styled.ButtonClose>
        {!isFullscreen && (
          <Styled.Title>
            {dataTransformed[slideIndex]?.title?.toUpperCase()}
          </Styled.Title>
        )}

        <Swiper
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          slidesPerView={1}
          virtual
          pagination={{
            dynamicBullets: true,
          }}
          navigation
          onSlideChange={onSlideChange}
        >
          {dataTransformed.map(item => (
            <SwiperSlide virtualIndex={item.id} key={item.id}>
              <ImageContainer item={item} fullscreen={isFullscreen} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.ContentContainer>
    </Modal>
  )
}

export default React.memo(ModalGallery)
