import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Values from "../components/values"
import WhatIDo from "../components/whatido"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"

export const query = graphql`
  query {
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
const IndexPage = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title={t("index.title")} />
      <section class="section">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="content">
                <h1 class="title">{t("index.opener")}</h1>
                <h2 class="subtitle is-spaced">
                  <strong> Senior Full-Stack Software Engineer</strong>
                </h2>

                <p class="has-text-weight-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p class="has-text-weight-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="column is-5 is-offset-1">
              <Img fluid={data.image.childImageSharp.fluid} alt="Ideas" />
            </div>
          </div>
        </div>
      </section>
      <WhatIDo />
      <Values />
    </Layout>
  )
}

export default IndexPage
