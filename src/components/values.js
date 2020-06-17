import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Trans, useTranslation } from "react-i18next"
import { usePageContext } from "../PageContext"

const Values = () => {
  const [currentValue, setCurrentValue] = useState(0)
  const { lang } = usePageContext()
  const { t } = useTranslation()
  const query = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "me-talk.jpg" }) {
        childImageSharp {
          fixed(width: 536, height: 536, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      en: allContentfulValue(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          title
          description {
            description
          }
        }
      }

      es: allContentfulValue(filter: { node_locale: { eq: "es-ES" } }) {
        nodes {
          title
          description {
            description
          }
        }
      }
    }
  `)

  const values = query[lang].nodes

  return (
    <>
      <section className="section">
        <br />
        <div className="container">
          <div className="column has-text-centered">
            <p className="title is-2">
              <Trans i18nKey="values.title">
                prefix <span className="underline-secondary">suffix</span>
              </Trans>
            </p>
          </div>
        </div>
      </section>
      <section className="hero space is-medium is-hidden-touch">
        <div className="hero-body">
          <div className="container">
            <div className="column is-4 is-offset-7 skew-oppose value-box">
              <div className="box box-shadow-lift">
                <div>
                  {values.map(
                    (v, i) =>
                      currentValue === i && <p key={i} className="title">{v.title}</p>
                  )}

                  <hr />
                  {values.map(
                    (v, i) =>
                      currentValue === i && (
                        <p key={i} className="subtitle">{v.description.description}</p>
                      )
                  )}
                </div>

                <hr />
                <div className="buttons is-right">
                  <a 
                    disabled={currentValue === 0}
                    onClick={() => {
                      setCurrentValue(Math.max(0, currentValue - 1))
                    }}
                    className="button is-rounded"
                    style={{ display: "flex" }}
                  >
                    ← {t("values.back")}
                  </a>

                  <a
                    disabled={currentValue === values.length - 1}
                    onClick={() => {
                      setCurrentValue(
                        Math.min(values.length - 1, currentValue + 1)
                      )
                    }}
                    className="button is-rounded"
                    style={{ display: "flex" }}
                  >
                    {t("values.next")} →
                  </a>
                </div>
              </div>
            </div>
            <div className="column is-5 is-offset-3 skew-oppose">
              <br />
              <br />
              <br />
              <Img
                className="has-radius-6"
                fixed={query.image.childImageSharp.fixed}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section is-hidden-desktop space">
        <div className="container">
          <div className="column is-6 is-offset-3 skew-oppose">
            <div className="box box-shadow-lift">
              <div id="reason-1">
                {values.map(
                  (v, i) => currentValue === i && <p key={i} className="title">{v.title}</p>
                )}

                <hr />

                {values.map(
                  (v, i) =>
                    currentValue === i && (
                      <p key={i} className="subtitle">{v.description.description}</p>
                    )
                )}
              </div>

              <hr />
              <div className="buttons is-right">
                <a
                  disabled={currentValue === 0}
                  onClick={() => {
                    setCurrentValue(Math.max(0, currentValue - 1))
                  }}
                  className="button is-rounded"
                  style={{ display: "flex" }}
                >
                  ← {t("values.back")}
                </a>

                <a
                  disabled={currentValue === values.length - 1}
                  onClick={() => {
                    setCurrentValue(
                      Math.min(values.length - 1, currentValue + 1)
                    )
                  }}
                  className="button is-rounded"
                  style={{ display: "flex" }}
                >
                  {t("values.next")} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Values
