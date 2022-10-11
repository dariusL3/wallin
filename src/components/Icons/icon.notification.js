import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const VectorNoty = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.2 17C18.8817 17 18.5765 16.8736 18.3515 16.6485C18.1264 16.4235 18 16.1183 18 15.8V11.912C18.0401 10.3939 17.5391 8.91102 16.5865 7.72832C15.6339 6.54563 14.2918 5.74021 12.8 5.456V3.8C12.8 3.58783 12.7157 3.38434 12.5657 3.23431C12.4157 3.08429 12.2122 3 12 3C11.7878 3 11.5843 3.08429 11.4343 3.23431C11.2843 3.38434 11.2 3.58783 11.2 3.8V5.456C9.70821 5.74021 8.36609 6.54563 7.41349 7.72832C6.46089 8.91102 5.95988 10.3939 6 11.912V15.8C6 16.1183 5.87357 16.4235 5.64853 16.6485C5.42348 16.8736 5.11826 17 4.8 17C4.58783 17 4.38434 17.0843 4.23431 17.2343C4.08429 17.3843 4 17.5878 4 17.8C4 18.0122 4.08429 18.2157 4.23431 18.3657C4.38434 18.5157 4.58783 18.6 4.8 18.6H19.2C19.4122 18.6 19.6157 18.5157 19.7657 18.3657C19.9157 18.2157 20 18.0122 20 17.8C20 17.5878 19.9157 17.3843 19.7657 17.2343C19.6157 17.0843 19.4122 17 19.2 17Z"
      fill="black"
    />
    <Path
      d="M13.792 19.8001H10.208C10.1603 19.8016 10.1147 19.8202 10.0795 19.8525C10.0442 19.8848 10.0217 19.9286 10.016 19.9761C10.0121 20.0507 10.0121 20.1254 10.016 20.2001C10.016 20.7305 10.2267 21.2392 10.6018 21.6143C10.9769 21.9893 11.4856 22.2001 12.016 22.2001C12.5465 22.2001 13.0552 21.9893 13.4302 21.6143C13.8053 21.2392 14.016 20.7305 14.016 20.2001C14.02 20.1254 14.02 20.0507 14.016 19.9761C14.0131 19.9497 14.0049 19.9242 13.992 19.9011C13.9791 19.8779 13.9617 19.8576 13.9409 19.8412C13.92 19.8248 13.8961 19.8128 13.8706 19.8057C13.845 19.7986 13.8183 19.7967 13.792 19.8001Z"
      fill="black"
    />
  </Svg>
);

const NotyIcon = React.memo(({ onPress, style }) => (
  <TouchableOpacity style={style} onPress={() => onPress && onPress()}>
    <VectorNoty />
  </TouchableOpacity>
));

NotyIcon.defaultProps = {
  onPress: undefined,
  style: undefined
};

NotyIcon.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.any
};

export default NotyIcon;