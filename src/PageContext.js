import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"

const PageContext = React.createContext({})

export const PageContextProvider = ({ value, children }) => {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(value.lang)
  }, [])
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}

export const usePageContext = () => React.useContext(PageContext)
