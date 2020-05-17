import React from "react"

const reqSvgs = require.context("!svg-react-loader?!../images/icons", true, /\.svg$/)

const svgMap = reqSvgs.keys().reduce((images, path) => {
  const key = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."))
  images[key] = reqSvgs(path).default
  return images
}, {})

const Icon = ({ icon, fill, width, height }) => {
  const Svg = svgMap[icon]

  return <Svg fill={fill} width={width} height={height} />
}

export default Icon
