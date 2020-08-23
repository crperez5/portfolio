import React, { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"

const extractId = url => {
  const parts = url.split("/")
  const id = parts[parts.length - 1]
  return id
}

export default function Video(props) {
  const [showVideo, setshowVideo] = useState(false)
  const [showPlayIcon, setShowPlayIcon] = useState(true)
  const imageContainerRef = useRef()

  const url = props.url

  const id = extractId(url)

  return !showVideo ? (
    <div>
      <figure style={{cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"}}
        onClick={() => {
          setshowVideo(true)
        }}
        className="image"
      >
        {showPlayIcon && (
          <div style={{position: "absolute"}}>
			  <FontAwesomeIcon
				style={{borderRadius: "60px", boxShadow: "inset 0px 0px 0px 10px"}}
				icon={faPlayCircle}
				size="5x"
				className="has-text-secondary has-background-light"
			  />
		  </div>
        )}
        <img
		  style={{width: "100%"}}
          onLoad={() => {
            setShowPlayIcon(true)
          }}
          ref={imageContainerRef}
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        />
      </figure>
    </div>
  ) : (
    <iframe
      className="has-ratio"
      src={url + "?autoplay=1&showinfo=0"}
      width="100%"
      height={imageContainerRef.current.clientHeight}
      allow="autoplay;fullscreen"
    ></iframe>
  )
}
