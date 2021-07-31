import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function BackButton(props) {
  return (
    <Svg
      {...props}
      width={32}
      height={16}
      viewBox="0 0 32 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="true">
      <Path
        d="M1.034 7.556a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L3.155 8.263l5.657-5.657a1 1 0 00-1.414-1.414L1.034 7.556zm30.15-.293H1.74v2h29.443v-2z"
        fill={props.color}
      />
    </Svg>
  );
}

export default BackButton;
