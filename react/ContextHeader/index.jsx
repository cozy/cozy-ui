import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button'
import { Title, Text } from '../Text'
import Icon, { iconPropType } from '../Icon'
import styles from './styles.styl'
import palette from '../palette'
import cx from 'classnames'

const ContextHeader = ({ icon, title, text, onClose, className }) => {
  return (
    <div className={cx(styles['context-header'], className)}>
      {icon && <Icon className={styles['context-header-icon']} icon={icon} />}
      <div className={styles['context-header-content']}>
        <Title ellipsis>{title}</Title>
        {text && <Text ellipsis>{text}</Text>}
      </div>
      {onClose && (
        <Button
          theme="close"
          className={styles['c-modal-close']}
          onClick={onClose}
          extension="narrow"
          type="button"
        >
          <Icon
            icon="cross"
            width="14"
            height="14"
            color={palette['coolGrey']}
          />
        </Button>
      )}
    </div>
  )
}

ContextHeader.propTypes = {
  icon: iconPropType,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  onClose: PropTypes.func,
  className: PropTypes.string
}

export default ContextHeader
