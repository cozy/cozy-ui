import cx from 'classnames'
import React from 'react'

import styles from './styles.styl'
import { components } from '../../../SelectBox'
import Typography from '../../../Typography'
import GroupCreation from '../GroupCreation'

const Menu = ({ children, selectProps, className, ...props }) => {
  const { createGroup, ...restSelectProps } = selectProps

  return (
    <components.Menu
      {...props}
      className={cx(className, styles['menu'])}
      selectProps={restSelectProps}
    >
      <Typography variant="body1" component="div">
        {children}
        <GroupCreation createGroup={createGroup} />
      </Typography>
    </components.Menu>
  )
}

export default Menu
