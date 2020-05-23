import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Lightbox from "../components/lightbox"
import Img from "gatsby-image"
export const query = graphql`
  query {
    image: file(relativePath: { eq: "project.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Cristian Pérez Matturro - Projects" />
      <section class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-12">
              <div class="columns is-vcentered">
                <div class="column">
                  <div>
                    <h2 class="title is-2 is-spaced">My career timeline</h2>
                    <p class="subtitle is-4">
                      Lorem ipsum dolor sit amet, in vix meis corpora. Vim ne
                      virtute detracto offendit. Quis solet minimum te pri, et
                      nec elitr mollis. Ut quis probo intellegat mei, congue
                      causae sensibus nec ut.
                    </p>

                    <div class="hr"></div>
                  </div>

                  <div>
                    <div class="vertical-timeline-tabs">
                      <div class="vertical-tab is-active">
                        <div class="media">
                          <div class="media-left">
                            <figure class="image is-96x96">
                              <img
                                src="https://bulma.io/images/placeholders/96x96.png"
                                alt="Placeholder image"
                              />
                            </figure>
                          </div>
                          <div class="media-content">
                            <h3 class="title is-4">This is a project title</h3>
                            <h4 class="subtitle is-hidden-tablet">2018-20</h4>
                            <div class="field is-grouped is-grouped-multiline is-hidden-mobile">
                              <div class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-large">Role</span>
                                  <span class="tag is-large is-primary">
                                    Senior Full-Stack Developer
                                  </span>
                                </div>
                              </div>
                              <div class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-large">Role</span>
                                  <span class="tag is-large is-primary">
                                    Team Lead
                                  </span>
                                </div>
                              </div>
                              <div class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-large">Time</span>
                                  <span class="tag is-large is-primary">
                                    2 years, 3 months
                                  </span>
                                </div>
                              </div>
                              <div class="control">
                                <span class="tag is-large is-primary">
                                  .net
                                </span>
                              </div>
                              <div class="control">
                                <span class="tag is-large is-primary">
                                  angular
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="level is-hidden-tablet">
                          <div class="level-left">
                            <div class="field is-grouped is-grouped-multiline">
                              <p class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-medium">Role</span>
                                  <span class="tag is-medium is-primary">
                                    Senior Full-Stack Developer
                                  </span>
                                </div>
                              </p>
                              <p class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-medium">Time</span>
                                  <span class="tag is-medium is-primary">
                                    2 years, 3 months
                                  </span>
                                </div>
                              </p>
                              <p class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-medium">Backend</span>
                                  <span class="tag is-medium is-primary">
                                    .net
                                  </span>
                                </div>
                              </p>
                              <p class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-medium">Frontend</span>
                                  <span class="tag is-medium is-primary">
                                    Angular
                                  </span>
                                </div>
                              </p>
                            </div>
                          </div>
                        </div>
                        <p class="subtitle">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas semper luctus nisl, eu tempus arcu
                          fermentum sed. Nullam non convallis urna, volutpat
                          tristique nisl. Nullam enim quam, efficitur at eros
                          sed, mollis vestibulum metus. Integer iaculis orci
                          eros, ac malesuada dui venenatis sed. Proin at arcu
                          lorem.
                        </p>
                        <p class="subtitle">
                          Etiam lacinia, ligula in gravida sodales, lacus enim
                          tincidunt velit, ac sodales nulla dolor non massa. Sed
                          eget sem non velit tincidunt egestas. Praesent rhoncus
                          faucibus tempor. Cras velit metus, consequat eu lorem
                          eget, molestie consectetur lacus. Aenean luctus
                          facilisis posuere. Maecenas vitae ipsum eget justo
                          rhoncus vulputate at sit amet est.
                        </p>
                        <div
                          class="columns is-multiline bd-snippet bd-is-horizontal bd-is-2"
                          title="Media"
                        >
                          <div class="column is-half bd-snippet-preview ">
                            <figure class="image is-16by9">
                              <iframe
                                class="has-ratio"
                                width="320"
                                height="320"
                                src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0"
                                frameborder="0"
                                allowfullscreen=""
                              ></iframe>
                            </figure>
                          </div>
                          <div class="column is-half bd-snippet-preview ">
                            <figure class="image is-16by9">
                              <iframe
                                class="has-ratio"
                                src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0"
                                frameborder="0"
                                allowfullscreen=""
                              ></iframe>
                            </figure>
                          </div>

                          <div class="column is-half bd-snippet-preview is-hidden-tablet ">
                            <Img
                              fluid={{
                                ...data.image.childImageSharp.fluid,
                                aspectRatio: 16 / 9,
                              }}
                            />
                          </div>
                          <div class="column is-half bd-snippet-preview is-hidden-mobile">
                            <Lightbox
                              fluid={data.image.childImageSharp.fluid}
                              maxWidth="1024px"
                              aspectRatio={16 / 9}
                            ></Lightbox>
                          </div>
                        </div>
                      </div>
                      <div class="vertical-tab"></div>
                      <div class="vertical-tab ">
                        <div class="media">
                          <div class="media-left">
                            <figure class="image is-96x96">
                              <img
                                src="https://bulma.io/images/placeholders/96x96.png"
                                alt="Placeholder image"
                              />
                            </figure>
                          </div>
                          <div class="media-content">
                            <h3 class="title is-4">This is a project title</h3>
                            <h4 class="subtitle is-hidden-tablet">2017-18</h4>
                            <div class="field is-grouped is-grouped-multiline is-hidden-mobile">
                              <div class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-large">Role</span>
                                  <span class="tag is-large is-primary">
                                    Senior Full-Stack Developer
                                  </span>
                                </div>
                              </div>
                              <div class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-large">Role</span>
                                  <span class="tag is-large is-primary">
                                    Team Lead
                                  </span>
                                </div>
                              </div>
                              <div class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-large">Time</span>
                                  <span class="tag is-large is-primary">
                                    2 years, 3 months
                                  </span>
                                </div>
                              </div>
                              <div class="control">
                                <span class="tag is-large is-primary">
                                  .net
                                </span>
                              </div>
                              <div class="control">
                                <span class="tag is-large is-primary">
                                  angular
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="level is-hidden-tablet">
                          <div class="level-left">
                            <div class="field is-grouped is-grouped-multiline">
                              <p class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-medium">Role</span>
                                  <span class="tag is-medium is-primary">
                                    Senior Full-Stack Developer
                                  </span>
                                </div>
                              </p>
                              <p class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-medium">Time</span>
                                  <span class="tag is-medium is-primary">
                                    2 years, 3 months
                                  </span>
                                </div>
                              </p>
                              <p class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-medium">Backend</span>
                                  <span class="tag is-medium is-primary">
                                    .net
                                  </span>
                                </div>
                              </p>
                              <p class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-medium">Frontend</span>
                                  <span class="tag is-medium is-primary">
                                    Angular
                                  </span>
                                </div>
                              </p>
                            </div>
                          </div>
                        </div>
                        <p class="subtitle">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas semper luctus nisl, eu tempus arcu
                          fermentum sed. Nullam non convallis urna, volutpat
                          tristique nisl. Nullam enim quam, efficitur at eros
                          sed, mollis vestibulum metus. Integer iaculis orci
                          eros, ac malesuada dui venenatis sed. Proin at arcu
                          lorem.
                        </p>
                        <p class="subtitle">
                          Etiam lacinia, ligula in gravida sodales, lacus enim
                          tincidunt velit, ac sodales nulla dolor non massa. Sed
                          eget sem non velit tincidunt egestas. Praesent rhoncus
                          faucibus tempor. Cras velit metus, consequat eu lorem
                          eget, molestie consectetur lacus. Aenean luctus
                          facilisis posuere. Maecenas vitae ipsum eget justo
                          rhoncus vulputate at sit amet est.
                        </p>
                        <div
                          class="columns is-multiline bd-snippet bd-is-horizontal bd-is-2"
                          title="Media"
                        >
                          <div class="column is-half bd-snippet-preview ">
                            <figure class="image is-16by9">
                              <iframe
                                class="has-ratio"
                                width="320"
                                height="320"
                                src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0"
                                frameborder="0"
                                allowfullscreen=""
                              ></iframe>
                            </figure>
                          </div>
                          <div class="column is-half bd-snippet-preview ">
                            <figure class="image is-16by9">
                              <iframe
                                class="has-ratio"
                                src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0"
                                frameborder="0"
                                allowfullscreen=""
                              ></iframe>
                            </figure>
                          </div>

                          <div class="column is-half bd-snippet-preview is-hidden-tablet ">
                            <Img
                              fluid={{
                                ...data.image.childImageSharp.fluid,
                                aspectRatio: 16 / 9,
                              }}
                            />
                          </div>
                          <div class="column is-half bd-snippet-preview is-hidden-mobile">
                            <Lightbox
                              fluid={data.image.childImageSharp.fluid}
                              maxWidth="1024px"
                              aspectRatio={16 / 9}
                            ></Lightbox>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage
