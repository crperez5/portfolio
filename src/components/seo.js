import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import { usePageContext } from "../PageContext"

function SEO({ title, description }) {
  const { t } = useTranslation()
  const { lang, originalPath } = usePageContext()

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            supportedLanguages
          }
        }
      }
    `
  )

  const metaDescription = description || t("siteMetadata.description")
  const host = site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      defaultTitle={t("siteMetadata.title")}
      title={title}
      titleTemplate={`%s | ${t("siteMetadata.title")}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: lang,
        },
      ]}
      link={[
        {
          rel: "canonical",
          href: `${host}/${lang}${originalPath}`,
        },
        {
          rel: "alternate",
          hrefLang: "x-default",
          href: `${host}${originalPath}`,
        },
        ...site.siteMetadata.supportedLanguages.map(supportedLang => ({
          rel: "alternate",
          hrefLang: supportedLang,
          href: `${host}/${supportedLang}${originalPath}`,
        })),
      ]}
    />
  )
}

export default SEO
