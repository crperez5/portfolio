import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import variables from "../_variables.scss"
import Icon from "../components/icon"
import { useTranslation } from "react-i18next"
import { usePageContext } from "../PageContext"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const iconStyle = {
  fill: variables.primary,
  width: "128px",
  height: "128px",
}

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p class="has-text-weight-light">{children}</p>
    ),
  },
}

const TechStackPage = ({ data }) => {
  const { t } = useTranslation()
  const { lang } = usePageContext()

  const skillSets = data[lang].edges.map(e => {
    return {
      title: e.node.title,
      technologies: e.node.technologies,
      description: e.node.childContentfulSkillSetDescriptionRichTextNode.json,
    }
  })

  return (
    <Layout>
      <SEO title={t("tech-stack.title")} />
      {skillSets.map((skillSet, i) => {
        return (
          <>
            <section class="section">
              <div class="container is-fullhd-container">
                <div class="columns">
                  <div class="column is-one-third">
                    <div class="skills-description">
                      <h2 class="title is-3">
                        <strong class="underline-secondary">
                          {skillSet.title}
                        </strong>
                      </h2>
                      <div class="content">
                        {documentToReactComponents(
                          skillSet.description,
                          options
                        )}
                      </div>
                    </div>
                  </div>
                  <div class="column">
                    <div class="skills">
                      {skillSet.technologies.map(t => (
                        <div class="skills-item">
                          <span title={t.name}>
                            <Icon
                              icon={t.icon}
                              fill={iconStyle.fill}
                              width={iconStyle.width}
                              height={iconStyle.height}
                            />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {skillSets.length - 1 > i && (
              <div class="hr">
                <div class="container">
                  <hr />
                </div>
              </div>
            )}
          </>
        )
      })}
      <div class="section is-medium"></div>
    </Layout>
  )
}

export default TechStackPage

export const query = graphql`
  query {
    en: allContentfulSkillSet(
      sort: { fields: createdAt, order: ASC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          childContentfulSkillSetDescriptionRichTextNode {
            json
          }
          technologies {
            name
            icon
          }
          title
        }
      }
    }
    es: allContentfulSkillSet(
      sort: { fields: createdAt, order: ASC }
      filter: { node_locale: { eq: "es-ES" } }
    ) {
      edges {
        node {
          childContentfulSkillSetDescriptionRichTextNode {
            json
          }
          technologies {
            name
            icon
          }
          title
        }
      }
    }
  }
`
