import AccordionSummary from '@material-ui/core/AccordionSummary'
import React from 'react'

import AccordionExpandIcon from './AccordionExpandIcon'

AccordionSummary.defaultProps = {
  expandIcon: <AccordionExpandIcon />
}

export default AccordionSummary
