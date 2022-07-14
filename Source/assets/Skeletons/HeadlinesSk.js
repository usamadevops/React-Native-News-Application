import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const HeadlinesSk = (props) => (
  <ContentLoader 
    speed={0.2}
    width={360}
    height={215}
    viewBox="0 0 360 215"
    backgroundColor="#babdb6"
    foregroundColor="#d3d7cf"
    {...props}
  >
    <Rect x="0" y="0" rx="5" ry="5" width="360" height="135" /> 
    <Path d="M 0 159 h 272 v 16 H 0 z M 0 181 h 331 v 14 H 0 z M 0 201 h 223 v 14 H 0 z" />
  </ContentLoader>
)

export default HeadlinesSk

