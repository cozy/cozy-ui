import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const sparseStyle = styles['Stack--sparse']
const denseStyle = styles['Stack--dense']

const Stack = ({ spacing, ...props }) => {
  return (
    <div
      {...props}
      className={cx(props.className, styles.Stack, {
        [sparseStyle]: spacing === 'sparse',
        [denseStyle]: spacing === 'dense'
      })}
    />
  )
}

Stack.propTypes = {
  spacing: PropTypes.oneOf(['sparse', 'dense'])
}

export default Stack
