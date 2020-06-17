import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import variables from "../_variables.scss"
import Icon from "../components/icon"
import { useTranslation } from "react-i18next"
import { usePageContext } from "../PageContext"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { graphql } from 'gatsby' 

const iconStyle = {
  fill: variables.primary,
  width: "128px",
  height: "128px",
}

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="has-text-weight-light">{children}</p>
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
          <div key={i}>
            <section className="section">
              <div className="container is-fullhd-container">
                <div className="columns">
                  <div className="column is-one-third">
                    <div className="skills-description">
                      <h2 className="title is-3">
                        <strong className="underline-secondary">
                          {skillSet.title}
                        </strong>
                      </h2>
                      <div className="content">
                        {documentToReactComponents(
                          skillSet.description,
                          options
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="skills">
                      {skillSet.technologies.map((t, i) => (
                        <div key={i} className="skills-item">
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
              <div className="hr">
                <div className="container">
                  <hr />
                </div>
              </div>
            )}
          </div>
        )
      })}
      <div className="section is-medium"></div>
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
