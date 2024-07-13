import Svg, { Path } from 'react-native-svg';
import React from 'react';

export const HomeIcon = ({ color }: { color: string }) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M14.8253 18.9586H5.17533C2.89199 18.9586 1.04199 17.1003 1.04199 14.817V8.64197C1.04199 7.50864 1.74199 6.08364 2.64199 5.38364L7.13366 1.88364C8.48366 0.833637 10.642 0.783637 12.042 1.76697L17.192 5.3753C18.1837 6.06697 18.9587 7.5503 18.9587 8.75864V14.8253C18.9587 17.1003 17.1087 18.9586 14.8253 18.9586ZM7.90033 2.86697L3.40866 6.36697C2.81699 6.83364 2.29199 7.89197 2.29199 8.64197V14.817C2.29199 16.4086 3.58366 17.7086 5.17533 17.7086H14.8253C16.417 17.7086 17.7087 16.417 17.7087 14.8253V8.75864C17.7087 7.95864 17.1337 6.8503 16.4753 6.4003L11.3253 2.79197C10.3753 2.1253 8.80866 2.15864 7.90033 2.86697Z"
        fill={color}
      />
      <Path
        d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V12.5C9.375 12.1583 9.65833 11.875 10 11.875C10.3417 11.875 10.625 12.1583 10.625 12.5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
        fill={color}
      />
    </Svg>
  );
};

export const CartIcon = ({ color }: { color: string }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 8H21"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const CheckoutIcon = ({ color }: { color: string }) => {
  return (
    <Svg width="22" height="34" viewBox="0 0 22 34" fill="none">
      <Path
        d="M16.6738 27.5205H6.91133C6.00383 27.5205 5.133 27.1355 4.51883 26.4663C3.90467 25.7972 3.59301 24.8988 3.66634 23.9913L4.42718 14.8613C4.45468 14.5772 4.35383 14.3022 4.16133 14.0913C3.96883 13.8805 3.703 13.7705 3.41884 13.7705H1.83301C1.45717 13.7705 1.14551 13.4588 1.14551 13.083C1.14551 12.7072 1.45717 12.3955 1.83301 12.3955H3.42801C4.09718 12.3955 4.72967 12.6797 5.17884 13.1655C5.42634 13.4405 5.60967 13.7613 5.7105 14.1188H17.1597C18.0855 14.1188 18.938 14.4855 19.5613 15.1455C20.1755 15.8147 20.4872 16.6855 20.4138 17.6113L19.9188 24.4863C19.818 26.1638 18.3513 27.5205 16.6738 27.5205ZM5.75634 15.4847L5.04134 24.1013C4.99551 24.633 5.16967 25.1372 5.52717 25.5313C5.88467 25.9255 6.37967 26.1363 6.91133 26.1363H16.6738C17.6272 26.1363 18.4888 25.3297 18.5622 24.3763L19.0572 17.5013C19.0938 16.9605 18.9197 16.4472 18.5622 16.0714C18.2047 15.6864 17.7097 15.4755 17.1688 15.4755H5.75634V15.4847Z"
        fill={color}
      />
      <Path
        d="M14.8958 32.1042C13.8875 32.1042 13.0625 31.2792 13.0625 30.2708C13.0625 29.2625 13.8875 28.4375 14.8958 28.4375C15.9042 28.4375 16.7292 29.2625 16.7292 30.2708C16.7292 31.2792 15.9042 32.1042 14.8958 32.1042ZM14.8958 29.8125C14.6392 29.8125 14.4375 30.0142 14.4375 30.2708C14.4375 30.5275 14.6392 30.7292 14.8958 30.7292C15.1525 30.7292 15.3542 30.5275 15.3542 30.2708C15.3542 30.0142 15.1525 29.8125 14.8958 29.8125Z"
        fill={color}
      />
      <Path
        d="M7.56283 32.1042C6.55449 32.1042 5.72949 31.2792 5.72949 30.2708C5.72949 29.2625 6.55449 28.4375 7.56283 28.4375C8.57116 28.4375 9.39616 29.2625 9.39616 30.2708C9.39616 31.2792 8.57116 32.1042 7.56283 32.1042ZM7.56283 29.8125C7.30616 29.8125 7.10449 30.0142 7.10449 30.2708C7.10449 30.5275 7.30616 30.7292 7.56283 30.7292C7.81949 30.7292 8.02116 30.5275 8.02116 30.2708C8.02116 30.0142 7.81949 29.8125 7.56283 29.8125Z"
        fill={color}
      />
      <Path
        d="M19.25 19.2705H8.25C7.87417 19.2705 7.5625 18.9588 7.5625 18.583C7.5625 18.2072 7.87417 17.8955 8.25 17.8955H19.25C19.6258 17.8955 19.9375 18.2072 19.9375 18.583C19.9375 18.9588 19.6258 19.2705 19.25 19.2705Z"
        fill={color}
      />
      <Path
        d="M13.6204 13.2967C13.4937 13.2967 13.3671 13.2501 13.2671 13.1501C13.0737 12.9567 13.0737 12.6367 13.2671 12.4434L16.9604 8.75008L13.2671 5.05674C13.0737 4.86341 13.0737 4.54341 13.2671 4.35008C13.4604 4.15674 13.7804 4.15674 13.9737 4.35008L18.0204 8.39674C18.2137 8.59008 18.2137 8.91008 18.0204 9.10341L13.9737 13.1501C13.8737 13.2501 13.7471 13.2967 13.6204 13.2967Z"
        fill={color}
      />
      <Path
        d="M17.553 9.25H6.33301C6.05967 9.25 5.83301 9.02333 5.83301 8.75C5.83301 8.47667 6.05967 8.25 6.33301 8.25H17.553C17.8263 8.25 18.053 8.47667 18.053 8.75C18.053 9.02333 17.8263 9.25 17.553 9.25Z"
        fill={color}
      />
    </Svg>
  );
};

