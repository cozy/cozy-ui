import React from 'react'
import AccordionSummary from '@material-ui/core/AccordionSummary'

import AccordionExpandIcon from './AccordionExpandIcon'

AccordionSummary.defaultProps = {
  expandIcon: <AccordionExpandIcon />
}

export default AccordionSummary
