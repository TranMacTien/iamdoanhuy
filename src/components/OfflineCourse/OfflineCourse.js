import React from "react"
import { Parallax } from "react-parallax"

import ImageHomeBg3 from "images/bg_khoa_hoc.jpg"
import ImagePhotoshop from "images/photoshop_icon.png"
import IconCheck from "images/check.svg"
import { COURSE } from "./data"
import * as Styled from "./OfflineCourse.styled"

function OfflineCourse(props) {
  return (
    <div>
      <Parallax bgImage={ImageHomeBg3} strength={600}>
        <Styled.Container>
          <section>
            <Styled.Title>Khoá học</Styled.Title>
            <Styled.SubTitle>Thiết Kế Poster</Styled.SubTitle>
          </section>
        </Styled.Container>
      </Parallax>

      <Styled.CoursesContainer>
        <Styled.CourseList>
          {COURSE.map((course, index) => (
            <Styled.CourseItem
              key={index}
              background={course.background}
              overlay={course.overlay}
            >
              <div>
                <Styled.CourseTitle>{course.title}</Styled.CourseTitle>
                <Styled.CourseInfoList>
                  {course.info.map((item, index) => (
                    <Styled.CourseInfoItem as="li" key={index}>
                      <img
                        src={IconCheck}
                        alt="check"
                        width={16}
                        style={{ marginRight: 8 }}
                      />
                      {item}
                    </Styled.CourseInfoItem>
                  ))}
                </Styled.CourseInfoList>
                <Styled.CourseText weight={600}>
                  Hình thức học:
                </Styled.CourseText>
                <Styled.CourseInfoList marginBottom={36}>
                  {course.form.map((item, index) => (
                    <Styled.CourseText as="li" key={index}>
                      {item}
                    </Styled.CourseText>
                  ))}
                </Styled.CourseInfoList>
              </div>
              <div>
                {course.pricing && (
                  <Styled.Pricing>{course.pricing}đ</Styled.Pricing>
                )}
                {index === 2 ? (
                  <Styled.CTA disabled>TẠM NGỪNG TUYỂN SINH</Styled.CTA>
                ) : (
                  <Styled.CTA
                    as="a"
                    href="https://www.messenger.com/t/iamdoanhuyy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ĐĂNG KÍ NGAY
                  </Styled.CTA>
                )}
              </div>
            </Styled.CourseItem>
          ))}
        </Styled.CourseList>
      </Styled.CoursesContainer>

      <Styled.Overview>
        <Styled.OverviewTitle>TỔNG QUAN KHOÁ HỌC</Styled.OverviewTitle>
        <Styled.OverviewMain>
          <Styled.OverviewImage src={ImagePhotoshop} alt="Photoshop" />

          <Styled.OverviewInfoList>
            <Styled.OverviewInfoItem>
              <span>
                <b>Phần mềm:</b>
              </span>{" "}
              <span>ADOBE PHOTOSHOP</span>
            </Styled.OverviewInfoItem>
            <Styled.OverviewInfoItem>
              <span>
                <b>Số buổi:</b>
              </span>
              <span>8 buổi</span>
            </Styled.OverviewInfoItem>
            <Styled.OverviewInfoItem>
              <span>
                <b>Thời lượng mỗi buổi:</b>
              </span>{" "}
              <span>2 giờ</span>
            </Styled.OverviewInfoItem>
            <Styled.OverviewInfoItem>
              <span>
                <b>Trình độ:</b>
              </span>{" "}
              <span>Người mới</span>
            </Styled.OverviewInfoItem>
          </Styled.OverviewInfoList>
        </Styled.OverviewMain>
      </Styled.Overview>

      <Styled.LearningPath>
        <Styled.LearningPathTitle>LỘ TRÌNH KHOÁ HỌC</Styled.LearningPathTitle>
        <Styled.LearningPathContainer>
          <Styled.LearningPathList>
            <Styled.LearningPathItem>
              <Styled.LearningPathItemTitle>
                Nắm vững kiến thức
              </Styled.LearningPathItemTitle>
              <Styled.LearningPathContent>
                Bước đầu tiên chúng ta sẽ tìm hiểu và học cách dùng của các công
                cụ trong Photoshop. Nhìn vào mớ công cụ khi mở giao diện của
                phần mềm PS, nhiều người sẽ thốt lên "Ôi sao nhiều thế". Nhưng
                bạn đừng lo, nó không hề khó khi mà mỗi công cụ sẽ được ứng dụng
                thực tế bằng việc thực hành, từ đó bạn sẽ hiểu nhanh và nhớ rất
                sâu. Bước đầu này là tiền đề giúp bạn rất nhiều về sau, việc của
                bạn là sáng tạo, còn sử dụng công cụ chỉ là phản xạ theo thói
                quen. Tiết kiệm rất nhiều thời gian đấy.
              </Styled.LearningPathContent>
            </Styled.LearningPathItem>
            <Styled.LearningPathItem>
              <Styled.LearningPathItemTitle>
                Tư duy thực hành
              </Styled.LearningPathItemTitle>
              <Styled.LearningPathContent>
                Việc tiếp theo khi nắm chắc công cụ là chúng ta sẽ tư duy vận
                dụng chúng một cách linh hoạt trong nhiều trường hợp khác nhau.
                Trong giai đoạn này, thực hành ứng dụng giúp bạn vừa vững công
                cụ vừa tư duy tạo ra những sản phẩm thông qua các dạng bài tập.
              </Styled.LearningPathContent>
            </Styled.LearningPathItem>
            <Styled.LearningPathItem>
              <Styled.LearningPathItemTitle>
                Ứng dụng tạo ra sản phẩm
              </Styled.LearningPathItemTitle>
              <Styled.LearningPathContent>
                Nắm chắc công cụ, hiểu rõ sự ứng dụng trong những trường hợp
                khác nhau, giai đoạn này chúng ta sẽ tạo ra những hình ảnh theo
                sự sáng tạo của mình, cụ thể hoá là 1 tấm Poster vận dụng hết
                mọi thứ đã học. Và từ chính tấm Poster này, bạn có thể chuyển
                hoá nó thành nhiều thứ khác để ứng dụng trong thực tiễn.
              </Styled.LearningPathContent>
            </Styled.LearningPathItem>
          </Styled.LearningPathList>
        </Styled.LearningPathContainer>
      </Styled.LearningPath>
    </div>
  )
}

export default OfflineCourse
