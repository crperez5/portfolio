import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        mobileImage: file(relativePath: { eq: "cristianperezmatturro.png" }) {
          childImageSharp {
            fixed(
              duotone: { highlight: "#ec8b5e", shadow: "#141a46" }
              width: 48
              height: 48
            ) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        desktopImage: file(relativePath: { eq: "cristianperezmatturro.png" }) {
          childImageSharp {
            fixed(
              duotone: { highlight: "#ec8b5e", shadow: "#141a46" }
              width: 128
              height: 128
            ) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      const [burgerActive, setBurgerActive] = useState(false)
      const toggleBurgerActive = () => setBurgerActive(!burgerActive)

      const sources = [
        data.mobileImage.childImageSharp.fixed,
        {
          ...data.desktopImage.childImageSharp.fixed,
          media: `(min-width: 1024px)`,
        },
      ]

      return (
        <header class="section primary-background">
          <div class="container">
            <nav
              class="navbar is-size-4 is-size-3-fullhd has-no-background"
              role="navigation"
              aria-label="main navigation"
            >
              <div class="navbar-brand">
                <a
                  class="navbar-item has-no-background"
                  href="https://cristianperezmatturro.com/"
                >
                  <Img
                    className="has-radius-70"
                    fixed={sources}
                    alt="Cristian Perez Matturro"
                  />
                </a>
                <a
                  class="navbar-item has-no-background"
                  href="https://cristianperezmatturro.com/"
                >
                  <strong class="title is-5 is-hidden-desktop">
                    Cristian Perez Matturro
                  </strong>
                </a>
                <a
                  role="button"
                  className={
                    "navbar-burger burger " + (burgerActive ? "is-active" : "")
                  }
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navigation"
                  onClick={toggleBurgerActive}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>

              <div
                id="navigation"
                className={"navbar-menu " + (burgerActive ? "is-active" : "")}
              >
                <div class="navbar-start is-uppercase">
                  <Link className="has-no-background navbar-item" to="/">
                    <span class="navbar-item-name">About me</span>
                  </Link>

                  <Link
                    className="has-no-background navbar-item"
                    to="/tech-stack/"
                  >
                    <span class="navbar-item-name">Tech Stack</span>
                  </Link>

                  <Link
                    className="has-no-background navbar-item"
                    to="/projects/"
                  >
                    <span class="navbar-item-name">Projects</span>
                  </Link>

                  <Link
                    className="has-no-background navbar-item"
                    to="/conferences/"
                  >
                    <span class="navbar-item-name">Conferences</span>
                  </Link>
                  <Link
                    className="has-no-background navbar-item"
                    to="/contact/"
                  >
                    <span class="navbar-item-name">Contact</span>
                  </Link>
                </div>

                <div class="navbar-end">
                  <div class="navbar-item">
                    <a
                      href="https://www.linkedin.com/in/cristianperezmatturro/"
                      class="navbar-item is-size-5 "
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a
                      href="https://github.com/crperez5"
                      class="navbar-item is-size-5 "
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      )
    }}
  />
)
