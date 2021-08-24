import React from "react"

import * as Styled from "./VideoIntro.styled"

function VideoIntro(props) {
  return (
    <Styled.Section>
      <Styled.Container>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YuowUq-fdCg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Styled.Container>
    </Styled.Section>
  )
}

export default VideoIntro
