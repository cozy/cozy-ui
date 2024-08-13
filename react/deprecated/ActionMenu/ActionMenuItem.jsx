import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { Media, Bd, Img } from '../Media'
import { spacingProp } from '../../Stack'

import styles from './styles.styl'

export const ActionMenuItem = ({
  left,
  children,
  right,
  onClick,
  className,
  contentSpacing
}) => {
  return (
    <Media
      className={cx(styles['c-actionmenu-item'], className)}
      onClick={onClick}
      align="top"
    >
      {left && <Img className="u-mh-1">{left}</Img>}
      <Bd
        className={cx(left ? 'u-mr-1' : 'u-mh-1', `u-stack-${contentSpacing}`)}
      >
        {children}
      </Bd>
      {right && <Img className="u-mr-1">{right}</Img>}
    </Media>
  )
}

ActionMenuItem.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  /** Controls spacing between between children of the ActionMenuItem */
  contentSpacing: spacingProp
}

ActionMenuItem.defaultProps = {
  contentSpacing: 'xs'
}
