import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Values from "../components/values"
import Features from "../components/features"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { usePageContext } from "../PageContext"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types" 

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p class="has-text-weight-light">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_, children) => <h1 class="title">{children}</h1>,
    [BLOCKS.HEADING_2]: (_, children) => <h2 class="subtitle is-spaced">{children}</h2>,
  },
}

const AboutPage = ({ data }) => {
  const { t } = useTranslation()
  const { lang } = usePageContext()

  const json =
    data[lang].edges[0].node.childContentfulStaticDescriptionContentRichTextNode
      .json

  return (
    <Layout>
      <SEO title={t("about.title")} />
      <section class="section">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="content">
                {documentToReactComponents(json, options)}
              </div>
            </div>
            <div class="column is-5 is-offset-1">
              <Img fluid={data.image.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </section>
      <Features />
      <Values />
      <div class="section is-medium"></div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    en: allContentfulStaticDescription(
      filter: { type: { eq: "about" }, node_locale: { eq: "en-US" } }
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
      filter: { type: { eq: "about" }, node_locale: { eq: "es-ES" } }
    ) {
      edges {
        node {
          childContentfulStaticDescriptionContentRichTextNode {
            json
          }
        }
      }
    }
    image: file(relativePath: { eq: "idea.png" }) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#141a46", shadow: "#ffffff" }
          maxWidth: 546
          maxHeight: 546
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
