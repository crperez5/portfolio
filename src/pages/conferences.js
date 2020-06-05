import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import variables from "../_variables.scss"
import theme from "../theme"
import { graphql } from "gatsby"
import { ContentfulClient } from "react-contentful"
import { spaceId as space, accessToken } from "../environment"

const client = new ContentfulClient({
  accessToken,
  space,
})

const nodesPerPage = 1

const splitNodes = (input, start) => {
  if (start >= input.length) {
    return
  }
  const minLength = Math.min(2, Math.abs(input.length - start))
  const maxLength = Math.min(3, Math.abs(input.length - start))
  const groupSize = ~~(Math.random() * 2) ? minLength : maxLength
  const group = input.slice(start, start + groupSize)
  const newStart = start + group.length
  return [group].concat(splitNodes(input, newStart))
}

const cleanNodes = input =>
  input.reduce((prev, curr) => {
    if (curr !== undefined) return prev.concat([curr])
    return prev
  }, [])

const ConferencesPage = ({ data }) => {
  const totalCount = data.us.totalCount
  const nodesList = cleanNodes(splitNodes(data.us.nodes, 0))
  const [nodes, setNodes] = useState(nodesList)
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
              description: n.fields.description
                ? { description: n.fields.description }
                : null,
            }
          })

          const nodesList = cleanNodes(splitNodes(newNodes, 0))
          setPage(page + 1)
          setIsLoading(false)
          setNodes([...nodes, ...nodesList])
        })
    }
  }, [isLoading])

  return (
    <Layout>
      <SEO title="Cristian Pérez Matturro - Conferences" />
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

          {nodes.map((nodeGroup, groupIndex) => {
            let isEvenGroup = nodeGroup.reduce(
              (prev, _, i) =>
                prev && !getSizeClass(groupIndex, i, nodeGroup.length),
              true
            )
            let groupHasAnyDescriptions = nodeGroup.reduce(
              (prev, curr) => prev || curr.description !== null,
              false
            )

            return (
              <div class="tile is-ancestor">
                {nodeGroup.map((node, nodeIndex) => {
                  const sizeClass = getSizeClass(
                    nodeIndex,
                    groupIndex,
                    nodeGroup.length
                  )
                  return (
                    <div class={"tile is-parent " + sizeClass}>
                      <article class="tile is-child box">
                        <WrappedConference
                          conference={node}
                          forcePushUp={
                            isEvenGroup &&
                            groupHasAnyDescriptions &&
                            !node.description
                          }
                        ></WrappedConference>
                      </article>
                    </div>
                  )
                })}
              </div>
            )
          })}
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

const getSizeClass = (rowIndex, itemIndex, rowSize) =>
  (rowSize === 2 && rowIndex % 2 === 0 && itemIndex % 2 === 0) ||
  (rowSize === 2 && rowIndex % 2 !== 0 && itemIndex % 2 !== 0)
    ? "is-8"
    : ""

const wrapConference = PassedConference => ({ children, ...props }) =>
  props.forcePushUp ? (
    <StyledConferenceWrapper theme={theme}>
      <PassedConference {...props}>{children}</PassedConference>
    </StyledConferenceWrapper>
  ) : (
    <PassedConference {...props}>{children}</PassedConference>
  )

const Conference = props => (
  <>
    <p class="title">
      {props.conference.title} <br />
      <span class="subtitle is-small" title="Watched on">
        {" "}
        <FontAwesomeIcon icon={faEye} size="xs"></FontAwesomeIcon>{" "}
        {new Date(props.conference.date).toLocaleDateString()}
      </span>
    </p>
    <p class="subtitle">{props.conference.description?.description}</p>
    <WrappedVideo
      conference={props.conference}
      url={props.conference.videoLink}
      forcePushUp={props.forcePushUp}
    ></WrappedVideo>
  </>
)
const WrappedConference = wrapConference(Conference)

const StyledConferenceWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.from(
      variables.tablet,
      `
  position: relative;
  height: 100%;`
    )}
`

const wrapVideo = Video => ({ children, ...props }) =>
  props.forcePushUp ? (
    <StyledVideoWrapper theme={theme}>
      <Video {...props}>{children}</Video>
    </StyledVideoWrapper>
  ) : (
    <Video {...props}>{children}</Video>
  )
const WrappedVideo = wrapVideo(Video)

const StyledVideoWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.from(
      variables.tablet,
      `
position: absolute;
    bottom: 0;`
    )}
`
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
