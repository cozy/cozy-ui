import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import Icon, { iconPropType } from '../Icon'
import Text, { SubTitle } from '../Text'

const Infos = ({ actionButton, icon, isImportant, text, className, title }) => {
  return (
    <div
      className={cx(
        styles['Infos'],
        'u-p-1',
        'u-stack-m',
        isImportant ? 'u-bg-chablis' : 'u-bg-paleGrey',
        className
      )}
    >
      {!!title && (
        <SubTitle
          className={cx({
            'u-pomegranate': isImportant
          })}
        >
          {title}
        </SubTitle>
      )}
      <div className={cx('u-flex', 'u-w-100')}>
        {icon && (
          <Icon
            icon={icon}
            className={cx(
              styles['Infos__icon'],
              'u-w-1',
              'u-h-1',
              'u-flex-shrink-0'
            )}
          />
        )}
        <Text
          className={cx('u-ta-left', {
            ['u-pl-half']: icon !== null
          })}
        >
          {text}
        </Text>
      </div>
      {!!actionButton && <div className="u-flex-shrink-0">{actionButton}</div>}
    </div>
  )
}

Infos.defaultProps = {
  icon: null
}

Infos.propTypes = {
  /** A button that will be rendered at the bottom */
  actionButton: PropTypes.element,
  /** An icon to display at the left of the text */
  icon: iconPropType,
  /** An important information will be displayed with red colors */
  isImportant: PropTypes.bool,
  /** Can be either a Text, or an element (for instance a ReactMardown component) */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.string
}
export default Infos
