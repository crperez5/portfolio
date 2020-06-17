import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Lightbox from "../components/lightbox"
import { useTranslation } from "react-i18next"
import i18n from "../i18next"
import { usePageContext } from "../PageContext"
import Video from "../components/video"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const getDateDifference = (start, end) => {
  const startMoment = moment(start)
  const endMoment = end ? moment(end) : moment()

  const duration = moment.duration(endMoment.diff(startMoment))
  const year = duration.get("years")
  const month = duration.get("months")
  const yearString =
    year > 0 ? i18n.t("projects.yearWithCount", { count: year }) : ""
  const monthString =
    month > 0 ? i18n.t("projects.monthWithCount", { count: month }) : ""

  const tempResult = [yearString, monthString]
    .filter(s => s.length > 0)
    .join(", ")

  return tempResult
    ? tempResult
    : i18n.t("projects.monthWithCount", { count: 1 })
}

const ProjectsPage = ({ data }) => {
  const { lang } = usePageContext()
  const { t } = useTranslation()
  const pageDescriptionMetadata =
    data[lang].edges[0].node.childContentfulStaticDescriptionContentRichTextNode
      .json

  const projects = data[`data_${lang}`].nodes

  return (
    <Layout>
      <SEO title={t("projects.title")} />
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-12">
              <div className="columns is-vcentered">
                <div className="column">
                  <div>
                    {documentToReactComponents(pageDescriptionMetadata, {
                      renderNode: {
                        [BLOCKS.PARAGRAPH]: (_, children) => (
                          <p className="subtitle is-4">{children}</p>
                        ),
                        [BLOCKS.HEADING_1]: (_, children) => (
                          <h1 className="title">{children}</h1>
                        ),
                        [BLOCKS.HEADING_2]: (_, children) => (
                          <h2 className="title is-2 is-spaced">{children}</h2>
                        ),
                      },
                    })}
                    <div className="column"></div>
                  </div>
                  <div>
                    <div className="vertical-timeline-tabs">
                      {projects.map((p, i) => {
                        return (
                          <div key={i}>
                            <div
                              className={`vertical-tab ${
                                !p.endDate ? "is-active" : ""
                              }`}
                            >
                              <div className="media">
                                <div className="media-left">
                                  <figure className="image is-96x96">
                                    <img src={p.companyAvatar.resize.src} />
                                  </figure>
                                </div>
                                <div className="media-content">
                                  <h3
                                    data-dates={`${new Date(
                                      p.startDate
                                    ).getFullYear()}-${
                                      p.endDate
                                        ? new Date(p.endDate)
                                            .getFullYear()
                                            .toString()
                                            .slice(-2)
                                        : new Date(p.startDate)
                                            .getFullYear()
                                            .toString()
                                            .slice(-2)
                                    }`}
                                    className="title is-4"
                                  >
                                    {p.companyName}
                                  </h3>
                                  <div className="is-size-5 mt-1 is-hidden-desktop">
                                    <FontAwesomeIcon
                                      icon="map-marker-alt"
                                      className="has-text-secondary"
                                    />{" "}
                                    <span>{p.locations.join(", ")}</span>
                                  </div>
                                  <div className="is-size-5 mt-1 mb-5 is-hidden-mobile is-hidden-tablet-only">
                                    <FontAwesomeIcon
                                      icon="map-marker-alt"
                                      className="has-text-secondary"
                                    />{" "}
                                    <span>{p.locations.join(", ")}</span>
                                  </div>
                                  <h4 className="is-size-5 is-hidden-desktop mb-2">
                                    {new Date(p.startDate).getFullYear()}-
                                    {p.endDate ? (
                                      new Date(p.endDate)
                                        .getFullYear()
                                        .toString()
                                        .slice(-2)
                                    ) : (
                                      <span className="is-italic">
                                        {t("projects.currentDate")}
                                      </span>
                                    )}
                                  </h4>
                                  <div className="field is-grouped is-grouped-multiline is-hidden-mobile">
                                    <div className="control">
                                      <div className="tags has-addons">
                                        <span className="tag is-large">
                                          {t("projects.role", {
                                            count: p.roles.length,
                                          })}
                                        </span>
                                        <span className="tag is-large is-primary">
                                          {p.roles
                                            .map(r => r.name.trim())
                                            .join(", ")}
                                        </span>
                                      </div>
                                    </div>

                                    <div className="control">
                                      <div className="tags has-addons">
                                        <span className="tag is-large">
                                          {t("projects.duration")}
                                        </span>
                                        <span className="tag is-large is-primary">
                                          {getDateDifference(
                                            p.startDate,
                                            p.endDate
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                    {p.skills.map((s, skillIndex) => (
                                      <div key={skillIndex} className="control">
                                        <span className="tag is-large is-primary">
                                          {s.name.trim()}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div className="level is-hidden-tablet">
                                <div className="level-left">
                                  <div className="field is-grouped is-grouped-multiline">
                                    {p.roles.map((r, roleIndex) => (
                                      <div key={roleIndex} className="control">
                                        <div className="tags has-addons">
                                          <span className="tag is-medium">
                                            {t("projects.role")}
                                          </span>
                                          <span className="tag is-medium is-primary">
                                            {r.name}
                                          </span>
                                        </div>
                                      </div>
                                    ))}
                                    <div className="control">
                                      <div className="tags has-addons">
                                        <span className="tag is-medium">
                                          {t("projects.duration")}
                                        </span>
                                        <span className="tag is-medium is-primary">
                                          {getDateDifference(
                                            p.startDate,
                                            p.endDate
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                    {p.skills.map((s, skillIndex) => (
                                      <div key={skillIndex} className="control">
                                        <span className="tag is-medium is-primary">
                                          {s.name.trim()}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              {documentToReactComponents(
                                p.childContentfulProjectDescriptionRichTextNode
                                  .json,
                                {
                                  renderNode: {
                                    [BLOCKS.PARAGRAPH]: (_, children) => (
                                      <p className="subtitle">{children}</p>
                                    ),
                                    [BLOCKS.HEADING_1]: (_, children) => (
                                      <h1 className="title">{children}</h1>
                                    ),
                                    [BLOCKS.HEADING_2]: (_, children) => (
                                      <h2 className="subtitle is-spaced">
                                        {children}
                                      </h2>
                                    ),
                                  },
                                }
                              )}

                              {(p.videos || p.images) && (
                                <div
                                  title="Media"
                                  className="columns is-multiline bd-snippet bd-is-horizontal bd-is-2"
                                >
                                  {p.videos &&
                                    p.videos.map((v, videoIndex) => (
                                      <div
                                        key={videoIndex}
                                        className="column is-half bd-snippet-preview "
                                      >
                                        <Video url={v}></Video>
                                      </div>
                                    ))}

                                  {p.images &&
                                    p.images.map((i, imageIndex) => (
                                      <div
                                        key={imageIndex}
                                        className="column is-half bd-snippet-preview"
                                      >
                                        <Lightbox image={i}></Lightbox>
                                      </div>
                                    ))}
                                </div>
                              )}
                            </div>
                            {projects.length - 1 > i && (
                              <div className="vertical-tab">
                                <div className="is-divider is-hidden-desktop"></div>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section"></section>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  query {
    data_en: allContentfulProject(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: startDate, order: DESC }
    ) {
      nodes {
        companyName
        companyAvatar {
          resize(width: 96) {
            src
          }
        }
        childContentfulProjectDescriptionRichTextNode {
          json
        }
        startDate
        endDate
        locations
        roles {
          name
        }
        skills {
          name
        }
        videos
        images {
          resize(width: 618, height: 464, quality: 100) {
            src
          }
          fluid(quality: 100, maxWidth: 1280) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    data_es: allContentfulProject(
      filter: { node_locale: { eq: "es-ES" } }
      sort: { fields: startDate, order: DESC }
    ) {
      nodes {
        companyName
        companyAvatar {
          resize(width: 96) {
            src
          }
        }
        childContentfulProjectDescriptionRichTextNode {
          json
        }
        startDate
        endDate
        locations
        roles {
          name
        }
        skills {
          name
        }
        videos
        images {
          resize(width: 618, height: 464, quality: 100) {
            src
          }
          fluid(quality: 100, maxWidth: 1280) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    en: allContentfulStaticDescription(
      filter: { type: { eq: "projects" }, node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          childContentfulStaticDescriptionContentRichTextNode {
            json
          }
        }
      }
    }
    es: allContentfulStaticDescription(
      filter: { type: { eq: "projects" }, node_locale: { eq: "es-ES" } }
    ) {
      edges {
        node {
          childContentfulStaticDescriptionContentRichTextNode {
            json
          }
        }
      }
    }
    image: file(relativePath: { eq: "project.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
