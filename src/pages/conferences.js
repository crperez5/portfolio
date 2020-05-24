import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
const ConferencesPage = () => {
  return (
    <Layout>
      <SEO title="Cristian Pérez Matturro - Conferences" />
      <div class="section">
        <div class="container">
          <div>
            <h2 class="title is-2 is-spaced">Conferences</h2>
            <p class="subtitle is-4">
              Lorem ipsum dolor sit amet, in vix meis corpora. Vim ne virtute
              detracto offendit. Quis solet minimum te pri, et nec elitr mollis.
              Ut quis probo intellegat mei, congue causae sensibus nec ut.
            </p>

            <div class="hr"></div>
          </div>

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Hello World</p>
                <p class="subtitle">What is up?</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">
                  Video without description <br />
                  <span class="subtitle is-small" title="Watched on">
                    {" "}
                    <FontAwesomeIcon
                      icon={faEye}
                      size="xs"
                    ></FontAwesomeIcon>{" "}
                    5/1/2020
                  </span>
                </p>

                <Video url="https://www.youtube.com/embed/Z1gWfvPXDQo"></Video>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Third column</p>
                <p class="subtitle">With some content</p>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child box">
                    <p class="title">Vertical tiles</p>
                    <p class="subtitle">Top box</p>
                  </article>
                  <article class="tile is-child box">
                    <p class="title">Vertical tiles</p>
                    <p class="subtitle">Bottom box</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">
                      Video with description <br />
                      <span class="subtitle is-small" title="Watched on">
                        {" "}
                        <FontAwesomeIcon
                          icon={faEye}
                          size="xs"
                        ></FontAwesomeIcon>{" "}
                        5/1/2020
                      </span>
                    </p>

                    <p class="subtitle">
                      This is a conference and this is what I want to say about
                      it at the moment, but I may change
                    </p>
                    <Video url="https://www.youtube.com/embed/Z1gWfvPXDQo"></Video>
                  </article>
                </div>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">This is an important video <br/> 
                  <span class="subtitle is-small" title="Watched on">
                        {" "}
                        <FontAwesomeIcon
                          icon={faEye}
                          size="xs"
                        ></FontAwesomeIcon>{" "}
                        5/1/2020
                      </span>
                  </p>
                  <p class="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </p>
                    <Video url="https://www.youtube.com/embed/kyNL7yCvQQc"></Video>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <div class="content">
                  <p class="title">Tall column</p>
                  <p class="subtitle">With even more content</p>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam semper diam at erat pulvinar, at pulvinar felis
                      blandit. Vestibulum volutpat tellus diam, consequat
                      gravida libero rhoncus ut. Morbi maximus, leo sit amet
                      vehicula eleifend, nunc dui porta orci, quis semper odio
                      felis ut quam.
                    </p>
                    <p>
                      Suspendisse varius ligula in molestie lacinia. Maecenas
                      varius eget ligula a sagittis. Pellentesque interdum, nisl
                      nec interdum maximus, augue diam porttitor lorem, et
                      sollicitudin felis neque sit amet erat. Maecenas imperdiet
                      felis nisi, fringilla luctus felis hendrerit sit amet.
                      Aenean vitae gravida diam, finibus dignissim turpis. Sed
                      eget varius ligula, at volutpat tortor.
                    </p>
                    <p>
                      Integer sollicitudin, tortor a mattis commodo, velit urna
                      rhoncus erat, vitae congue lectus dolor consequat libero.
                      Donec leo ligula, maximus et pellentesque sed, gravida a
                      metus. Cras ullamcorper a nunc ac porta. Aliquam ut
                      aliquet lacus, quis faucibus libero. Quisque non semper
                      leo.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Side column</p>
                <p class="subtitle">With some content</p>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </div>
              </article>
            </div>
            <div class="tile is-parent is-8">
              <article class="tile is-child box">
                <p class="title">Main column</p>
                <p class="subtitle">With some content</p>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ConferencesPage
