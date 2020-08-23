import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import theme from "../theme"
import variables from "../_variables.scss"
const Lightbox = props => {
  const [showLightbox, setShowLightbox] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    setShowLightbox(!showLightbox)
  }

  return (
    <>
      <figure style={{
		  cursor: "pointer"
	  }} onClick={handleClick}>
        <img alt="" src={props.image.resize.src}></img>
      </figure>
      <div style={{
		  display: "flex",
		  position: "fixed",
		  top: 0,
          left: 0,
          bottom: 0,
          right: 0,
		  justifyContent: "center",
          alignItems: "center",
		  background: "rgba(0, 0, 0, 0.5)",
		  opacity: showLightbox ? "1" : "0",
		  visibility: showLightbox ? "visible" : "hidden",
		  transition: "opacity 0.25s ease-in",
		  zIndex: 9999
		}} onClick={handleClick} visible={showLightbox}>
        <LightboxModalInnerContainer style={{
			maxWidth: "1280px",
			width: "100%",
		}}>
          <Img fluid={props.image.fluid} />
        </LightboxModalInnerContainer>

        <button style={{
			position: "absolute",
			top: 0,
			right: 0,
			margin: "1rem"
		}} className="delete is-large"></button>
      </div>
    </>
  )
}

export default Lightbox

const LightboxModalInnerContainer = styled.div`
  ${() => theme.mixins.from(variables.desktop, "width: 80vw;")}
`