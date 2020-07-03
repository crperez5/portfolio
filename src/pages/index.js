import React from "react"
import { graphql } from "gatsby"
import Link from "../components/link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { usePageContext } from "../PageContext"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import styles from "./index.module.scss"
const options = {
  renderNode: {
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className={`${styles.h3} has-text-weight-light is-size-4-fullhd is-size-4-widescreen is-size-4-desktop is-size-5-tablet is-size-5-mobile`}>
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="is-size-5-fullhd is-size-5-widescreen is-size-5-desktop is-size-6-tablet is-size-6-mobile">
        {children}
      </h4>
    ),
  },
}

const IndexPage = ({ data }) => {
  const { t } = useTranslation()
  const { lang } = usePageContext()

  const json =
    data[lang].edges[0].node.childContentfulStaticDescriptionContentRichTextNode
      .json

  return (
    <Layout>
      <SEO />
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <div className="column is-offset-1-widescreen is-offset-1-desktop is-offset-one-and-half-tablet">
                <h1 class={styles.title}>
                  Cristian Pérez
                </h1>
                <div className="column">
                  <div className="content">
                    <div className={`${styles.myDescription} column is-full-widescreen is-full-desktop is-full-size-tablet is-marginless is-paddingless`}>
                      {documentToReactComponents(json, options)}
                      <br />
                      <Link
                        to="/about/"
                        className="button is-fullwidth-mobile is-primary is-size-4-fullhd is-size-5-widescreen is-size-5-desktop is-rounded"
                      >
                        {t("index.learnMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-background is-hidden-mobile">
              <Img
                
                className={`${styles.image} has-radius-275`}
                fluid={data.image.childImageSharp.fluid}
              />
            </div>
          </div>
          <Img
            
            className={`${styles.image} has-radius-275 is-hidden-tablet`}
            fluid={data.image.childImageSharp.fluid}
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    en: allContentfulStaticDescription(
      filter: { type: { eq: "home" }, node_locale: { eq: "en-US" } }
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
      filter: { type: { eq: "home" }, node_locale: { eq: "es-ES" } }
    ) {
      edges {
        node {
          childContentfulStaticDescriptionContentRichTextNode {
            json
          }
        }
      }
    }
    imageLarge: file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fixed(
          duotone: { highlight: "#ec8b5e", shadow: "#141a46" }
          width: 550
          height: 550
          quality: 100
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imageMedium: file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fixed(
          duotone: { highlight: "#ec8b5e", shadow: "#141a46" }
          width: 400
          height: 400
          quality: 100
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imageSmall: file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fixed(
          duotone: { highlight: "#ec8b5e", shadow: "#141a46" }
          width: 275
          height: 275
          quality: 100
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image: file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#ec8b5e", shadow: "#141a46" }
          maxWidth: 550
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
