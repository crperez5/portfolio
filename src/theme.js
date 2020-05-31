export default {
  mixins: {
    from: (device, content) => `
    @media screen and (min-width: ${device}) {
        ${content}
    }`,
  },
}
