import React from 'react'
import cx from 'classnames'
import styles from './styles.styl'

const Tile = ({ children, className, tag: Tag, ...props }) => {
  return (
    <Tag className={cx(styles.Tile, className)} {...props}>
      {children}
    </Tag>
  )
}

Tile.defaultProps = {
  tag: 'div'
}

export default Tile
