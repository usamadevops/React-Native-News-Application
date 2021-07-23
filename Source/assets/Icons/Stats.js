import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function StatsIcon(props) {
  return (
    <Svg
      {...props}
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="true">
      <Path
        d="M18.333 1.833H3.667a1.833 1.833 0 00-1.834 1.834v14.666a1.833 1.833 0 001.834 1.834h14.666a1.833 1.833 0 001.834-1.834V3.667a1.833 1.833 0 00-1.834-1.834zM8.25 15.583a.916.916 0 01-1.833 0V13.75a.917.917 0 111.833 0v1.833zm3.667 0a.917.917 0 01-1.834 0v-5.5a.917.917 0 011.834 0v5.5zm3.666 0a.917.917 0 01-1.833 0V6.417a.917.917 0 011.833 0v9.166z"
        fill={props.color}
      />
    </Svg>
  );
}

export default StatsIcon;
