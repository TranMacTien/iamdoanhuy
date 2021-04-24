import React from "react"

import * as Styled from "./BlockQuote.styled"

function BlockQuote(props) {
  return (
    <Styled.Container>
      <Styled.QuoteContainer>
        <Styled.QuoteWrapper>
          <Styled.QuoteContent>
            Ý tưởng là thứ mà chúng ta luôn có, nó có thể đến một cách vô tình
            hay là do bạn vắc óc suy nghĩ, nhưng nếu bạn chỉ dừng lại ở việc chỉ
            tưởng tượng mà không đưa nó ra bằng hình ảnh thì thật là uổng phí.
            Vậy nên...
          </Styled.QuoteContent>
        </Styled.QuoteWrapper>
      </Styled.QuoteContainer>
      <Styled.QuoteCta>...HỌC ĐI MẤY CHAAAA</Styled.QuoteCta>
    </Styled.Container>
  )
}

export default BlockQuote
