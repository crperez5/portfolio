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
      <section class="section">
        <br />
        <div class="container">
          <div class="column has-text-centered">
            <p class="title is-2">
              <Trans i18nKey="values.title">
                prefix <span class="underline-secondary">suffix</span>
              </Trans>
            </p>
          </div>
        </div>
      </section>
      <section class="hero space is-medium is-hidden-touch">
        <div class="hero-body">
          <div class="container">
            <div class="column is-4 is-offset-7 skew-oppose value-box">
              <div class="box box-shadow-lift">
                <div>
                  {values.map(
                    (v, i) =>
                      currentValue === i && <p class="title">{v.title}</p>
                  )}

                  <hr />
                  {values.map(
                    (v, i) =>
                      currentValue === i && (
                        <p class="subtitle">{v.description.description}</p>
                      )
                  )}
                </div>

                <hr />
                <div class="buttons is-right">
                  <a
                    disabled={currentValue === 0}
                    onClick={() => {
                      setCurrentValue(Math.max(0, currentValue - 1))
                    }}
                    class="button is-rounded"
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
                    class="button is-rounded"
                    style={{ display: "flex" }}
                  >
                    {t("values.next")} →
                  </a>
                </div>
              </div>
            </div>
            <div class="column is-5 is-offset-3 skew-oppose">
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
      <section class="section is-hidden-desktop space">
        <div class="container">
          <div class="column is-6 is-offset-3 skew-oppose">
            <div class="box box-shadow-lift">
              <div id="reason-1">
                {values.map(
                  (v, i) => currentValue === i && <p class="title">{v.title}</p>
                )}

                <hr />

                {values.map(
                  (v, i) =>
                    currentValue === i && (
                      <p class="subtitle">{v.description.description}</p>
                    )
                )}
              </div>

              <hr />
              <div class="buttons is-right">
                <a
                  disabled={currentValue === 0}
                  onClick={() => {
                    setCurrentValue(Math.max(0, currentValue - 1))
                  }}
                  class="button is-rounded"
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
                  class="button is-rounded"
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
