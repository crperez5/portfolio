import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Lightbox = props => {
  const [showLightbox, setShowLightbox] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    setShowLightbox(!showLightbox)
  }

  return (
    <>
      <Figure onClick={handleClick}>
        <img src={props.image.resize.src}></img>
      </Figure>
      <LightboxModal onClick={handleClick} visible={showLightbox}>
        <div style={{ maxWidth: 1280, width: "80vw" }}>
          <Img fluid={props.image.fluid} />
        </div>

        <LightboxModalContentCloseButton className="delete is-large"></LightboxModalContentCloseButton>
      </LightboxModal>
    </>
  )
}

export default Lightbox

const Figure = styled.figure`
  cursor: pointer;
`
const LightboxModal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.visible ? "1" : "0")};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  transition: opacity 0.25s ease-in;
  z-index: 9999;
`
const LightboxModalContentCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
`
