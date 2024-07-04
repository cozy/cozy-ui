import React from 'react'
import PropTypes from 'prop-types'
import MuiBackdrop from '@material-ui/core/Backdrop'
import cx from 'classnames'

import { makeStyles } from '../styles'

const useStyles = makeStyles({
  isOver: {
    zIndex: 'calc(var(--zIndex-modal-toolbar) + 1)' // to be over a modal if used inside it
  }
})

const Backdrop = ({ isOver, ...props }) => {
  const styles = useStyles()

  return (
    <MuiBackdrop
      {...props}
      className={cx({ [styles.isOver]: isOver }, props.className)}
    />
  )
}

Backdrop.propTypes = {
  /** Whether the Backdrop is over modal */
  isOver: PropTypes.bool
}

export default Backdrop
