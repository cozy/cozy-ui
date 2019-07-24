import React from 'react'
import cx from 'classnames'
import styles from './styles.styl'

const sparseStyle = styles['Stack--sparse']
const denseStyle = styles['Stack--dense']

const Stack = ({ sparse, dense, ...props }) => {
  return (
    <div
      {...props}
      className={cx(props.className, styles.Stack, {
        [sparseStyle]: sparse,
        [denseStyle]: dense
      })}
    />
  )
}

export default Stack
