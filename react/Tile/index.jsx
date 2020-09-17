import React from 'react'
import cx from 'classnames'
import { Caption } from '../Text'
import styles from './styles.styl'

const Tile = ({ children, className, tag: Tag, ...props }) => {
  return (
    <Tag className={cx(styles.Tile, className)} {...props}>
      {children}
    </Tag>
  )
}

export const TileDescription = ({ children }) => {
  return <div className={styles['Tile-desc']}>{children}</div>
}

export const TileTitle = ({ children }) => (
  <h4 className={styles['Tile-title']}>{children}</h4>
)

export const TileSubtitle = ({ children }) => (
  <Caption className={cx(styles['Tile-developer'], 'u-slateGrey')}>
    {children}
  </Caption>
)

export const TileFooter = ({ children }) => (
  <Caption className={styles['Tile-status']}>{children}</Caption>
)

export const TileIcon = ({ children }) => {
  return <div className={styles['Tile-icon-wrapper']}>{children}</div>
}

Tile.defaultProps = {
  tag: 'div'
}

export default Tile
