import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Cristian Pérez Matturro - Projects" />
      <section class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-12">
              <div class="columns is-vcentered">
                <div class="column is-6">
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
                       
                        <h3 class="title is-4">This is a project title</h3>
                        <p class="subtitle">
                          Lorem ipsum dolor sit amet, in vix meis corpora. Vim
                          ne virtute detracto offendit. Quis solet minimum te
                          pri, et nec elitr mollis.
                        </p>
                      </div>
                      <div class="vertical-tab">
                        <h3 class="title is-4">This is a project title</h3>
                        <p class="subtitle">
                          Lorem ipsum dolor sit amet, in vix meis corpora. Vim
                          ne virtute detracto offendit. Quis solet minimum te
                          pri, et nec elitr mollis.
                        </p>
                      </div>
                      <div class="vertical-tab">
                        <h3 class="title is-4">This is a project title</h3>
                        <p class="subtitle">
                          Lorem ipsum dolor sit amet, in vix meis corpora. Vim
                          ne virtute detracto offendit. Quis solet minimum te
                          pri, et nec elitr mollis.
                        </p>
                      </div>
                      <div class="vertical-tab">
                        <h3 class="title is-4">This is a project title</h3>
                        <p class="subtitle">
                          Lorem ipsum dolor sit amet, in vix meis corpora. Vim
                          ne virtute detracto offendit. Quis solet minimum te
                          pri, et nec elitr mollis.
                        </p>
                      </div>
                    </div>
                    <div class="hr"></div>
                  </div>
                </div>
                <div class="column is-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage
