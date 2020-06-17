import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import variables from "../_variables.scss"
import { useTranslation } from "react-i18next"
import { emailService, emailUser, emailTemplate } from "../environment"
import emailjs from "emailjs-com"
import Link from "../components/link"

const ContactPage = () => {
  const { t } = useTranslation()
  const [state, setState] = useState({})
  const [messageSent, setMessageSent] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    emailjs.init(emailUser)
  }, [])

  const handleInputChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()
    try {
      await emailjs.send(emailService, emailTemplate, {
        message_html: state.message,
        from_name: state.name,
        reply_to: state.email,
      })
      setMessageSent(true)
    } catch (e) {
      setLoading(false)
    }
  }
  return (
    <Layout>
      <SEO title={t("contact.title")} />
      <section className="section is-medium">
        <Container className="container">
          <div className="columns">
            <div className="column is-5">
              {!messageSent && (
                <div className="content">
                  <Title className="title">{t("contact.subtitle")}</Title>
                  <Hr className="hr underline-secondary"></Hr>

                  <h2 className="subtitle">{t("contact.howFeeling")}</h2>
                  <p className="is-3 has-text-weight-light">
                    {t("contact.beforeQuestion")}
                  </p>
                </div>
              )}
              {messageSent && (
                <div className="content">
                  <Title className="title"> {t("contact.thankyou")}</Title>
                  <Hr className="hr underline-secondary"></Hr>

                  <h2 className="subtitle">{t("contact.successMessage")}</h2>
                  <p className="is-3 has-text-weight-light">
                    {t("contact.afterQuestion")}
                  </p>
                  <Link to="/">
                    <button
                      className="button is-rounded is-primary is-medium"
                      type="submit"
                    >
                      {t("contact.afterButtonText")}
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="column is-offset-1 is-6">
              {!messageSent && (
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label className="label">{t("contact.name")}</label>
                    <div className="control">
                      <Input
                        required
                        className="input is-medium has-background-light"
                        type="text"
                        name="name"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">{t("contact.email")}</label>
                    <div className="control">
                      <Input
                        required
                        className="input is-medium has-background-light"
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">{t("contact.message")}</label>
                    <div className="control">
                      <TextArea
                        required
                        className="textarea is-medium has-background-light"
                        name="message"
                        onChange={handleInputChange}
                      ></TextArea>
                    </div>
                  </div>
                  <div className="control">
                    <button
                      className={`button is-rounded is-primary is-medium ${
                        loading ? "is-loading" : ""
                      }`}
                      type="submit"
                    >
                      {t("contact.beforeButtonText")}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

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

const Input = styled.input`
  border: none;
  margin-bottom: 1.5rem;
`

const TextArea = styled.textarea`
  border: none;
  margin-bottom: 1.5rem;
  max-height: 16em;
  min-height: 10em;
`

export default ContactPage
