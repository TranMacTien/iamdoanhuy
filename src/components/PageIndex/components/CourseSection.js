import React from "react"

import { SectionTitle } from "components/Common.styled"
import Banner from "images/banner.png"

import {
  StyledCourseSection,
  StyledCourseContainer,
  StyledCourseWrapper,
  StyledCourseImage,
  StyledCourseTitle,
  StyledCourseLink,
} from "../PageIndex.styled"

function CourseSection(props) {
  return (
    <StyledCourseSection>
      <SectionTitle type="primary">khoá học</SectionTitle>
      <StyledCourseContainer>
        <StyledCourseWrapper>
          <StyledCourseImage
            src={Banner}
            alt="Khóa học Offline “ PHOTOSHOP THỰC CHIẾN “"
          />
        </StyledCourseWrapper>
        <StyledCourseTitle>
          Khóa học Offline <strong>“ PHOTOSHOP THỰC CHIẾN “</strong>
        </StyledCourseTitle>
        <div style={{ textAlign: "right" }}>
          <StyledCourseLink href="">Xem ngay &gt;</StyledCourseLink>
        </div>
      </StyledCourseContainer>
    </StyledCourseSection>
  )
}

export default CourseSection
