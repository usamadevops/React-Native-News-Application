import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Bookmark(props) {
  return (
    <Svg
      width={16}
      height={19}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.768 18.85A.75.75 0 01.6 18.226V3.989a3 3 0 012.994-3l9-.016A3 3 0 0115.6 3.967v14.259a.75.75 0 01-1.167.624L8.1 14.62l-6.335 4.23h.002zM14.099 3.97l-.01-.177a1.5 1.5 0 00-1.491-1.323l-9 .015a1.5 1.5 0 00-1.497 1.5v12.836l5.583-3.73a.75.75 0 01.832 0l5.585 3.73V3.972h-.002z"
        fill="#0077B6"
      />
    </Svg>
  );
}

export default Bookmark;
