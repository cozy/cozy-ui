// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/illus/file-type-pdf.svg` to regenerate
import React from 'react'

import SvgFileTypePdfTwake from './FileTypePdf_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgFileTypePdf(props) {
  if (isTwakeTheme()) return SvgFileTypePdfTwake(props)
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#FCD0D5"
          d="M3 2.002C3 .896 3.89 0 4.997 0H22l7 7v22.996A2 2 0 0127.003 32H4.997A1.995 1.995 0 013 29.998V2.002z"
        />
        <path
          fill="#F1132D"
          d="M21.5 0c-.276 0-.5.23-.5.5V8h7.5c.276 0 .5-.232.5-.5V7l-7-7h-.5zM9 11h14v2H9v-2zm0 4h12v2H9v-2zm.066 4.784h1.904c.283 0 .548.028.796.084.248.056.464.15.648.28.184.13.33.304.436.52.107.216.16.481.16.796 0 .304-.055.568-.164.792a1.54 1.54 0 01-.444.552 1.89 1.89 0 01-.648.32 2.87 2.87 0 01-.784.104h-.728V25H9.066v-5.216zm1.832 2.512c.64 0 .96-.277.96-.832 0-.272-.081-.464-.244-.576-.163-.112-.401-.168-.716-.168h-.656v1.576h.656zm3.016-2.512h1.472c.4 0 .76.05 1.08.152.32.101.595.257.824.468.23.21.405.479.528.804.123.325.184.712.184 1.16 0 .448-.061.837-.184 1.168-.123.33-.296.604-.52.82a2.137 2.137 0 01-.804.484c-.312.107-.66.16-1.044.16h-1.536v-5.216zm1.4 4.264c.224 0 .427-.03.608-.088.181-.059.336-.153.464-.284a1.33 1.33 0 00.3-.516 2.5 2.5 0 00.108-.792c0-.31-.036-.57-.108-.78a1.263 1.263 0 00-.3-.504 1.092 1.092 0 00-.464-.268 2.152 2.152 0 00-.608-.08h-.224v3.312h.224zm3.68-4.264h3.288v.992H20.17v1.208h1.808v.992H20.17V25h-1.176v-5.216z"
        />
      </g>
    </svg>
  )
}

export default SvgFileTypePdf
