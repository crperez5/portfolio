import variables from "./_variables.scss"

export default {
  mixins: {
    from: (device, content) => `
    @media screen and (min-width: ${device}px) {
        ${content}
    }`,
    smallScreen: content => `
    @media screen and (min-width: 0) and (max-width: ${variables.tablet}) {
      ${content}
  }
    `,
    mediumScreen: content => `
    @media screen and (min-width: ${variables.tablet}) and (max-width: ${
      variables.desktop}) {
      ${content}
  }
    `,
    mediumLargeScreen: content => `
    @media screen and (min-width: ${variables.desktop}) and (max-width: ${
      variables.widescreen}) {
      ${content}
  }
    `,
    largeScreen: content => `
    @media screen and (min-width: ${variables.widescreen}) and (max-width: ${variables.fullhd}) {
      ${content}
  }
    `,
    extraLargeScreen: content => `
    @media screen and (min-width: ${variables.fullhd}) {
      ${content}
  }
    `,
  },
}
