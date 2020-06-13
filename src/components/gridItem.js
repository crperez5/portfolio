import React from "react"
import styled from "styled-components"
import Video from "../components/video"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"

const GridItem = ({ item, pushUp }) => {
  const mappedItem = {
    ...item,
    pushUp,
    description:
      typeof item.description !== "object"
        ? item.description
        : item.description
        ? item.description.description
        : "",
  }
  return <WrappedGridItem {...mappedItem}></WrappedGridItem>
}

export default GridItem

const Item = ({ title, date, description, videoLink, pushUp }) => (
  <>
    <p class="title">
      {title}
      <br />
      <span class="subtitle is-small" title="Watched on">
        <FontAwesomeIcon icon={faEye} size="xs"></FontAwesomeIcon>{" "}
        {new Date(date).toLocaleDateString()}
      </span>
    </p>
    <Subtitle fillSpace={pushUp} className="subtitle">
      {description}
    </Subtitle>
    {videoLink && <Video url={videoLink}></Video>}
  </>
)

const wrapGridItem = Item => ({ ...props }) => (
  <GridItemWrapper>
    <Item {...props}></Item>
  </GridItemWrapper>
)

const WrappedGridItem = wrapGridItem(Item)

const GridItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Subtitle = styled.p`
  ${({ fillSpace }) => (fillSpace ? "" : "flex-grow: 1")}
`
