import React from "react"
import styled from "styled-components"
import Video from "../components/video"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import ReadMoreReact from "read-more-react"
import i18n from "i18next"
import { usePageContext } from "../PageContext"

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

const Item = ({ title, date, description, videoLink, pushUp = true }) => {
  const { lang } = usePageContext()
  const t = i18n.getFixedT(lang)
  return (
    <>
      <p className="title">
        {title}
        <br />
        <span className="subtitle is-small" title="Watched on">
          <FontAwesomeIcon icon={faEye} size="xs"></FontAwesomeIcon>{" "}
          {new Date(date).toLocaleDateString()}
        </span>
      </p>
      <Subtitle fillSpace={pushUp} className="subtitle">
        <ReadMoreReact
          text={description ?? ""}
          min={120}
          ideal={180}
          max={220}
          readMoreText={t("conferences.readMore")}
        />
      </Subtitle>
      {videoLink && <Video url={videoLink}></Video>}
    </>
  )
}

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

const Subtitle = styled.div`
  ${({ fillSpace }) => (fillSpace ? "" : "flex-grow: 1")}
`
