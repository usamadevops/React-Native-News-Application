import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SearchIcon(props) {
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
        d="M9.167 16.5a7.333 7.333 0 100-14.667 7.333 7.333 0 000 14.667zM19.9 19.9a.915.915 0 01-1.3 0l-4.29-4.317c.47-.375.898-.802 1.273-1.274l4.29 4.29a.917.917 0 01.028 1.302z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SearchIcon;
