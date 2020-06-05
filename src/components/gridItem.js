import React from "react"
import styled from "styled-components"
import variables from "../_variables.scss"
import theme from "../theme"

const GridItem = ({ item, forcePushUp }) => {
  return (
    <WrappedGridItem item={item} forcePushUp={forcePushUp}></WrappedGridItem>
  )
}

export default GridItem

const WrappedGridItem = wrapGridItem(Item)

const wrapGridItem = Item => ({ children, ...props }) =>
  props.forcePushUp ? (
    <StyledGridItemWrapper theme={theme}>
      <Item {...props}>{children}</Item>
    </StyledGridItemWrapper>
  ) : (
    <Item {...props}>{children}</Item>
  )

const StyledGridItemWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.from(
      variables.tablet,
      `
  position: relative;
  height: 100%;`
    )}
`

const Item = ({ title, date, description, videoLink, forcePushUp }) => (
  <>
    <p class="title">
      {title} <br />
      <span class="subtitle is-small" title="Watched on">
        {" "}
        <FontAwesomeIcon icon={faEye} size="xs"></FontAwesomeIcon>{" "}
        {new Date(date).toLocaleDateString()}
      </span>
    </p>
    <p class="subtitle">{description}</p>
    {videoLink && (
      <WrappedVideo url={videoLink} forcePushUp={forcePushUp}></WrappedVideo>
    )}
  </>
)

const wrapVideo = Video => ({ children, ...props }) =>
  props.forcePushUp ? (
    <StyledVideoWrapper theme={theme}>
      <Video {...props}>{children}</Video>
    </StyledVideoWrapper>
  ) : (
    <Video {...props}>{children}</Video>
  )

const WrappedVideo = wrapVideo(Video)

const StyledVideoWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.from(
      variables.tablet,
      `
position: absolute;
    bottom: 0;`
    )}
`
