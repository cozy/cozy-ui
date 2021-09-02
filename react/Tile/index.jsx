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
  return <div className={cx(styles['Tile-desc'], className)}>{children}</div>
}

export const TileTitle = ({ children, className, isMultiline }) => (
  <Typography
    variant="h6"
    className={cx(
      styles['Tile-title'],
      {
        [styles['Tile-title-multiline']]: isMultiline
      },
      className
    )}
  >
    {children}
  </Typography>
)

export const TileSubtitle = ({ children }) => (
  <Typography variant="caption" className={styles['Tile-developer']}>
    {children}
  </Typography>
)

export const TileFooter = ({ children, className, isAccent }) => (
  <Typography
    variant="caption"
    className={cx(
      styles['Tile-status'],
      {
        [styles['Tile-status-accent']]: isAccent
      },
      className
    )}
  >
    {children}
  </Typography>
)

export const TileIcon = ({ children }) => {
  return <div className={styles['Tile-icon-wrapper']}>{children}</div>
}

TileTitle.propTypes = {
  className: PropTypes.string,
  isMultiline: PropTypes.bool
}

TileTitle.defaultProps = {
  isMultiline: false
}

TileFooter.propTypes = {
  className: PropTypes.string,
  isAccent: PropTypes.bool
}

TileFooter.defaultProps = {
  isAccent: false
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
