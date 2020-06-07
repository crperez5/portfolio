import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { usePageContext } from "../PageContext"

const Link = ({ to, children, ...rest }) => {
  const { lang } = usePageContext()
  
  return (
    <GatsbyLink {...rest} to={`/${lang}${to}`}>
      {children}
    </GatsbyLink>
  )
}

export default Link