export const FillStarIcon = () => {
  return (
    <Svg width="18" height="17" viewBox="0 0 17 16" fill="none">
      <Path
        d="M8.76818 0L10.6679 5.84678H16.8156L11.842 9.46029L13.7417 15.3071L8.76818 11.6936L3.79461 15.3071L5.69434 9.46029L0.720778 5.84678H6.86845L8.76818 0Z"
        fill="#FFC657"
      />
    </Svg>
  );
};

export const EmptyStarIcon = () => {
  return (
    <Svg width="18" height="17" viewBox="0 0 17 16" fill="none">
      <Path
        d="M8.53966 1.61803L9.96387 6.00129L10.0761 6.34678H10.4394H15.0482L11.3196 9.05578L11.0257 9.2693L11.138 9.6148L12.5622 13.998L8.83356 11.2891L8.53966 11.0755L8.24577 11.2891L4.51715 13.998L5.94136 9.6148L6.05361 9.2693L5.75972 9.05578L2.0311 6.34678H6.63993H7.0032L7.11546 6.00129L8.53966 1.61803Z"
        stroke="#FFC657"
      />
    </Svg>
  );
};

export const LeftArrow = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.57043 18.8201C9.38043 18.8201 9.19043 18.7501 9.04043 18.6001L2.97043 12.5301C2.68043 12.2401 2.68043 11.7601 2.97043 11.4701L9.04043 5.40012C9.33043 5.11012 9.81043 5.11012 10.1004 5.40012C10.3904 5.69012 10.3904 6.17012 10.1004 6.46012L4.56043 12.0001L10.1004 17.5401C10.3904 17.8301 10.3904 18.3101 10.1004 18.6001C9.96043 18.7501 9.76043 18.8201 9.57043 18.8201Z"
        fill="#2A2A2A"
      />
      <Path
        d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
        fill="#2A2A2A"
      />
    </Svg>
  );
};
