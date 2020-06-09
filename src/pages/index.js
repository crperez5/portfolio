import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import theme from "../theme"

export const query = graphql`
  query {
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
const IndexPage = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO />
      <div class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column">
              <div class="column is-offset-1-widescreen is-offset-1-desktop is-offset-one-and-half-tablet">
                <Title theme={theme}>Cristian Pérez</Title>
                <div class="column">
                  <div class="content">
                    <div class="column is-full-widescreen is-full-desktop is-full-size-tablet is-marginless is-paddingless">
                      <h3 class="has-text-weight-light is-size-4-fullhd is-size-4-widescreen is-size-4-desktop is-size-5-tablet is-size-5-mobile">
                        Front-end engineer specializing in React with a focus on
                        performance. Love huskies, really afraid of bees.
                      </h3>

                      <h4 class="is-size-5-fullhd is-size-5-widescreen is-size-5-desktop is-size-6-tablet is-size-6-mobile">
                        #react #apollo #redux #webperf
                      </h4>
                      <br />

                      <div class="button is-fullwidth-mobile is-primary is-size-4-fullhd is-size-5-widescreen is-size-5-desktop is-rounded">
                        Want to know more? Continue
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-background is-hidden-mobile">
              <StyledImg
                theme={theme}
                className="has-radius-275"
                fluid={data.image.childImageSharp.fluid}
              />
            </div>
            
          </div>
          {/* <div class="section"></div> */}
          <StyledImg
            theme={theme}
            className="has-radius-275 is-hidden-tablet"
            fluid={data.image.childImageSharp.fluid}
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

const StyledImg = styled(Img)`
${({ theme }) => {
  return theme.mixins.microScreen(`
    position: absolute !important;
    overflow: hidden;
    width: 200px;
    height: 200px;
    top: 50%;
    left: -130px;
    z-index: -1;
  `)
}}
${({ theme }) => {
  return theme.mixins.smallScreen(`
    position: absolute !important;
    overflow: hidden;
    width: 250px;
    height: 250px;
    top: 50%;
    left: -160px;
    z-index: -1;
  `)
}}

  ${({ theme }) => {
    return theme.mixins.mediumScreen(`
      width: 275px;
      height: 275px;
      transform: translateX(-15px);
    `)
  }}
  ${({ theme }) => {
    return theme.mixins.mediumLargeScreen(`
    width: 400px;
    height: 400px;
    transform: translateX(-60px);
    `)
  }}
  ${({ theme }) => {
    return theme.mixins.largeScreen(`
      width: 400px;
      height: 400px;
      transform: translateX(-40px);
    `)
  }}
  ${({ theme }) => {
    return theme.mixins.extraLargeScreen(`
      width: 550px;
      height: 550px;
      transform: translateX(-70px);
    `)
  }}  
`

const Title = styled.h1`
  font: 9rem Monoton;
  line-height: 10rem;
  ${({ theme }) => {
    return theme.mixins.microScreen(`
    font-size: 3rem;
    line-height: 3.5rem;
    
    `)
  }}
  ${({ theme }) => {
    return theme.mixins.smallScreen(`
    font-size: 3.5rem;
    line-height: 4.5rem;
    
    `)
  }}
  ${({ theme }) => {
    return theme.mixins.mediumScreen(`
      font-size: 6.5rem;
      line-height: 7rem;
    `)
  }}
  ${({ theme }) => {
    return theme.mixins.mediumLargeScreen(`
    font-size:8rem;
    line-height: 9rem;
    `)
  }}
  ${({ theme }) => {
    return theme.mixins.largeScreen(`
      font-size:8rem;
      line-height: 9rem;
    `)
  }}
  ${({ theme }) => {
    return theme.mixins.extraLargeScreen(`
      font-size:9rem;
    `)
  }}
`
