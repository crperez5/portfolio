import React from "react"
import styled from "styled-components"
import variables from "../_variables.scss"
import theme from "../theme"
import Video from "../components/video"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"

const GridItem = ({ item, forcePushUp }) => {
  const mappedItem = {
    ...item,
    description:
      typeof item.description !== "object"
        ? item.description
        : item.description.description,
  }
  return (
    <WrappedGridItem
      {...mappedItem}
      forcePushUp={forcePushUp}
    ></WrappedGridItem>
  )
}

export default GridItem

const wrapGridItem = Item => ({ ...props }) => {
  return props.forcePushUp ? (
    <StyledGridItemWrapper theme={theme}>
      <Item {...props}></Item>
    </StyledGridItemWrapper>
  ) : (
    <Item {...props}></Item>
  )
}

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

const WrappedGridItem = wrapGridItem(Item)

const StyledGridItemWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.from(
      variables.tablet,
      `
  position: relative;
  height: 100%;`
    )}
`

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
