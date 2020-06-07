import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { ContentfulClient } from "react-contentful"
import { spaceId as space, accessToken } from "../environment"
import Grid from "../components/grid"
import { useTranslation } from "react-i18next"

const client = new ContentfulClient({
  accessToken,
  space,
})


const nodesPerPage = 1

const ConferencesPage = ({ data }) => {
  const { t } = useTranslation()

  const totalCount = data.us.totalCount
  const [nodes, setNodes] = useState(data.us.nodes)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(0)

  const loadMore = () => {
    setIsLoading(true)
  }

  useEffect(() => {
    if (isLoading) {
      client
        .getEntries({
          content_type: "EventAttendance",
          skip: (page + 1) * nodesPerPage,
          limit: nodesPerPage,
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
            <h2 class="title is-2 is-spaced">Conferences</h2>
            <p class="subtitle is-4">
              Lorem ipsum dolor sit amet, in vix meis corpora. Vim ne virtute
              detracto offendit. Quis solet minimum te pri, et nec elitr mollis.
              Ut quis probo intellegat mei, congue causae sensibus nec ut.
            </p>

            <div class="hr"></div>
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
                nodesPerPage={nodesPerPage}
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
  nodesPerPage,
}) => {
  const remaininigCount = totalCount - (currentPage + 1) * nodesPerPage
  return (
    remaininigCount > 0 && (
      <button
        class={`button is-size-3-tablet ${isLoading ? "is-loading" : ""}`}
        onClick={_ => onClick()}
      >
        Load More ({remaininigCount})
      </button>
    )
  )
}

export default ConferencesPage

export const query = graphql`
  {
    us: allContentfulEventAttendance(
      sort: { fields: [date], order: DESC }
      limit: 1
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
    es: allContentfulEventAttendance(
      sort: { fields: [date], order: DESC }
      limit: 1
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
