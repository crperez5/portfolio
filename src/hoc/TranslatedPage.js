import React from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "../i18next"

const TranslatedPage = Page => props => (
  <I18nextProvider i18n={i18n}>
    <Page {...props}></Page>
  </I18nextProvider>
)

export default TranslatedPage
