import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"

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
    return prev;
  }, [])

const ConferencesPage = () => {
  const conferences = cleanConferences(splitConferences(input, 0))
  
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

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">
                  Video without description <br />
                  <span class="subtitle is-small" title="Watched on">
                    {" "}
                    <FontAwesomeIcon
                      icon={faEye}
                      size="xs"
                    ></FontAwesomeIcon>{" "}
                    5/1/2020
                  </span>
                </p>

                <Video url="https://www.youtube.com/embed/Z1gWfvPXDQo"></Video>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">
                  Video without description <br />
                  <span class="subtitle is-small" title="Watched on">
                    {" "}
                    <FontAwesomeIcon
                      icon={faEye}
                      size="xs"
                    ></FontAwesomeIcon>{" "}
                    5/1/2020
                  </span>
                </p>

                <Video url="https://www.youtube.com/embed/Z1gWfvPXDQo"></Video>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">
                  Video without description <br />
                  <span class="subtitle is-small" title="Watched on">
                    {" "}
                    <FontAwesomeIcon
                      icon={faEye}
                      size="xs"
                    ></FontAwesomeIcon>{" "}
                    5/1/2020
                  </span>
                </p>

                <Video url="https://www.youtube.com/embed/Z1gWfvPXDQo"></Video>
              </article>
            </div>
          </div>

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">
                  Video title goes here <br />
                  <span class="subtitle is-small" title="Watched on">
                    {" "}
                    <FontAwesomeIcon
                      icon={faEye}
                      size="xs"
                    ></FontAwesomeIcon>{" "}
                    5/1/2020
                  </span>
                </p>
                <p class="subtitle">
                  This is a conference and this is what I want to say about it
                  at the moment, but I may change
                </p>
                <Video url="https://www.youtube.com/embed/Z1gWfvPXDQo"></Video>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">
                  Another video title goes here
                  <br />
                  <span class="subtitle is-small" title="Watched on">
                    {" "}
                    <FontAwesomeIcon
                      icon={faEye}
                      size="xs"
                    ></FontAwesomeIcon>{" "}
                    5/1/2020
                  </span>
                </p>
                <p class="subtitle">
                  This is a conference and this is what I want to say about it
                  at the moment, but I may change
                </p>
                <Video url="https://www.youtube.com/embed/Z1gWfvPXDQo"></Video>
              </article>
            </div>
          </div>

          <div class="tile is-ancestor">
            <div class="tile is-parent is-8">
              <article class="tile is-child box">
                <p class="title">
                  Another video title goes here
                  <br />
                  <span class="subtitle is-small" title="Watched on">
                    {" "}
                    <FontAwesomeIcon
                      icon={faEye}
                      size="xs"
                    ></FontAwesomeIcon>{" "}
                    5/1/2020
                  </span>
                </p>
                <p class="subtitle">
                  This is a conference and this is what I want to say about it
                  at the moment, but I may change
                </p>
                <Video url="https://www.youtube.com/embed/Z1gWfvPXDQo"></Video>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">
                  Another video title goes here
                  <br />
                  <span class="subtitle is-small" title="Watched on">
                    {" "}
                    <FontAwesomeIcon
                      icon={faEye}
                      size="xs"
                    ></FontAwesomeIcon>{" "}
                    5/1/2020
                  </span>
                </p>
                <p class="subtitle">
                  This is a conference and this is what I want to say about it
                  at the moment, but I may change
                </p>
                <Video url="https://www.youtube.com/embed/Z1gWfvPXDQo"></Video>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ConferencesPage
