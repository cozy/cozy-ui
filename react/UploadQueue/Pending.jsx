import React from 'react'

import Typography from '../Typography'
import { translate } from '../providers/I18n'

const Pending = translate()(props => (
  <Typography variant="subtitle1" color="primary">
    {props.t('item.pending')}
  </Typography>
))

export default Pending
