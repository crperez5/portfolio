import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import variables from "../_variables.scss"
import { useTranslation } from "react-i18next"

const ContactPage = () => {
  const { t } = useTranslation()
  
  return (
    <Layout>
       <SEO title={t("contact.title")} />
      <section class="section is-medium">
        <div class="container">
          <div class="columns">
            <div class="column is-5">
              <div class="content">
                <Title className="title">Get in touch.</Title>
                <Hr className="hr underline-secondary"></Hr>

                <h2 class="subtitle">I'm looking for new challenges.</h2>
                <p class="is-3 has-text-weight-light">
                  Do you have a project in mind? Or need help in your company?
                  If so, feel free to contact me.
                </p>
              </div>
            </div>
            <div class="column is-offset-1 is-6">
              <form>
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <Input
                      required
                      className="input is-medium has-background-light"
                      type="text"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <Input
                      required
                      className="input is-medium has-background-light"
                      type="email"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <TextArea
                      required
                      className="textarea is-medium has-background-light"
                    ></TextArea>
                  </div>
                </div>
                <div class="control">
                  <button class="button is-rounded is-primary is-medium">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

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
