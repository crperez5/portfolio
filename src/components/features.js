import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Trans } from "react-i18next"
import { usePageContext } from "../PageContext"

const Features = () => {
  const { lang } = usePageContext()

  return (
    <StaticQuery
      query={graphql`
        {
          en: allContentfulFeature(
            sort: { fields: [createdAt], order: ASC }
            filter: { node_locale: { eq: "en-US" } }
          ) {
            nodes {
              title
              icon
              description {
                description
              }
            }
          }
          es: allContentfulFeature(
            sort: { fields: [createdAt], order: ASC }
            filter: { node_locale: { eq: "es-ES" } }
          ) {
            nodes {
              title
              icon
              description {
                description
              }
            }
          }
        }
      `}
      render={data => {
        const features = data[lang].nodes

        return (
          <>
            <section class="section">
              <br />
              <div class="container">
                <div class="column has-text-centered">
                  <p class="title is-2">
                    <Trans i18nKey="features.title">
                      prefix <span class="underline-secondary">suffix</span>
                    </Trans>
                  </p>
                </div>
              </div>
            </section>
            <section class="section">
              <div class="container">
                <div class="columns">
                  {features.map(f => (
                    <div class="column">
                      <div class="card is-fullheight">
                        <div class="card-content">
                          <div class="content">
                            <div class="columns">
                              <div class="column">
                                <FontAwesomeIcon
                                  icon={f.icon}
                                  size="2x"
                                  className="has-text-secondary"
                                />
                              </div>
                            </div>
                            <div class="columns">
                              <div class="column">
                                <h3>{f.title}</h3>
                                {f.description.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )
      }}
    ></StaticQuery>
  )
}

export default Features
