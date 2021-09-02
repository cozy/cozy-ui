import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Icon, { iconPropType } from '../Icon'
import styles from './styles.styl'
import Typography from '../Typography'
import createDepreciationLogger from '../helpers/createDepreciationLogger'

const depreciationLogger = createDepreciationLogger()

export const Empty = ({
  icon,
  iconSize,
  title,
  text,
  children,
  className,
  layout,
  ...restProps
}) => {
  if (layout) {
    depreciationLogger(`Please add layout=false in the props of the Empty component, and implement the vertical
    centering with a custom layout component. The use of Empty without layout=false is deprecated.`)
  }

  return (
    <div
      className={cx(
        {
          [styles['c-empty']]: layout,
          [styles['c-empty-container']]: !layout
        },
        className
      )}
      {...restProps}
    >
      {icon && (
        <Icon
          className={cx(styles['c-empty-img'], {
            [styles[`c-empty-img--${iconSize}`]]: iconSize !== 'normal'
          })}
          icon={icon}
          size="100%"
        />
      )}
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
  title: PropTypes.node.isRequired,
  text: PropTypes.node,
  className: PropTypes.string,
  layout: PropTypes.bool
}

Empty.defaultProps = {
  iconSize: 'normal',
  layout: true
}

export const EmptySubTitle = ({ ...restProps }) => (
  <Typography variant="body1" color="textSecondary" {...restProps} />
)

export default Empty
