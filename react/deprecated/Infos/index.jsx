import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../../Icon'
import IconButton from '../../IconButton'
import CrossIcon from '../../Icons/Cross'
import Stack from '../../Stack'
import Typography from '../../Typography'
import createDepreciationLogger from '../../helpers/createDepreciationLogger'

import styles from './styles.styl'

export const Infos = ({
  description,
  action,
  dismissAction,
  dismissButtonProps,
  theme,
  className
}) => {
  return (
    <div className={cx(styles['Infos'], styles[`Infos--${theme}`], className)}>
      <Stack spacing="m">
        <div className={styles['Infos-description']}>
          <Stack spacing="xs">{description}</Stack>
        </div>
        {action && <div>{action}</div>}
      </Stack>
      {dismissAction && (
        <div className={styles['Info-close']}>
          <IconButton
            size="medium"
            onClick={dismissAction}
            {...dismissButtonProps}
          >
            <Icon icon={CrossIcon} size="12" />
          </IconButton>
        </div>
      )}
    </div>
  )
}

Infos.propTypes = {
  /** The textual part of the info, including titles */
  description: PropTypes.element.isRequired,
  /** One or more call to actions */
  action: PropTypes.element,
  /** If supplied, displays a cross in the top right corner that calls the prop when clicked */
  dismissAction: PropTypes.func,
  /** Extra classnames to apply to the root element */
  className: PropTypes.string,
  /** Controls the background color of the component */
  theme: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  /** Props for dismiss button */
  dismissButtonProps: PropTypes.object
}

Infos.defaultProps = {
  theme: 'primary'
}

const logInfosDepecrated = createDepreciationLogger()
const InfosMigration = React.memo(function InfosMigration(props) {
  const isUsingDeprecatedProps =
    props.actionButton ||
    props.icon ||
    props.isImportant ||
    props.text ||
    props.title
  if (isUsingDeprecatedProps) {
    const {
      title,
      text,
      icon,
      actionButton,
      isImportant,
      ...otherProps
    } = props
    logInfosDepecrated(
      'The Infos component API has changed, using any of the following props is deprecated: title, text, icon, actionButton, isImportant'
    )
    return (
      <Infos
        className="u-maw-6"
        theme={isImportant ? 'danger' : 'secondary'}
        description={
          <>
            {title && (
              <Typography
                variant="h5"
                className={cx({
                  'u-error': isImportant
                })}
              >
                {title}
              </Typography>
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
              {text && (
                <Typography
                  variant="body1"
                  className={cx({
                    ['u-pl-half']: icon !== null
                  })}
                >
                  {text}
                </Typography>
              )}
            </div>
          </>
        }
        action={actionButton}
        {...otherProps}
      />
    )
  } else return <Infos {...props} />
})

export default InfosMigration
