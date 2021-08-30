import React from 'react'
import cx from 'classnames'
import Typography from '../Typography'
import styles from './styles.styl'

const Tile = ({ children, className, tag: Tag, ...props }) => {
  return (
    <Tag className={cx(styles.Tile, className)} {...props}>
      {children}
    </Tag>
  )
}

export const TileDescription = ({ children, className }) => {
  return <div className={`${styles['Tile-desc']} ${className}`}>{children}</div>
}

export const TileTitle = ({ children }) => (
  <Typography variant="h6" className={styles['Tile-title']}>
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

Tile.defaultProps = {
  tag: 'div'
}

export default Tile
