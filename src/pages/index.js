import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

export const query = graphql`
  query {
    image: file(relativePath: { eq: "me.png" }) {
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
  }
`
const IndexPage = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO />
      <section class="section">
        <div class="section">
          <div class="container">
            <div class="columns is-centered">
              <div class="column">
                <div class="column is-offset-1">
                  <Title>Cristian Pérez</Title>
                  <div class="column">
                    <div class="content">
                      <div class="column is-four-fifths is-marginless is-paddingless">
                        <h3 class="has-text-weight-light">
                          Front-end engineer specializing in React with a focus
                          on performance. Love huskies, really afraid of bees.
                          
                        </h3>
                        
                        <h4>#react #apollo #redux #webperf</h4>
                        <br/>
                        
                        <div class="button is-primary is-large is-rounded">
                          Want to know more? Continue
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-background">
                <ImgContainer translateX="-65px">
                  <Img
                    className="has-radius-275"
                    fixed={data.image.childImageSharp.fixed}
                  />
                </ImgContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

const Title = styled.h1`
  font: 9rem Monoton, sans-serif;
  line-height: 10rem;
`
const ImgContainer = styled.div`
  transform: translateX(${props => props.translateX});
`
