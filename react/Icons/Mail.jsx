// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/illus/mail.svg` to regenerate;
import React from 'react'

function SvgMail(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <rect
        width={32}
        height={32}
        rx={10}
        fill="url(#mail_svg__paint0_linear_3096_880)"
      />
      <g filter="url(#mail_svg__filter0_d_3096_880)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.585 11.774a3.048 3.048 0 00-1.2 2.423v8.7a3.658 3.658 0 003.658 3.658H22.94a3.658 3.658 0 003.658-3.658v-8.7c0-.95-.444-1.847-1.2-2.423L17.84 6.009a3.048 3.048 0 00-3.697 0l-7.558 5.764zm1.157 2.07v9.18c0 .674.546 1.22 1.22 1.22h14.06a1.22 1.22 0 001.219-1.22v-9.18l-6.85 4.798a2.439 2.439 0 01-2.798 0l-6.851-4.798z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          id="mail_svg__paint0_linear_3096_880"
          x1={4.487}
          y1={28.638}
          x2={31.249}
          y2={1.55}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E91FF" />
          <stop offset={0.997} stopColor="#2ED9FF" />
        </linearGradient>
        <filter
          id="mail_svg__filter0_d_3096_880"
          x={3.753}
          y={4.079}
          width={24.477}
          height={24.434}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={0.326} />
          <feGaussianBlur stdDeviation={0.816} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3096_880"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_3096_880"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgMail
