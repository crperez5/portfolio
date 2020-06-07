import React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("notfound.title")} />
      <h1>{t("notfound.title")}</h1>
      <p>{t("notfound.message")}</p>
    </Layout>
  )
}

export default NotFoundPage
