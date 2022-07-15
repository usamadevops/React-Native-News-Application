import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const SmallCardSK = (props) => (
  <ContentLoader 
    speed={0.2}
    width={364}
    height={85}
    viewBox="0 0 364 85"
    backgroundColor="#babdb6"
    foregroundColor="#d3d7cf"
    {...props}
  >
    <Path d="M 0 0 h 224 v 16 H 0 z M 0 26 h 255 v 16 H 0 z M 0 52 h 164 v 16 H 0 z" /> 
    <Rect x="279" y="0" rx="5" ry="5" width="85" height="85" />
  </ContentLoader>
)

export default SmallCardSK

