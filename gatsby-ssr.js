import React from "react"
import { PageContextProvider } from "./src/Context"
import i18n from "./src/i18next"
import { I18nextProvider } from "react-i18next"

export const wrapRootElement = ({ element }) => {
  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <PageContextProvider pageContext={props.pageContext}>
      {element}
    </PageContextProvider>
  )
}
