import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../deprecated/Button'

const PdfToolbarButton = ({ icon, onClick, disabled, label }) => (
  <Button
    iconOnly
    subtle
    theme="secondary"
    className="u-p-half u-m-half"
    icon={icon}
    onClick={onClick}
    disabled={disabled}
    label={label}
  />
)

PdfToolbarButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired
}

export default PdfToolbarButton
