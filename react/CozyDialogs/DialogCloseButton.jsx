import React from 'react'
import PropTypes from 'prop-types'

import IconButton from 'cozy-ui/transpiled/react/IconButton'
import Icon from 'cozy-ui/transpiled/react/Icon'
import styles from './styles.styl'

import CrossMediumIcon from 'cozy-ui/transpiled/react/Icons/CrossMedium'

const CloseButton = ({ onClick, ...props }) => {
  return (
    <IconButton
      onClick={onClick}
      className={styles.DialogCloseButton}
      {...props}
    >
      <Icon icon={CrossMediumIcon} />
    </IconButton>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CloseButton
