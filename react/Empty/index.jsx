import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Icon, { iconPropType } from '../Icon'
import Typography from '../Typography'

import styles from './styles.styl'

export const Empty = ({
  icon,
  iconSize,
  title,
  text,
  children,
  className,
  centered,
  ...restProps
}) => {
  const isReactIconElement = typeof icon === 'object' && !!icon.props

  return (
    <div
      className={cx(
        styles['c-empty'],
        { [styles['c-empty--centered']]: centered },
        className
      )}
      {...restProps}
    >
      {icon &&
        (isReactIconElement ? (
          React.cloneElement(icon, {
            className: cx(
              styles['c-empty-img'],
              {
                [styles[`c-empty-img--${iconSize}`]]: iconSize !== 'normal'
              },
              icon.props?.className
            ),
            size: icon.props?.size || (icon.type === Icon ? '100%' : undefined)
          })
        ) : (
          <Icon
            className={cx(styles['c-empty-img'], {
              [styles[`c-empty-img--${iconSize}`]]: iconSize !== 'normal'
            })}
            icon={icon}
            size="100%"
          />
        ))}
      {title && (
        <Typography gutterBottom variant="h3" color="textPrimary">
          {title}
        </Typography>
      )}
      {text && <EmptySubTitle gutterBottom>{text}</EmptySubTitle>}
      <div className={styles['c-empty-text']}>{children}</div>
    </div>
  )
}

Empty.propTypes = {
  icon: iconPropType,
  iconSize: PropTypes.oneOf(['normal', 'medium', 'large']),
  title: PropTypes.node,
  text: PropTypes.node,
  /** Sets horizontal and vertical centring. The reference element is that of a fixed position */
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
}

Empty.defaultProps = {
  iconSize: 'normal'
}

export const EmptySubTitle = ({ ...restProps }) => (
  <Typography variant="body1" color="textSecondary" {...restProps} />
)

export default Empty
