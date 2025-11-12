// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/tmail.svg` to regenerate;
import React from 'react'

function SvgTmail(props) {
  return (
    <svg fill="none" viewBox="0 0 32 32" {...props}>
      <rect width={32} height={32} fill="url(#tmail_svg__a)" rx={10.568} />
      <g filter="url(#tmail_svg__b)">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M6.585 11.774a3.05 3.05 0 00-1.2 2.423v8.7a3.66 3.66 0 003.658 3.658H22.94a3.66 3.66 0 003.657-3.658v-8.7c0-.95-.444-1.847-1.2-2.423L17.84 6.009a3.05 3.05 0 00-3.697 0zm1.157 2.07v9.18c0 .674.546 1.22 1.22 1.22h14.06a1.22 1.22 0 001.22-1.22v-9.18l-6.852 4.798a2.44 2.44 0 01-2.797 0z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient
          id="tmail_svg__a"
          x1={4.487}
          x2={31.249}
          y1={28.638}
          y2={1.55}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1e91ff" />
          <stop offset={0.997} stopColor="#2ed9ff" />
        </linearGradient>
        <filter
          id="tmail_svg__b"
          width={24.477}
          height={24.434}
          x={3.753}
          y={4.08}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={0.326} />
          <feGaussianBlur stdDeviation={0.816} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_12591_86"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_12591_86"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgTmail
