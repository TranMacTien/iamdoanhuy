import styled from "styled-components"
import { Colors } from "constants"

export const StyledContainer = styled.div`
  position: relative;
  height: 0;
  padding-bottom: calc(100% * 2 / 3);
`

export const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const StyledInfoContainer = styled.div`
  position: absolute;
  border-radius: 8px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 24px;
  left: 32px;
  bottom: 24px;
  right: 32px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  ${StyledContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
`

export const StyledInfoTitle = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${Colors.Primary};
  margin: 0 0 4px 0;
`
export const StyledInfoType = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 14px;
  color: ${Colors.Secondary};
`

export const StyledThumbnail = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
