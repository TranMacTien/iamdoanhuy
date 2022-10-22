import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { useWindowSize } from "react-use"
import GatsbyImage from "gatsby-image"
import { darken } from "polished"
import { navigate } from "gatsby"

import ImagePhotoshop from "images/photoshop_icon.png"
import ImageHomeBg from "images/home_bg.jpeg"
import ImageHomeBg2 from "images/home_bg_2.jpeg"
import ImageSpeedArt from "images/speed_art_2.jpeg"
import ImageYoutube from "images/youtube_icon.png"
import ImageTiktok from "images/tiktok_icon.png"
import BlockQuote from "components/BlockQuote"
import { TIKTOK_CHANNEL, YOUTUBE_CHANNEL } from "constants/urls"

import Intro from "./components/Intro"
import HomeBlockSecondary from "./components/HomeBlockSecondary"
import * as Styled from "./PageIndex.styled"

const MAX_SLIDE_WIDTH = 300

function PageIndex(props) {
  const { data } = props
  const { width } = useWindowSize()
  const slidesPerView = Math.floor(width / MAX_SLIDE_WIDTH)
  return (
    <div>
      <Intro />
      <HomeBlockSecondary
        background={ImageHomeBg}
        image={ImagePhotoshop}
        title={
          <>
            Khoá học <br />
            thiết kế POSTER
          </>
        }
        desc={
          <>
            <p>
              POSTER là một trong những ấn phẩm truyền thông phổ biến nhất. Từ
              phim ảnh, event, quảng bá sản phẩm,... POSTER đều được sử dụng
              linh hoạt dù là online hay offline. Photoshop là một trong những
              phần mềm giúp bạn có thể tiếp cận và tạo ra được những sản phẩm
              poster từ cơ bản đến chuyên nghiệp một cách nhanh nhất.
            </p>
            <p>Dù bạn là người mới cũng không sao, hãy để Huy giúp bạn nhé !</p>
          </>
        }
        textLink="XEM CHI TIẾT"
        to="/khoa-hoc-online"
      />
      <Styled.SliderContainer>
        <Swiper
          loop
          spaceBetween={20}
          slidesPerView={slidesPerView}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {data.map(({ fluid, colors, title }, index) => (
            <SwiperSlide key={index}>
              <Styled.SliderImageWrapper onClick={() => navigate("/artwork")}>
                <GatsbyImage
                  fluid={fluid}
                  backgroundColor={darken(
                    0.18,
                    colors[3]?.hex || colors[0]?.hex
                  )}
                  alt={title}
                  style={{ cursor: "pointer" }}
                />
              </Styled.SliderImageWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.SliderContainer>
      <HomeBlockSecondary
        background={ImageSpeedArt}
        image={ImageYoutube}
        title={
          <>
            TỚ CÓ MỘT
            <br />
            KÊNH YOUTUBE
          </>
        }
        desc={
          <>
            <p>
              Ở kênh youtube này, tớ sẽ đăng tải những nội dung xoay quanh về
              thiết kế, designer và đặc biệt là design Poster.
            </p>
            <p>
              Mong muốn lớn nhất của Huy là tạo ra những nội dung video chất
              lượng để phục vụ người xem. Chính vì thế mình luôn trau dồi kiến
              thức, luyện tập thiết kế mỗi ngày.
            </p>
            <p>Cùng đi đến kênh tớ nhé.</p>
          </>
        }
        imageWidth={600}
        textLink="XEM VIDEO"
        type="secondary"
        url={YOUTUBE_CHANNEL}
      />
      <div style={{ padding: "20px 0" }}>
        <HomeBlockSecondary
          background={ImageHomeBg2}
          image={ImageTiktok}
          title={
            <>
              TỚ CÓ MỘT
              <br />
              KÊNH TIKTOK
            </>
          }
          desc={
            <>
              <p>
                Nhằm truyền cảm hứng cho các anh em yêu thích thiết kế, vào ngày
                1/1/2021 tớ đã lập ra một kênh TikTok mang tên: <b><em>HUY POSTER</em></b>. Với
                Slogan “ Yêu Đủ Thứ - Thích Design", tớ muốn cho anh em thấy
                thiết kế Poster được áp dụng rộng rãi trên mọi ngành nghề, mọi
                lĩnh vực trong cuộc sống này như thế nào, anh em bấm vào xem nhá.
              </p>
            </>
          }
          textLink="XEM LIỀN"
          url={TIKTOK_CHANNEL}
        />
      </div>
      <BlockQuote />
    </div>
  )
}

export default PageIndex
