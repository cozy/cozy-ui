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
        'u-flex',
        'u-flex-column',
        'u-maw-6',
        'u-mih-2',
        'u-bdrs-4',
        'u-p-1',
        'u-bg-paleGrey',
        'u-ta-left',
        {
          'u-bg-chablis': isImportant
        },
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
      <div
        className={cx('u-flex', 'u-w-100', 'u-mt-1', {
          'u-mb-1': !!actionButton
        })}
      >
        {icon && (
          <Icon
            icon={icon}
            className={cx(
              styles['infos--icon'],
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
      <div className="u-flex-shrink-0">{!!actionButton && actionButton}</div>
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
  text: PropTypes.string,
  title: PropTypes.string
}
export default Infos
