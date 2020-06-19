import React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import variables from "../_variables.scss"
import Link from "../components/link"

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("notfound.title")} />
      <section className="section is-medium">
        <Container className="container">
          <div className="columns">
            <div className="column is-5">
              <div className="content">
                <Title className="title">{t("notfound.title")}</Title>
                <Hr className="hr underline-secondary"></Hr>

                <h2 className="subtitle">{t("notfound.message")}</h2>
                <p className="is-3 has-text-weight-light">
                  {t("notfound.suggestion")}
                </p>
                <Link to="/">
                    <button
                      className="button is-rounded is-primary is-medium"
                      type="submit"
                    >
                      {t("notfound.goHome")}
                    </button>
                  </Link>
              </div>
            </div>
            <div className="column is-offset-1 is-6"></div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default NotFoundPage

const Container = styled.div`
  flex-grow: 1;
`
const Title = styled.h1`
  margin-bottom: 1.5rem !important;
`
const Hr = styled.div`
  height: 2px;
  width: 4rem;
  border-bottom: 2px solid ${variables.secondary};
`