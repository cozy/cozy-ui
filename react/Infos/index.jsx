import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import Icon, { iconPropType } from '../Icon'
import Text from '../Text'

const Infos = ({ icon, text, className }) => {
  return (
    <div className={cx(styles['infos'], 'u-p-1', className)}>
      <div className={styles['infos--container']}>
        {icon && <Icon icon={icon} className={styles['infos--icon']} />}
        <Text
          className={cx(styles['infos--text'], {
            ['u-pl-half']: icon !== null
          })}
        >
          {text}
        </Text>
      </div>
    </div>
  )
}

Infos.defaultProps = {
  icon: null
}

Infos.propTypes = {
  icon: iconPropType,
  text: PropTypes.string
}
export default Infos
