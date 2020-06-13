import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { ContentfulClient } from "react-contentful"
import { spaceId as space, accessToken } from "../environment"
import Grid from "../components/grid"
import { useTranslation } from "react-i18next"
import { usePageContext } from "../PageContext"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { itemsPerPage } from "../environment"

const client = new ContentfulClient({
  accessToken,
  space,
})

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p class="subtitle is-4">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 class="title is-2 is-spaced">{children}</h2>
    ),
  },
}

const ConferencesPage = ({ data }) => {
  const defaultLanguage = data.site.siteMetadata.defaultLanguage
  const { t } = useTranslation()
  const { lang } = usePageContext()
  const currentLanguage = lang ?? defaultLanguage

  const totalCount = data[`data_${currentLanguage}`].totalCount
  const [nodes, setNodes] = useState(data[`data_${currentLanguage}`].nodes)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(0)

  const jsonIntro =
    data[`intro_${currentLanguage}`].edges[0].node
      .childContentfulStaticDescriptionContentRichTextNode.json

  const loadMore = () => {
    setIsLoading(true)
  }

  useEffect(() => {
    if (isLoading) {
      client
        .getEntries({
          content_type: "EventAttendance",
          skip: (page + 1) * itemsPerPage,
          limit: itemsPerPage,
          order: "-fields.date",
        })
        .then(function (result) {
          const newNodes = result.items.map(n => {
            return {
              ...n.fields,
            }
          })

          setPage(page + 1)
          setIsLoading(false)
          setNodes([...nodes, ...newNodes])
        })
    }
  }, [isLoading])

  return (
    <Layout>
      <SEO title={t("conferences.title")} />
      <div class="section">
        <div class="container">
          <div>
            {documentToReactComponents(jsonIntro, options)}
            <div class="column"></div>
          </div>

          <Grid data={nodes}></Grid>
        </div>
      </div>
      <div class="section">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column">
              <LoadMoreButton
                onClick={loadMore}
                isLoading={isLoading}
                totalCount={totalCount}
                currentPage={page}
                itemsPerPage={itemsPerPage}
              ></LoadMoreButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const LoadMoreButton = ({
  onClick,
  isLoading,
  totalCount,
  currentPage,
  itemsPerPage,
}) => {
  const remaininigCount = totalCount - (currentPage + 1) * itemsPerPage
  const { t } = useTranslation()
  return (
    remaininigCount > 0 && (
      <button
        class={`button is-size-3-tablet ${isLoading ? "is-loading" : ""}`}
        onClick={_ => onClick()}
      >
        {t("conferences.loadMore")} ({remaininigCount})
      </button>
    )
  )
}

export default ConferencesPage

export const query = graphql`
  {
    site {
      siteMetadata {
        defaultLanguage
      }
    }
    intro_en: allContentfulStaticDescription(
      filter: { type: { eq: "conferences" }, node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          childContentfulStaticDescriptionContentRichTextNode {
            json
          }
        }
      }
    }
    intro_es: allContentfulStaticDescription(
      filter: { type: { eq: "conferences" }, node_locale: { eq: "es-ES" } }
    ) {
      edges {
        node {
          childContentfulStaticDescriptionContentRichTextNode {
            json
          }
        }
      }
    }
    data_en: allContentfulEventAttendance(
      sort: { fields: [date], order: DESC }
      limit: 10
      filter: { node_locale: { eq: "en-US" } }
    ) {
      totalCount
      nodes {
        title
        date
        description {
          description
        }
        videoLink
      }
    }
    data_es: allContentfulEventAttendance(
      sort: { fields: [date], order: DESC }
      limit: 10
      filter: { node_locale: { eq: "es-ES" } }
    ) {
      totalCount
      nodes {
        title
        date
        description {
          description
        }
        videoLink
      }
    }
  }
`
