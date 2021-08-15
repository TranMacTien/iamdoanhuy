import styled from "styled-components"

export const Container = styled.section`
  padding: 64px 0;
`

export const H3 = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 125.68%;
  text-align: center;
  color: #ffffff;
  margin: 0 0 12px 0;
`

export const H2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 125.68%;
  text-align: center;
  color: #ffffff;
  margin: 0 0 12px 0;
`

export const Price = styled.span`
  font-style: normal;
  font-size: 18px;
  line-height: 125.68%;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  del {
    font-weight: 300;
    opacity: 0.6;
    font-size: 80%;
    margin-right: 16px;
    display: inline-block;
  }
  strong {
    font-weight: 600;
  }
`

export const PhotoshopBox = styled.div`
  width: 80%;
  margin: 64px auto 0;
  img {
    width: 100%;
  }
`

export const PhotoshopBoxShadow = styled.div`
  transform: scale(1.2);
  margin: 24px auto 0;
  img {
    width: 100%;
  }
`
