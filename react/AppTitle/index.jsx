import Typography from '@material-ui/core/Typography'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'

export const AppTitle = ({ children, tag, className, ...restProps }) => {
  return (
    <Typography
      component={tag}
      variant="h4"
      className={cx(styles['c-apptitle'], className)}
      {...restProps}
    >
      {children}
    </Typography>
  )
}

AppTitle.propTypes = {
  className: PropTypes.string
}

AppTitle.defaultProps = {
  tag: 'h1'
}

export default AppTitle
