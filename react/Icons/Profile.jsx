// Automatically created, please run `scripts/generate-svgr-icon.sh /Users/vdnj/Documents/CozyCloud/cozy-ui/assets/icons/ui/permissions/profile.svg` to regenerate;
import React from 'react'

function SvgProfile(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <defs>
        <path
          id="profile_svg__a"
          d="M46 23c0 12.704-10.298 23-23 23C10.296 46 0 35.704 0 23 0 10.3 10.296 0 23 0c12.702 0 23 10.3 23 23z"
        />
      </defs>
      <g transform="translate(1 1)" fill="none" fillRule="evenodd">
        <mask id="profile_svg__b" fill="#fff">
          <use xlinkHref="#profile_svg__a" />
        </mask>
        <use fill="#d6d8da" xlinkHref="#profile_svg__a" />
        <path
          fill="#5d6165"
          d="M23 27c-5.523 0-10-4.701-10-10.5S17.477 6 23 6s10 4.701 10 10.5S28.523 27 23 27zm0 38c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18z"
          mask="url(#profile_svg__b)"
        />
      </g>
    </svg>
  )
}

export default SvgProfile
