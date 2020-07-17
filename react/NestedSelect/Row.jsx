import React from 'react'
import cx from 'classnames'

import { Media, Bd, Img } from '../Media'
import Icon from '../Icon'
import styles from './Row.styl'

export const RowBody = ({ children }) => (
  <Bd className="u-ellipsis">{children}</Bd>
)

const Row = ({
  isSelected,
  icon,
  label,
  children,
  hasArrow,
  onClick,
  className
}) => (
  <Media
    className={cx(
      styles.Row,
      'u-row-m',
      isSelected ? 'u-text-bold' : '',
      className
    )}
    onClick={onClick}
  >
    {icon && <Img>{icon}</Img>}
    {label ? <RowBody>{label}</RowBody> : null}
    {children}
    {hasArrow && (
      <Img>
        <Icon icon="right" color="var(--coolGrey)" />
      </Img>
    )}
  </Media>
)

export default Row
