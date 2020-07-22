import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Trans } from "react-i18next"
import { usePageContext } from "../PageContext"
import ReadMoreReact from "read-more-react"
import i18n from "i18next"

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
        const t = i18n.getFixedT(lang)

        return (
          <>
            <section className="section">
              <br />
              <div className="container">
                <div className="column has-text-centered">
                  <p className="title is-2">
                    <Trans i18nKey="features.title">
                      prefix <span className="underline-secondary">suffix</span>
                    </Trans>
                  </p>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <div className="columns">
                  {features.map((f, index) => (
                    <div key={index} className="column">
                      <div className="card is-fullheight">
                        <div className="card-content">
                          <div className="content">
                            <div className="columns">
                              <div className="column">
                                <FontAwesomeIcon
                                  icon={f.icon}
                                  size="2x"
                                  className="has-text-secondary"
                                />
                              </div>
                            </div>
                            <div className="columns">
                              <div className="column">
                                <h3>{f.title}</h3>
                                <ReadMoreReact
                                  text={f.description.description ?? ""}
                                  min={120}
                                  ideal={180}
                                  max={220}
                                  readMoreText={t("about.readMore")}
                                />
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
