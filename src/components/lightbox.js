import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Figure = styled.figure`
  cursor: pointer;
`
const LightboxModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.visible ? "1" : "0")};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  transition: opacity 0.25s ease-in;
  z-index: 9999;
`
const LightboxModalContent = styled.div`
  margin: 15px;
  max-width: ${props => props.maxWidth};
  width: 100%;
`
const LightboxModalContentCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
`
const Lightbox = props => {

  const [showLightbox, setShowLightbox] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    setShowLightbox(!showLightbox)
  }

  return (
    <>
      <Figure onClick={handleClick}>
        <Img fluid={{ ...props.fluid, aspectRatio: props.aspectRatio }} />
      </Figure>
      <LightboxModal onClick={handleClick} visible={showLightbox}>
        <LightboxModalContent maxWidth={props.maxWidth}>
          <Img fluid={props.fluid} />
          <LightboxModalContentCloseButton className="delete is-large">
            {" "}
          </LightboxModalContentCloseButton>
        </LightboxModalContent>
      </LightboxModal>
    </>
  )
}

Lightbox.propTypes = {
  fluid: PropTypes.object.isRequired,
  maxWidth: PropTypes.string.isRequired,
  aspectRatio: PropTypes.number.isRequired,
}

export default Lightbox
