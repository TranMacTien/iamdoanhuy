import React, { useEffect, useRef, useState } from "react"
import { useWindowSize } from "react-use"
import GatsbyImage from "gatsby-image"

import * as Styled from "./ModalGallery.styled"

function ImageContainer({ item, fullscreen }) {
  const { height, width } = useWindowSize()
  const [sizes, setSizes] = useState({
    width: 0,
    height: 0,
    paddingLeft: 0,
  })
  const outerRef = useRef()
  const innerRef = useRef()

  const getOuterCss = property => {
    return window
      .getComputedStyle(outerRef.current, null)
      .getPropertyValue(property)
  }

  useEffect(() => {
    const { top } = innerRef.current.getBoundingClientRect()
    const paddingLeft = getOuterCss("padding-left")
    const paddingBottom = getOuterCss("padding-bottom")
    const containerWidth =
      outerRef.current.clientWidth - parseInt(paddingLeft) * 2
    const containerHeight = height - top * 2 - parseInt(paddingBottom)
    const imageStyles = getImageStyles({
      width: containerWidth,
      height: containerHeight,
      imageRatio: item.fluid.aspectRatio,
    })
    setSizes(imageStyles)
  }, [height, width, fullscreen])

  return (
    <Styled.ImageOuter fullscreen={fullscreen} ref={outerRef}>
      <div ref={innerRef} style={{ ...sizes }}>
        <GatsbyImage
          fluid={item.fluid}
          backgroundColor={item.bgColor}
          alt={item.title}
        />
      </div>
    </Styled.ImageOuter>
  )
}

function getImageStyles({ imageRatio, width, height }) {
  const containerRatio = width / height

  if (imageRatio < containerRatio) {
    const itemWidth = height * imageRatio
    return {
      width: itemWidth,
      height,
      marginLeft: (width - itemWidth) / 2,
    }
  }
  const itemHeight = width / imageRatio
  return {
    width,
    height: itemHeight,
    marginTop: (height - itemHeight) / 2,
  }
}

export default ImageContainer
