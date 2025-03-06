// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/twake/illus/chat.svg` to regenerate;
import React from 'react'

function SvgChat(props) {
  return (
    <svg viewBox="0 0 33 33" fill="none" {...props}>
      <g clipPath="url(#chat_svg__clip0_11347_30938)">
        <rect
          x={0.704}
          y={0.704}
          width={32.017}
          height={32.017}
          rx={10.574}
          fill="#fff"
        />
        <rect
          x={0.704}
          y={0.704}
          width={32.017}
          height={32.017}
          rx={10.574}
          fill="url(#chat_svg__paint0_linear_11347_30938)"
        />
        <g filter="url(#chat_svg__filter0_d_11347_30938)">
          <path
            d="M16.704 7.398c5.861 0 10.613 4.104 10.613 9.165 0 5.062-4.752 9.165-10.613 9.165a12.12 12.12 0 01-3.433-.49c-1.204.936-3.07 1.722-5.6 2.356a.484.484 0 01-.54-.706l.18-.329c.84-1.545 1.364-2.813 1.572-3.802-1.733-1.63-2.791-3.806-2.791-6.194 0-5.061 4.751-9.165 10.612-9.165z"
            fill="#fff"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="chat_svg__paint0_linear_11347_30938"
          x1={5.031}
          y1={30.092}
          x2={30.745}
          y2={0.704}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8135FE" />
          <stop offset={1} stopColor="#E8A6FF" />
        </linearGradient>
        <clipPath id="chat_svg__clip0_11347_30938">
          <path
            fill="#fff"
            transform="translate(.704 .704)"
            d="M0 0h32v32H0z"
          />
        </clipPath>
        <filter
          id="chat_svg__filter0_d_11347_30938"
          x={4.459}
          y={6.092}
          width={24.49}
          height={23.476}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={0.327} />
          <feGaussianBlur stdDeviation={0.816} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_11347_30938"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_11347_30938"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgChat
