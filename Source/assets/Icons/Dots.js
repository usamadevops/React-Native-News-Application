import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

function Dots(props) {
  return (
    <Svg
      {...props}
      width={24}
      height={6}
      viewBox="0 0 24 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="true">
      <Circle cx={3} cy={3} r={3} fill={props.color} />
      <Circle cx={12} cy={3} r={3} fill={props.color} />
      <Circle cx={21} cy={3} r={3} fill={props.color} />
    </Svg>
  );
}

export default Dots;
