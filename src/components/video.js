import React, { useState, useRef } from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"

const extractId = url => {
  const parts = url.split("/")
  const id = parts[parts.length - 1]
  return id
}

export default function Video(props) {
  const [showVideo, setshowVideo] = useState(false)
  const imageContainerRef = useRef()

  const url = props.url

  const id = extractId(url)

  return !showVideo ? (
    <div>
      <Figure
        onClick={() => {
          setshowVideo(true)
        }}
        class="image"
      >
        <PlayIcon
          icon={faPlayCircle}
          size="5x"
          className="has-text-secondary has-background-light"
        />
        <ImageContainer
          ref={imageContainerRef}
          src={`https://img.youtube.com/vi/${id}/sddefault.jpg`}
        />
      </Figure>
    </div>
  ) : (
    <iframe
      class="has-ratio"
      src={url + "?autoplay=1&showinfo=0&controls=0"}
      width="100%"
      height={imageContainerRef.current.clientHeight}
      allow="autoplay;"
    ></iframe>
  )
}

const ImageContainer = styled.img`
  width: 100%;
`
const PlayIcon = styled(FontAwesomeIcon)`
  position: absolute;
  border-radius: 60px;
  box-shadow: inset 0px 0px 0px 10px;
`
const Figure = styled.figure`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
