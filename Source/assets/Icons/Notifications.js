import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function NotificationIcon(props) {
  return (
    <Svg
      {...props}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="true">
      <Path
        d="M18.25 14.583h-.917V8.167a7.333 7.333 0 10-14.666 0v6.416H1.75a.917.917 0 100 1.834h4.703a3.667 3.667 0 007.094 0h4.703a.917.917 0 100-1.834zM10 17.333a1.834 1.834 0 01-1.586-.916h3.172a1.834 1.834 0 01-1.586.916z"
        fill={props.color}
      />
    </Svg>
  );
}

export default NotificationIcon;
