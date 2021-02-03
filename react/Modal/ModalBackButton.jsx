import React from 'react'
import cx from 'classnames'
import { Button } from '../Button'
import withBreakpoints from '../helpers/withBreakpoints'
import styles from './styles.styl'

import PreviousIcon from '../Icons/Previous'

const DumbModalBackButton = props => {
  const {
    breakpoints: { isMobile },
    className,
    ...rest
  } = props

  return (
    <Button
      icon={PreviousIcon}
      iconOnly
      extension="narrow"
      theme="text"
      label="back"
      className={cx(
        styles['c-modal-back-button'],
        'u-m-0 u-pos-absolute',
        {
          'u-p-1': isMobile,
          'u-p-half': !isMobile,
          'u-h-3': isMobile
        },
        className
      )}
      {...rest}
    />
  )
}

const ModalBackButton = withBreakpoints()(DumbModalBackButton)

export default ModalBackButton
