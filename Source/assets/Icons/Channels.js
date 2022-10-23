import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Channels = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    focusable="true"
  >
    <Path
      d="M3.75 6.83a1.497 1.497 0 1 0 0 2.994 1.497 1.497 0 0 0 0-2.994Zm0-1.5c-.165 0-.328.014-.487.038A3.75 3.75 0 0 1 6.75 3h10.5A3.75 3.75 0 0 1 21 6.75v10.5A3.75 3.75 0 0 1 17.25 21H6.75A3.75 3.75 0 0 1 3 17.25v-6.02a3.004 3.004 0 0 0 3.747-2.905A2.997 2.997 0 0 0 3.75 5.33Zm4.5 4.42a.75.75 0 0 0 .75.75h6A.75.75 0 0 0 15 9H9a.75.75 0 0 0-.75.75Zm0 4.5A.75.75 0 0 0 9 15h3.921a.75.75 0 0 0 0-1.5h-3.92a.75.75 0 0 0-.75.75Z"
      fill={props.color}
    />
  </Svg>
)

export default Channels
