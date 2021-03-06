import React, { useState } from "react"
import Link from "./link"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from "react-i18next"
import styles from "./header.module.scss"

export default () => {
  const { t } = useTranslation()
  return (
    <StaticQuery
      query={graphql`
        query {
          site: site {
            siteMetadata {
              siteUrl
              authorName
              relatedUrls {
                linkedin
                github
              }
            }
          }
          logo: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const [burgerActive, setBurgerActive] = useState(false)
        const toggleBurgerActive = () => setBurgerActive(!burgerActive)

        return (
          <header className="section primary-background">
            <div className="container">
              <nav
                className="navbar is-size-4 is-size-5-desktop is-size-4-widescreen is-size-4-fullhd has-no-background"
                role="navigation"
                aria-label="main navigation"
              >
                <div className="navbar-brand">
                  <a
                    className="navbar-item has-no-background"
                    href={data.site.siteMetadata.siteUrl}
                  >
                    <div className={styles.logoContainer}>
                      <Img
                        className="has-radius-275"
                        fluid={data.logo.childImageSharp.fluid}
                      />
                    </div>
                  </a>
                  <a
                    className={`${styles.grow} navbar-item has-no-background is-hidden-desktop`}
                    href={data.site.siteMetadata.siteUrl}
                  >
                    <strong className="title is-5 ">
                      {data.site.siteMetadata.authorName}
                    </strong>
                  </a>
                  <a
                    role="button"
                    className={
                      "navbar-burger burger " +
                      (burgerActive ? "is-active" : "")
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
                  <div className="navbar-start is-uppercase">
                    <Link
                      className="has-no-background navbar-item"
                      activeClassName="is-active"
                      to="/"
                    >
                      <span className="navbar-item-name">
                        {t("header.home")}
                      </span>
                    </Link>

                    <Link
                      className="has-no-background navbar-item"
                      activeClassName="is-active"
                      to="/about/"
                    >
                      <span className="navbar-item-name">
                        {t("header.about")}
                      </span>
                    </Link>

                    <Link
                      className="has-no-background navbar-item"
                      activeClassName="is-active"
                      to="/tech-stack/"
                    >
                      <span className="navbar-item-name">
                        {t("header.techStack")}
                      </span>
                    </Link>

                    <Link
                      className="has-no-background navbar-item"
                      activeClassName="is-active"
                      to="/projects/"
                    >
                      <span className="navbar-item-name">
                        {t("header.projects")}
                      </span>
                    </Link>

                    <Link
                      className="has-no-background navbar-item"
                      activeClassName="is-active"
                      to="/conferences/"
                    >
                      <span className="navbar-item-name">
                        {t("header.conferences")}
                      </span>
                    </Link>
                    <Link
                      className="has-no-background navbar-item"
                      activeClassName="is-active"
                      to="/contact/"
                    >
                      <span className="navbar-item-name">
                        {t("header.contact")}
                      </span>
                    </Link>
                  </div>

                  <div className="navbar-end">
                    <div className="navbar-item">
                      <a
                        href={data.site.siteMetadata.relatedUrls.linkedin}
                        className="navbar-item is-size-5 "
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>

                      <a
                        href={data.site.siteMetadata.relatedUrls.github}
                        className="navbar-item is-size-5 "
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
}
