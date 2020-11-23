import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Icon, { iconPropType } from '../Icon'
import styles from './styles.styl'
import Typography from '../Typography'
import Stack from '../Stack'

export const Empty = ({
  icon,
  title,
  text,
  children,
  className,
  ...restProps
}) => {
  return (
    <div className={cx(styles['c-empty'], className)} {...restProps}>
      <Icon
        className={styles['c-empty-img']}
        icon={icon}
        width="100%"
        height="100%"
      />
      <Stack spacing="xs">
        {title && (
          <Typography variant="h3" color="textPrimary">
            {title}
          </Typography>
        )}
        {text && <EmptySubTitle>{text}</EmptySubTitle>}
        <div className={styles['c-empty-text']}>{children}</div>
      </Stack>
    </div>
  )
}

Empty.propTypes = {
  icon: iconPropType.isRequired,
  title: PropTypes.node.isRequired,
  text: PropTypes.node,
  className: PropTypes.string
}

export const EmptySubTitle = ({ ...restProps }) => (
  <Typography variant="body1" color="textSecondary" {...restProps} />
)

export default Empty
