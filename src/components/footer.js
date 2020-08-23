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
    <footer className="footer">
      <div className="container">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <span className="is-hidden-mobile" style={{ marginRight: "5px" }}>
                {data.site.siteMetadata.authorName}
              </span>
              © {new Date().getFullYear()}, {t("footer.builtWith")}&nbsp;
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <a href={`${process.env.URL}/en`}>{t("footer.english")}</a>
            </div>
            <div className="level-item is-hidden-mobile">|</div>
            <div className="level-item">
              <a href={`${process.env.URL}/es`}>{t("footer.spanish")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
