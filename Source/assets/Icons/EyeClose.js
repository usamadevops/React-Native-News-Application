import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function EyeClose(props) {
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
        d="M2.023 9.552s3.209 3.667 9.167 3.667 9.167-3.667 9.167-3.667M3.857 11.06l-1.834 2.159M20.357 13.219l-1.83-2.156M8.361 12.925l-.838 2.585M13.998 12.933l.859 2.577"
        stroke="#0077B6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EyeClose;
