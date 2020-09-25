import React from 'react'
import cx from 'classnames'
import { MainTitle } from '../Text'
import PropTypes from 'prop-types'
import styles from './styles.styl'

export const AppTitle = ({ children, tag, className, ...restProps }) => {
  return (
    <MainTitle
      tag={tag}
      className={cx(styles['c-apptitle'], className)}
      {...restProps}
    >
      {children}
    </MainTitle>
  )
}

AppTitle.propTypes = {
  className: PropTypes.string
}

AppTitle.defaultProps = {
  className: '',
  tag: 'h1'
}

export default AppTitle
