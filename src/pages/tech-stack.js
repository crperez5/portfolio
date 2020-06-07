import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import variables from "../_variables.scss"
import Icon from "../components/icon"
import { useTranslation } from "react-i18next"

const iconStyle = {
  fill: variables.primary,
  width: "128px",
  height: "128px",
}
const TechStackPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("tech-stack.title")} />
      <section class="section">
        <div class="container is-fullhd-container">
          <div class="columns">
            <div class="column is-one-third">
              <div class="skills-description">
                <h2 class="title is-3">
                  <strong class="underline-secondary">Front-end</strong>
                </h2>
                <div class="content">
                  <p class="has-text-weight-light">
                    Lorem ipsum dolor sit amet, in vix meis corpora. Vim ne
                    virtute detracto offendit. Quis solet minimum te pri, et nec
                    elitr mollis. Ut quis probo intellegat mei, congue causae
                    sensibus nec ut.
                  </p>
                  <p class="has-text-weight-light">
                    Lorem ipsum dolor sit amet, in vix meis corpora. Vim ne
                    virtute detracto offendit. Quis solet minimum te pri, et nec
                    elitr mollis.
                  </p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="skills">
                <div class="skills-item">
                  <Icon
                    icon="javascript"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <Icon
                    icon="typescript"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <Icon
                    icon="angular"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <Icon
                    icon="reactjs"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <Icon
                    icon="gatsbyjs"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <Icon
                    icon="ionic"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <Icon
                    icon="css3"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="hr">
        <div class="container">
          <hr />
        </div>
      </div>
      <section class="section">
        <div class="container is-fullhd-container">
          <div class="columns">
            <div class="column is-one-third">
              <div class="skills-description">
                <h2 class="title is-3">
                  <strong class="underline-secondary">Back-end</strong>
                </h2>
                <div class="content">
                  <p class="has-text-weight-light">
                    Lorem ipsum dolor sit amet, in vix meis corpora. Vim ne
                    virtute detracto offendit. Quis solet minimum te pri, et nec
                    elitr mollis. Ut quis probo intellegat mei, congue causae
                    sensibus nec ut.
                  </p>
                  <p class="has-text-weight-light">
                    Lorem ipsum dolor sit amet, in vix meis corpora. Vim ne
                    virtute detracto offendit. Quis solet minimum te pri, et nec
                    elitr mollis.
                  </p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="skills">
                <div class="skills-item">
                  <Icon
                    icon="csharp"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <Icon
                    icon="netcore"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <Icon
                    icon="netfw"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <Icon
                    icon="sql"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <Icon
                    icon="serverless"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <Icon
                    icon="mldotnet"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="hr">
        <div class="container">
          <hr />
        </div>
      </div>
      <section class="section">
        <div class="container is-fullhd-container">
          <div class="columns">
            <div class="column is-one-third">
              <div class="skills-description">
                <h2 class="title is-3">
                  <strong class="underline-secondary">DevOps</strong>
                </h2>
                <div class="content">
                  <p class="has-text-weight-light">
                    Lorem ipsum dolor sit amet, in vix meis corpora. Vim ne
                    virtute detracto offendit. Quis solet minimum te pri, et nec
                    elitr mollis. Ut quis probo intellegat mei, congue causae
                    sensibus nec ut.
                  </p>
                  <p class="has-text-weight-light">
                    Lorem ipsum dolor sit amet, in vix meis corpora. Vim ne
                    virtute detracto offendit. Quis solet minimum te pri, et nec
                    elitr mollis.
                  </p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="skills">
                <div class="skills-item">
                  <Icon
                    icon="powershell"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <Icon
                    icon="vsts"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
                <div class="skills-item">
                  <Icon
                    icon="docker"
                    fill={iconStyle.fill}
                    width={iconStyle.width}
                    height={iconStyle.height}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="hr"></div>
    </Layout>
  )
}

export default TechStackPage
