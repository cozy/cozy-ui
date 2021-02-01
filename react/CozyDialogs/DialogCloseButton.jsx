import React from 'react'
import PropTypes from 'prop-types'

import IconButton from 'cozy-ui/transpiled/react/IconButton'
import Icon from 'cozy-ui/transpiled/react/Icon'
import styles from './styles.styl'

import CrossMediumIcon from 'cozy-ui/transpiled/react/Icons/CrossMedium'

const CloseButton = ({ onClick, ...props }) => {
  return (
    <div className={styles.DialogCloseButton}>
      <IconButton onClick={onClick} {...props}>
        <Icon icon={CrossMediumIcon} />
      </IconButton>
    </div>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CloseButton
