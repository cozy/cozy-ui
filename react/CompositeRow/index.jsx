import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Media, Bd, Img } from '../Media'
import { Text, Caption } from '../Text'
import styles from './styles.styl'

const denseStyle = { height: '48px' }

/**
 * A ready-made row layout for presenting rich information.
 */
const CompositeRow = ({
  style,
  className,
  primaryText,
  secondaryText,
  image,
  right,
  actions,
  dense,
  ...rest
}) => {
  return (
    <Media
      className={cx(
        className,
        styles.CompositeRow,
        dense ? styles.CompositeRow__dense : null
      )}
      style={dense ? Object.assign({}, denseStyle, style) : style}
      {...rest}
    >
      <div className="u-media u-media-grow u-row-m">
        {image ? <Img className="u-flex-self-start">{image}</Img> : null}
        <div className="u-media-grow u-stack-xs">
          <div className="u-media u-row-m">
            <Bd>
              <Text>{primaryText}</Text>
              {secondaryText ? <Caption>{secondaryText}</Caption> : null}
            </Bd>
            {right}
          </div>
          {actions}
        </div>
      </div>
    </Media>
  )
}

CompositeRow.propTypes = {
  /** Custom CSS */
  style: PropTypes.object,
  /** Custom class */
  className: PropTypes.string,
  /** First line */
  primaryText: PropTypes.node,
  /** Second line */
  secondaryText: PropTypes.node,
  /** Image to the left of the row */
  image: PropTypes.node,
  /**
   * Actions are shown below primary and secondary texts. Pass fragment for multiple elements.
   * Good to use with Chips.
   */
  actions: PropTypes.node,
  /* Element(s) to the show to the right of the CompositeRow */
  right: PropTypes.node,
  /** Row height will be fixed to 48px */
  dense: PropTypes.bool
}

export default CompositeRow
