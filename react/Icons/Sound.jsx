// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/sound.svg` to regenerate
import React from 'react'

import SvgSoundTwake from './Sound_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgSound(props) {
  if (isTwakeTheme()) return SvgSoundTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M7.937 13.323a.718.718 0 01-.72.719.72.72 0 01-.46-.166l-3.939-3.258H.72A.72.72 0 010 9.9V7.034a.72.72 0 01.72-.72h2.098l3.939-3.257a.72.72 0 011.18.554v9.712zm2.769-1.124a.72.72 0 01-.561-.209l-.097-.096a.718.718 0 01-.07-.937c.54-.726.825-1.587.825-2.49 0-.971-.323-1.882-.935-2.634a.718.718 0 01.05-.962l.096-.096a.722.722 0 011.067.053 5.681 5.681 0 011.297 3.64 5.705 5.705 0 01-1.147 3.444.721.721 0 01-.525.287zm2.978 2.222a.722.722 0 01-1.06.045l-.094-.094a.718.718 0 01-.042-.972 7.669 7.669 0 001.802-4.933 7.648 7.648 0 00-1.93-5.08.718.718 0 01.03-.985l.094-.094a.721.721 0 011.049.03 9.212 9.212 0 012.332 6.13 9.23 9.23 0 01-2.18 5.953z" />
    </svg>
  )
}

export default SvgSound
