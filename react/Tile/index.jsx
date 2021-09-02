import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Typography from '../Typography'
import styles from './styles.styl'

const Tile = ({ children, className, tag: Tag, isSecondary, ...props }) => {
  return (
    <Tag
      className={cx(
        styles.Tile,
        {
          [styles['Tile-secondary']]: isSecondary
        },
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export const TileDescription = ({ children, className }) => {
  return <div className={`${styles['Tile-desc']} ${className}`}>{children}</div>
}

export const TileTitle = ({ children, className }) => (
  <Typography variant="h6" className={`${styles['Tile-title']} ${className}`}>
    {children}
  </Typography>
)

export const TileSubtitle = ({ children }) => (
  <Typography variant="caption" className={styles['Tile-developer']}>
    {children}
  </Typography>
)

export const TileFooter = ({ children, className }) => (
  <Typography
    variant="caption"
    className={`${styles['Tile-status']} ${className}`}
  >
    {children}
  </Typography>
)

export const TileIcon = ({ children }) => {
  return <div className={styles['Tile-icon-wrapper']}>{children}</div>
}

Tile.propTypes = {
  className: PropTypes.string,
  isSecondary: PropTypes.bool,
  tag: PropTypes.string
}

Tile.defaultProps = {
  isSecondary: false,
  tag: 'div'
}

export default Tile
