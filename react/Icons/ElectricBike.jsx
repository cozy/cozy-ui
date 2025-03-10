// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/electric-bike.svg` to regenerate
import React from 'react'

import SvgElectricBikeTwake from './ElectricBike_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgElectricBike(props) {
  if (isTwakeTheme()) return SvgElectricBikeTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M4.736.17c.018-.053-.012-.11-.075-.143-.088-.046-.212-.032-.276.03L.115 4.15A.345.345 0 000 4.398c0 .232.265.42.593.42h1.592l-.658 3.021c-.011.053.021.106.084.137.09.043.213.027.274-.037l4.011-4.142A.34.34 0 006 3.561c0-.231-.265-.419-.593-.419H3.765L4.736.171zM10.5 5a2 2 0 100-4 2 2 0 000 4zM9.045 7.996a7.202 7.202 0 01-.588-.453L7.221 8.779l1.334.889A1 1 0 019 10.5V14a1 1 0 11-2 0v-2.965L4.68 9.488a1.527 1.527 0 01-.233-2.35l2.204-2.203a1.484 1.484 0 011.05-.435 1.56 1.56 0 011.276.686c.205.297.635.771 1.204 1.164.57.393 1.198.65 1.819.65a1 1 0 110 2c-1.162 0-2.184-.471-2.955-1.004z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 13a3 3 0 11-6 0 3 3 0 016 0zm-1.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6 13a3 3 0 11-6 0 3 3 0 016 0zm-1.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    </svg>
  )
}

export default SvgElectricBike
