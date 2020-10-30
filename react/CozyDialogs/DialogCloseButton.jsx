import React from 'react'
import PropTypes from 'prop-types'

import IconButton from 'cozy-ui/transpiled/react/IconButton'
import Icon from 'cozy-ui/transpiled/react/Icon'
import styles from './styles.styl'

const CloseButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} className={styles.DialogCloseButton}>
      <Icon icon="cross-medium" />
    </IconButton>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CloseButton
