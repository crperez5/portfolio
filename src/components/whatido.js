import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSitemap,
  faCode,
  faServer,
  faTerminal,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"

const WhatIDo = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "cristian-talk.jpg" }) {
        childImageSharp {
          fixed(width: 536, height: 536, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <section class="section">
        <br />
        <div class="container">
          <div class="column has-text-centered">
            <p class="title is-2">
              What I <span class="underline-secondary">Do</span>
            </p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="card is-fullheight">
                <div class="card-content">
                  <div class="content">
                    <div class="columns">
                      <div class="column">
                        <FontAwesomeIcon
                          icon={faSitemap}
                          size="2x"
                          className="has-text-secondary"
                        />
                      </div>
                    </div>

                    <div class="columns">
                      <div class="column">
                        <h3>Architecture</h3> Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Phasellus nec iaculis
                        mauris. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Phasellus nec iaculis mauris.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card is-fullheight">
                <div class="card-content">
                  <div class="content">
                    <div class="columns">
                      <div class="column">
                        <FontAwesomeIcon
                          icon={faCode}
                          size="2x"
                          className="has-text-secondary"
                        />
                      </div>
                    </div>

                    <div class="columns">
                      <div class="column">
                        <h3>Web and Mobile apps development</h3> Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Phasellus
                        nec iaculis mauris. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Phasellus nec iaculis
                        mauris.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card is-fullheight">
                <div class="card-content">
                  <div class="content">
                    <div class="columns">
                      <div class="column">
                        <FontAwesomeIcon
                          icon={faServer}
                          size="2x"
                          className="has-text-secondary"
                        />
                      </div>
                    </div>

                    <div class="columns">
                      <div class="column">
                        <h3>Backend services development</h3> Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Phasellus nec
                        iaculis mauris. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Phasellus nec iaculis mauris.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card is-fullheight">
                <div class="card-content">
                  <div class="content">
                    <div class="columns">
                      <div class="column">
                        <FontAwesomeIcon
                          icon={faTerminal}
                          size="2x"
                          className="has-text-secondary"
                        />
                      </div>
                    </div>

                    <div class="columns">
                      <div class="column">
                        <h3>DevOps</h3> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Phasellus nec iaculis mauris. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card is-fullheight">
                <div class="card-content">
                  <div class="content">
                    <div class="columns">
                      <div class="column">
                        <FontAwesomeIcon
                          icon={faUsers}
                          size="2x"
                          className="has-text-secondary"
                        />
                      </div>
                    </div>

                    <div class="columns">
                      <div class="column">
                        <h3>Team leadership</h3> Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Phasellus nec iaculis
                        mauris. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Phasellus nec iaculis mauris.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhatIDo
