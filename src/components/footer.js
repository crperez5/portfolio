import React from "react"
import { useTranslation } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          authorName
        }
      }
    }
  `)

  const { t } = useTranslation()
  return (
    <footer class="footer">
      <div class="container">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <span class="is-hidden-mobile" style={{ "margin-right": "5px" }}>
                {data.site.siteMetadata.authorName}
              </span>
              © {new Date().getFullYear()}, {t("footer.builtWith")}&nbsp;
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <a href="http://localhost:8000/en">{t("footer.english")}</a>
            </div>
            <div class="level-item is-hidden-mobile">|</div>
            <div class="level-item">
              <a href="http://localhost:8000/es">{t("footer.spanish")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
