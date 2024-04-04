import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Snackbar from '../../Snackbar'
import Alert from '../../Alert'
import { useI18n } from '../../providers/I18n'

import withListItemLocales from '../hoc/withListItemLocales'
import ExpandedAttribute from './ExpandedAttribute'
import { makeAttrsLabelAndValueExtended } from './helpers'

const ExpandedAttributes = ({ doc, expandedAttributes }) => {
  const { t, f, lang } = useI18n()
  const [alertProps, setAlertProps] = useState({
    open: false,
    severity: 'primary',
    message: ''
  })

  const attrslabelAndValueExtended = makeAttrsLabelAndValueExtended({
    doc,
    expandedAttributes,
    t,
    f,
    lang
  })

  const handleClose = () => setAlertProps({ open: false })

  return (
    <>
      {attrslabelAndValueExtended.map(({ valueExtended, label }, index) => {
        return (
          <ExpandedAttribute
            key={index}
            label={label}
            value={valueExtended}
            setAlertProps={setAlertProps}
          />
        )
      })}
      {alertProps.open && (
        <Snackbar open onClose={handleClose}>
          <Alert
            variant="filled"
            severity={alertProps.severity}
            onClose={handleClose}
          >
            {alertProps.message}
          </Alert>
        </Snackbar>
      )}
    </>
  )
}

ExpandedAttributes.propTypes = {
  doc: PropTypes.object,
  expandedAttributes: PropTypes.array
}

export default withListItemLocales(ExpandedAttributes)
