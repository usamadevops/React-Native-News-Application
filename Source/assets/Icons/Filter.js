import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Filter = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.4 3.6V2s2.672-.8 5.6-.8c2.928 0 5.6.8 5.6.8v1.6l-4 5.624V14.8s-.976-.072-1.8-.472c-.824-.4-1.4-1.128-1.4-1.128V9.224L2.4 3.6Z"
      fill="#000"
    />
  </Svg>
)

export default Filter
