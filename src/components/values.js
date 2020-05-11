import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Values = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "cristian-talk.jpg" }) {
        childImageSharp {
          fixed(width: 536, height: 536, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <section class="section">
        <br />
        <div class="container">
          <div class="column has-text-centered">
            <p class="title is-2">
              My <span class="underline-secondary">values</span>
            </p>
          </div>
        </div>
      </section>
      <section class="hero space is-medium is-hidden-touch">
        <div class="hero-body">
          <div class="container">
            <div class="column is-4 is-offset-7 skew-oppose value-box">
              <div class="box box-shadow-lift">
                <div id="reason-1">
                  <p class="title">Professionalism</p>
                  <hr />

                  <p class="subtitle">
                    Bring all of your social links together in one place.
                    Instead of sharing 10 links, share{" "}
                    <span class="underline-green">1 ultimate link</span> and
                    utilize your{" "}
                    <span class="underline-green">personal QR code</span> by
                    having it on your business card, your mobile phone, in a
                    video...anywhere.
                  </p>
                </div>

                <hr />
                <div class="buttons is-right">
                  <a
                    id="back-button-1"
                    class="button is-rounded"
                    style={{ display: "flex" }}
                  >
                    ← Back
                  </a>

                  <a
                    id="button-2"
                    class="button is-rounded"
                    style={{ display: "flex" }}
                  >
                    Next →
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
                fixed={data.image.childImageSharp.fixed}
                alt="My values"
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
                <p class="title is-4">Professionalism</p>
                <hr />

                <p class="subtitle">
                  Bring all of your social links together in one place. Instead
                  of sharing 10 links, share{" "}
                  <span class="underline-green">1 ultimate link</span> and
                  utilize your{" "}
                  <span class="underline-green">personal QR code</span> by
                  having it on your business card, your mobile phone, in a
                  video...anywhere.
                </p>
              </div>

              <hr />
              <div class="buttons is-right">
                <a
                  id="back-button-1"
                  class="button is-rounded"
                  style={{ display: "flex" }}
                >
                  ← Back
                </a>

                <a
                  id="button-2"
                  class="button is-rounded"
                  style={{ display: "flex" }}
                >
                  Next →
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
