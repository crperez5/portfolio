import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import variables from "../_variables.scss"
import theme from "../theme"

const input = [
  {
    title: "Video without description",
    description: "",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
  {
    title: "Video with description",
    description:
      "This is a conference and this is what I want to say about it at the moment, but I may change",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
  {
    title: "Video with description",
    description:
      "This is a conference and this is what I want to say about it at the moment, but I may change",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
  {
    title: "Video with description",
    description:
      "This is a conference and this is what I want to say about it at the moment, but I may change",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
  {
    title: "Video with description",
    description:
      "This is a conference and this is what I want to say about it at the moment, but I may change",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
  {
    title: "Video with description",
    description:
      "This is a conference and this is what I want to say about it at the moment, but I may change",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
  {
    title: "Video without description",
    description: "",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
  {
    title: "Video without description",
    description: "",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
  {
    title: "Video without description",
    description: "",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
  {
    title: "Video without description",
    description: "",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
  {
    title: "Video with description",
    description:
      "This is a conference and this is what I want to say about it at the moment, but I may change",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
  {
    title: "Video with description",
    description:
      "This is a conference and this is what I want to say about it at the moment, but I may change",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
  {
    title: "Video with description",
    description:
      "This is a conference and this is what I want to say about it at the moment, but I may change",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
  {
    title: "Video with description",
    description:
      "This is a conference and this is what I want to say about it at the moment, but I may change",
    dateSeen: "5/1/2020",
    videoLink: "https://www.youtube.com/embed/Z1gWfvPXDQo",
  },
]

const splitConferences = (input, start) => {
  if (start >= input.length) {
    return
  }
  const minLength = Math.min(2, Math.abs(input.length - start))
  const maxLength = Math.min(3, Math.abs(input.length - start))
  const groupSize = ~~(Math.random() * 2) ? minLength : maxLength
  const group = input.slice(start, start + groupSize)
  const newStart = start + group.length
  return [group].concat(splitConferences(input, newStart))
}

const cleanConferences = input =>
  input.reduce((prev, curr) => {
    if (curr !== undefined) return prev.concat([curr])
    return prev
  }, [])

const ConferencesPage = () => {
  const conferenceGroups = cleanConferences(splitConferences(input, 0))
  const [isLoading, setIsLoading] = useState(false)

  // TODO: This component and LoadMoreButton should be able to share state. 
  
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
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

          {conferenceGroups.map((conferenceGroup, groupIndex) => {
            let isEvenGroup = conferenceGroup.reduce(
              (prev, _, i) =>
                prev && !getSizeClass(groupIndex, i, conferenceGroup.length),
              true
            )
            let groupHasAnyDescriptions = conferenceGroup.reduce(
              (prev, curr) => prev || curr.description,
              false
            )

            return (
              <div class="tile is-ancestor">
                {conferenceGroup.map((conference, conferenceIndex) => {
                  const sizeClass = getSizeClass(
                    groupIndex,
                    conferenceIndex,
                    conferenceGroup.length
                  )
                  return (
                    <div class={"tile is-parent " + sizeClass}>
                      <article class="tile is-child box">
                        <WrappedConference
                          conference={conference}
                          forcePushUp={
                            isEvenGroup &&
                            groupHasAnyDescriptions &&
                            conference.description === ""
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
              <LoadMoreButton></LoadMoreButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const LoadMoreButton = props => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <button
      class={`button is-size-3-tablet ${isLoading ? "is-loading" : ""}`}
      onClick={() => setIsLoading(true)}
    >
      Load More (22)
    </button>
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
        {props.conference.dateSeen}
      </span>
    </p>
    <p class="subtitle">{props.conference.description}</p>
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
