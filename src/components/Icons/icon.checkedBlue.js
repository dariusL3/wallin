import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

const CheckedBlueIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_7458_39270)">
      <Path
        d="M20 0C16.0444 0 12.1776 1.17298 8.8886 3.37061C5.59962 5.56824 3.03617 8.69181 1.52242 12.3463C0.00866572 16.0009 -0.387401 20.0222 0.384303 23.9018C1.15601 27.7814 3.06082 31.3451 5.85787 34.1421C8.65492 36.9392 12.2186 38.844 16.0982 39.6157C19.9778 40.3874 23.9992 39.9913 27.6537 38.4776C31.3082 36.9638 34.4318 34.4004 36.6294 31.1114C38.827 27.8224 40 23.9556 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0V0ZM31.55 13.6667L20.1333 29.15C20.0005 29.331 19.8324 29.4834 19.6393 29.5978C19.4461 29.7123 19.2317 29.7866 19.0091 29.8161C18.7866 29.8457 18.5603 29.83 18.3439 29.7699C18.1275 29.7099 17.9255 29.6067 17.75 29.4667L9.60001 22.95C9.4288 22.8125 9.28646 22.6424 9.18117 22.4497C9.07588 22.257 9.00971 22.0454 8.98648 21.827C8.96325 21.6086 8.98341 21.3878 9.04579 21.1772C9.10818 20.9666 9.21157 20.7705 9.35001 20.6C9.62695 20.2639 10.0244 20.0496 10.4574 20.0029C10.8904 19.9562 11.3244 20.0808 11.6667 20.35L18.4667 25.7833L28.8667 11.6667C29.1291 11.3152 29.5195 11.0814 29.9531 11.0159C30.3868 10.9504 30.8288 11.0584 31.1833 11.3167C31.3634 11.4456 31.5159 11.6091 31.632 11.7976C31.7481 11.9862 31.8255 12.196 31.8597 12.4147C31.8938 12.6335 31.884 12.8569 31.8308 13.0719C31.7777 13.2868 31.6822 13.489 31.55 13.6667Z"
        fill="#1A73E8"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_7458_39270">
        <Rect width={40} height={40} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CheckedBlueIcon;
