import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Tick(props) {
  return (
    <Svg
      {...props}
      width={16}
      height={12}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="true">
      <Path
        d="M15.092.749a1.375 1.375 0 01.055 1.943l-7.791 8.25a1.374 1.374 0 01-1.971.027L1.26 6.846A1.375 1.375 0 013.203 4.9L6.33 8.025l6.82-7.221a1.375 1.375 0 011.943-.055z"
        fill="#0077B6"
      />
    </Svg>
  );
}

export default Tick;
