import React from "react"
import { PageContextProvider } from "./src/PageContext"
import i18n from "./src/i18next"
import { I18nextProvider } from "react-i18next"
import { icons } from "./src/icons"

export const wrapRootElement = ({ element }) => {
  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <PageContextProvider value={props.pageContext}>
      {element}
    </PageContextProvider>
  )
}
