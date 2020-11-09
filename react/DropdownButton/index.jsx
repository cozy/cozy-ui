import React from 'react'
import cx from 'classnames'
import styles from './styles.styl'
import Icon from '../Icon'

import BottomIcon from 'cozy-ui/transpiled/react/Icons/Bottom'

const DropdownButton = React.forwardRef(
  ({ children, className, ...props }, ref) => (
    <button
      role="button"
      className={cx(styles['c-DropdownButton'], className)}
      ref={ref}
      {...props}
    >
      {children}
      <Icon
        icon={BottomIcon}
        size="12"
        className={styles['c-DropdownButton-Icon']}
      />
    </button>
  )
)

export default DropdownButton
