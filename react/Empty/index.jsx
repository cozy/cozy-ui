import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Text, MainTitle } from '../Text'
import Icon, { iconPropType } from '../Icon'
import styles from './styles.styl'

export const Empty = ({ icon, title, text, children, className }) => {
  return (
    <div className={cx(styles['c-empty'], className)}>
      <Icon
        className={styles['c-empty-img']}
        icon={icon}
        width="100%"
        height="100%"
      />
      {title && (
        <MainTitle tag="h2" className={styles['c-empty-title']}>
          {title}
        </MainTitle>
      )}
      {text && (
        <Text tag="p" className={styles['c-empty-text']}>
          {text}
        </Text>
      )}
      <div className={styles['c-empty-text']}>{children}</div>
    </div>
  )
}

Empty.propTypes = {
  icon: iconPropType.isRequired,
  title: PropTypes.node.isRequired,
  text: PropTypes.node,
  className: PropTypes.string
}

export default Empty
