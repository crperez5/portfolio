import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const LightboxModal = styled.div`
  position: absolute;
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
`
const LightboxModalContent = styled.div`
  margin: 15px;
  max-width: ${props => props.maxWidth};
  width: 100%;
`

const Lightbox = props => {
  const aspectRatio = props.aspectRatio

  const fluid = { ...props.fluid, aspectRatio }

  const [showLightbox, setShowLightbox] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    setShowLightbox(!showLightbox)
  }

  return (
    <>
      <figure onClick={handleClick} class="image is-16by9">
        <Img fluid={fluid} />
      </figure>
      <LightboxModal visible={showLightbox}>
        <LightboxModalContent maxWidth={props.maxWidth}>
          <Img fluid={props.fluid} />
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
