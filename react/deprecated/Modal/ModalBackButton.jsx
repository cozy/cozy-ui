import cx from 'classnames'
import React from 'react'

import styles from './styles.styl'
import PreviousIcon from '../../Icons/Previous'
import useBreakpoints from '../../providers/Breakpoints'
import Button from '../Button'

const DumbModalBackButton = props => {
  const { isMobile } = useBreakpoints()
  const { className, ...rest } = props

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

const ModalBackButton = DumbModalBackButton

export default ModalBackButton
