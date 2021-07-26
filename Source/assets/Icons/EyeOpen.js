import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function EyeOpen(props) {
  return (
    <Svg
      {...props}
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="true">
      <Path
        d="M21.78 10.967c.474.62.474 1.457 0 2.076-1.493 1.949-5.075 5.962-9.257 5.962-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 010-2.076c1.493-1.95 5.075-5.962 9.257-5.962 4.182 0 7.764 4.013 9.257 5.962v0z"
        stroke="#0077B6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.523 15.005a3 3 0 100-6 3 3 0 000 6z"
        stroke="#0077B6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EyeOpen;
