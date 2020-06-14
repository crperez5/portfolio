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
      <section class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-12">
              <div class="columns is-vcentered">
                <div class="column">
                  <div>
                    {documentToReactComponents(pageDescriptionMetadata, {
                      renderNode: {
                        [BLOCKS.PARAGRAPH]: (_, children) => (
                          <p class="subtitle is-4">{children}</p>
                        ),
                        [BLOCKS.HEADING_1]: (_, children) => (
                          <h1 class="title">{children}</h1>
                        ),
                        [BLOCKS.HEADING_2]: (_, children) => (
                          <h2 class="title is-2 is-spaced">{children}</h2>
                        ),
                      },
                    })}
                    <div class="column"></div>
                  </div>
                  <div>
                    <div class="vertical-timeline-tabs">
                      {projects.map((p, i) => {
                        return (
                          <>
                            <div
                              class={`vertical-tab ${
                                !p.endDate ? "is-active" : ""
                              }`}
                            >
                              <div class="media">
                                <div class="media-left">
                                  <figure class="image is-96x96">
                                    <img src={p.companyAvatar.resize.src} />
                                  </figure>
                                </div>
                                <div class="media-content">
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
                                    class="title is-4"
                                  >
                                    {p.companyName}
                                  </h3>
                                  <h4 class="subtitle is-hidden-tablet">
                                    {new Date(p.startDate).getFullYear()}-
                                    {p.endDate
                                      ? new Date(p.endDate)
                                          .getFullYear()
                                          .toString()
                                          .slice(-2)
                                      : t("projects.currentDate")}
                                  </h4>
                                  <div class="field is-grouped is-grouped-multiline is-hidden-mobile">
                                    <div class="control">
                                      <div class="tags has-addons">
                                        <span class="tag is-large">
                                          {t("projects.role", {
                                            count: p.roles.length,
                                          })}
                                        </span>
                                        <span class="tag is-large is-primary">
                                          {p.roles
                                            .map(r => r.name.trim())
                                            .join(", ")}
                                        </span>
                                      </div>
                                    </div>

                                    <div class="control">
                                      <div class="tags has-addons">
                                        <span class="tag is-large">
                                          {t("projects.duration")}
                                        </span>
                                        <span class="tag is-large is-primary">
                                          {getDateDifference(
                                            p.startDate,
                                            p.endDate
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                    {p.skills.map(s => (
                                      <div class="control">
                                        <span class="tag is-large is-primary">
                                          {s.name.trim()}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div class="level is-hidden-tablet">
                                <div class="level-left">
                                  <div class="field is-grouped is-grouped-multiline">
                                    {p.roles.map(r => (
                                      <p class="control">
                                        <div class="tags has-addons">
                                          <span class="tag is-medium">
                                            {t("projects.role")}
                                          </span>
                                          <span class="tag is-medium is-primary">
                                            {r.name}
                                          </span>
                                        </div>
                                      </p>
                                    ))}
                                    <p class="control">
                                      <div class="tags has-addons">
                                        <span class="tag is-medium">
                                          {t("projects.duration")}
                                        </span>
                                        <span class="tag is-medium is-primary">
                                          {getDateDifference(
                                            p.startDate,
                                            p.endDate
                                          )}
                                        </span>
                                      </div>
                                    </p>
                                    {p.skills.map(s => (
                                      <div class="control">
                                        <span class="tag is-medium is-primary">
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
                                      <p class="subtitle">{children}</p>
                                    ),
                                    [BLOCKS.HEADING_1]: (_, children) => (
                                      <h1 class="title">{children}</h1>
                                    ),
                                    [BLOCKS.HEADING_2]: (_, children) => (
                                      <h2 class="subtitle is-spaced">
                                        {children}
                                      </h2>
                                    ),
                                  },
                                }
                              )}

                              {(p.videos || p.images) && (
                                <div
                                  title="Media"
                                  class="columns is-multiline bd-snippet bd-is-horizontal bd-is-2"
                                >
                                  {p.videos &&
                                    p.videos.map(v => (
                                      <div class="column is-half bd-snippet-preview ">
                                        <Video url={v}></Video>
                                      </div>
                                    ))}

                                  {p.images &&
                                    p.images.map(i => (
                                      <div class="column is-half bd-snippet-preview">
                                        <Lightbox image={i}></Lightbox>
                                      </div>
                                    ))}
                                </div>
                              )}
                            </div>
                            {projects.length - 1 > i && (
                              <div class="vertical-tab"></div>
                            )}
                          </>
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
      <section class="section"></section>
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
