import React from "react"
import { Parallax } from "react-parallax"

import ImageBackground from "images/home_bg_3.jpeg"

import * as Styled from "./BlockQuote.styled"

function BlockQuote(props) {
  return (
    <Parallax bgImage={ImageBackground} strength={600}>
      <Styled.Container>
        <Styled.QuoteContainer>
          <Styled.QuoteWrapper>
            <Styled.QuoteContent>
              Ý tưởng là thứ mà chúng ta luôn có, nó có thể đến một cách vô tình
              hay là do bạn vắt óc suy nghĩ, nhưng nếu bạn chỉ dừng lại ở việc
              chỉ tưởng tượng mà không đưa nó ra bằng hình ảnh thì thật là uổng
              phí. Vậy nên...
            </Styled.QuoteContent>
          </Styled.QuoteWrapper>
        </Styled.QuoteContainer>
        <Styled.QuoteCta>...HỌC ĐI MẤY CHAAAA</Styled.QuoteCta>
      </Styled.Container>
    </Parallax>
  )
}

export default BlockQuote
