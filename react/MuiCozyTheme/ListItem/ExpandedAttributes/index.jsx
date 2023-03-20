import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Snackbar from '../../../Snackbar'
import Alert from '../../../Alert'
import { withListItemLocales } from '../hoc/withListItemLocales'
import ExpandedAttribute from './ExpandedAttribute'
import { useI18n } from '../../../I18n'
import { makeAttrsKeyAndFormatedValue } from './helpers'

const ExpandedAttributes = ({ doc, expandedAttributes }) => {
  const { t, f, lang } = useI18n()
  const [alertProps, setAlertProps] = useState({
    open: false,
    severity: 'primary',
    message: ''
  })

  const attrsKeyAndFormatedValue = makeAttrsKeyAndFormatedValue({
    doc,
    expandedAttributes,
    f,
    lang
  })

  const handleClose = () => setAlertProps({ open: false })

  return (
    <>
      {attrsKeyAndFormatedValue.map(({ attrKey, attrFormatedValue }, index) => {
        const label = t(`ListItem.attributes.${attrKey}`)

        return (
          <ExpandedAttribute
            key={index}
            label={label}
            value={attrFormatedValue}
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
