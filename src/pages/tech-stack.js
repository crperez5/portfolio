import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DevIcon from "devicon-react-svg"
import variables from "../_variables.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngular,
  faReact,
  faJs,
  faCss3Alt,
  faSass
} from "@fortawesome/free-brands-svg-icons"
import {} from "@fortawesome/free-solid-svg-icons"
import Icon from "../components/icon"
const iconStyle = {
  fill: variables.primary,
  width: "128px",
  height: "128px",
}
const TechStackPage = () => {
  return (
    <Layout>
      <SEO title="Cristian Pérez Matturro - Tech Stack" />

      <section class="section">
        <div class="container is-fullhd-container">
          <div class="columns">
            <div class="column is-one-third">
              <div class="skills-description">
                <h2 class="title is-3">
                  <strong class="underline-secondary">Front-end</strong>
                </h2>
                <div class="content">
                  <p class="has-text-weight-light">
                    As a <strong>graphic designer</strong>, I create icons and
                    logotypes for brands, websites, and my own projects.
                  </p>
                  <p class="has-text-weight-light">
                    I also write brand <strong>styleguides</strong> that include
                    color palettes, typography settings, and print assets.
                  </p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="skills">
                <div class="skills-item">
                  <FontAwesomeIcon icon={faJs} size="2x" style={iconStyle} />
                </div>
                <div class="skills-item">
                  <FontAwesomeIcon
                    icon={faAngular}
                    size="2x"
                    style={iconStyle}
                  />
                </div>
                <div class="skills-item">
                  <FontAwesomeIcon icon={faReact} size="2x" style={iconStyle} />
                </div>
                <div class="skills-item">
                  <Icon
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    size="2x"
                    style={iconStyle}
                  />
                </div>
                <div class="skills-item">
                  <FontAwesomeIcon icon={faSass} size="2x" style={iconStyle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <div class="hr">
      <div class="container">
        <hr/>
      </div>
    </div>
    </Layout>
  )
}

export default TechStackPage
